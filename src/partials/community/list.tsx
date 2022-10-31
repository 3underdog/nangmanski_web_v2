import Image from 'next/image';
import Link from 'next/link';
import React, { Dispatch, SetStateAction } from 'react';
import { useInfiniteQuery } from 'react-query';
import useLocalStorage from 'use-local-storage';

import useIntersectionObserver from '@/hooks/useIntersectionObserver';

import { getPostList } from '@/pages/api/index';
import { Results } from '@/partials/community/postType';
import TimeFormat from '@/utils/TimeFormat';

import LoadingGif from '~/svg/CLoading.svg';

const InfinitePostList = ({
  keyword,
  isRefreshing,
  setIsRefreshing,
}: {
  keyword: string;
  isRefreshing: boolean;
  setIsRefreshing: Dispatch<SetStateAction<boolean>>;
}) => {
  const { data, hasNextPage, fetchNextPage, refetch, isFetching } =
    useInfiniteQuery(
      'postlist',
      ({ pageParam = '' }) => getPostList(pageParam, keyword),
      {
        getNextPageParam: (lastPage) => {
          if (lastPage.next === null) {
            return undefined;
          }
          const url = new URL(lastPage.next);
          const lastOffset = url.searchParams.get('offset');
          if (lastOffset) {
            return parseInt(lastOffset);
          } else {
            return undefined;
          }
        },
        staleTime: 60 * 1000,
        cacheTime: 60 * 1000,
        keepPreviousData: true,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
      }
    );

  React.useEffect(() => {
    if (isRefreshing) {
      refetch();
    }
    setIsRefreshing(false);
  }, [isRefreshing, refetch, setIsRefreshing]);

  const loadMoreButtonRef = React.useRef(null);

  useIntersectionObserver({
    root: null,
    target: loadMoreButtonRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  });

  const [scrollY, setScrollY] = useLocalStorage('PostListScroll', 0);
  React.useEffect(() => {
    if (scrollY !== 0) {
      window.scrollTo(0, Number(scrollY));
      setScrollY(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const LoadingDiv = () => {
    return (
      <div className='h6 md:h4 flex justify-center border-b-[1px] py-6 md:py-10'>
        <div className='my-auto mr-2 pt-1 text-pink-500 md:pt-[1px]'>
          {' '}
          로딩중{' '}
        </div>
        <div>
          <LoadingGif className='text-2xl' />
        </div>
      </div>
    );
  };
  return (
    <>
      <ul>
        {isFetching && <LoadingDiv />}
        {data?.pages.map((page) =>
          page.results.map((post: Results) => (
            <li key={post.id} data-aos='fade-up' data-aos-duration='200'>
              <Link
                href={{
                  pathname: `community/post/${post.id}`,
                  query: { post: JSON.stringify(post) },
                }}
                as={`community/post/${post.id}`}
                passHref
              >
                <a
                  href={`community/post/${post.id}`}
                  onClick={() => setScrollY(window.scrollY)}
                >
                  <div className='h6 md:h4 delay-10 flex-col border-b-[1px] border-gray-200 py-5 md:py-12 md:transition md:ease-in-out md:hover:scale-105 '>
                    <div className='flex'>
                      <div className='h-24 w-3/4 flex-row pr-3 md:w-4/5 md:pr-12'>
                        <div className='md:h4 truncate pb-2 text-[15px]'>
                          {post.title}
                        </div>
                        <div className='h6 md:h4 h-14 overflow-hidden text-ellipsis whitespace-normal text-gray-600 antialiased'>
                          {post.content}
                        </div>
                      </div>
                      {/* 이미지 */}
                      {post.images.length > 0 && (
                        <div className='w-1/4 md:w-1/5'>
                          <div className='rounded-lg border-[1px] drop-shadow-sm md:rounded-2xl md:drop-shadow-lg '>
                            <Image
                              className='absolute flex-none rounded-lg md:rounded-2xl'
                              alt={post.images[0].id}
                              src={post.images[0].image}
                              layout='responsive'
                              width='100%'
                              height='100%'
                              placeholder='blur'
                              blurDataURL='data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=='
                            ></Image>
                          </div>
                        </div>
                      )}
                    </div>
                    {/* 작성자 댓글 조회수 */}
                    <div className='h6 md:h5 mt-2 flex justify-between text-gray-700'>
                      <div className='flex font-black'>
                        {post.writer.images.length > 0 && (
                          <div className='mr-2 h-6 w-6 md:h-8 md:w-8'>
                            <div className='rounded-full border-[1px]'>
                              <Image
                                className='absolute flex-none rounded-full'
                                alt={post.writer.images[0].id}
                                src={post.writer.images[0].image}
                                layout='responsive'
                                width='100%'
                                height='100%'
                                placeholder='blur'
                                blurDataURL='data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=='
                              ></Image>
                            </div>
                          </div>
                        )}
                        <div className='mt-[2px] font-secondary font-[800] md:mt-[6px] md:text-[16px]'>
                          LV.{post.writer.level} {post.writer.nickName}
                        </div>
                      </div>
                      <div className='mt-1 flex pr-1 md:mt-2'>
                        조회 {post.viewCount} · 댓글 {post.commentCount} ·{' '}
                        {TimeFormat(post.created_at)}
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </li>
          ))
        )}
      </ul>
      <div className='h5 md:h4 flex justify-center md:py-20'>
        {hasNextPage && (
          <>
            <LoadingDiv />
            <button onClick={() => fetchNextPage()} className='text-center'>
              {/* 💚 로딩중 ... 💚 */}
            </button>
          </>
        )}
        {keyword.length > 0 && data?.pages[0].results.length === 0 && (
          <div className='mt-2 mr-2 py-16 text-center leading-8'>
            <div className='h3'>검색 결과가 없습니다 🥲</div>
            <div className='md:h4 h5 mt-10 text-gray-700'>
              다른 검색어로 검색해주세요.
            </div>
          </div>
        )}
        {keyword.length !== 0 && !isFetching && !hasNextPage && (
          <div className='mt-2 py-4 text-center'></div>
        )}
        {keyword.length === 0 && !isFetching && !hasNextPage && (
          <div className='mt-2 py-8 text-center'>
            등록된 모든 게시글을 로딩했습니다.
          </div>
        )}
      </div>
      <div ref={loadMoreButtonRef} />
    </>
  );
};

export default InfinitePostList;
