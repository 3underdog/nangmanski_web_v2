import Image from 'next/image';
import React, { Dispatch, SetStateAction } from 'react';
import { useInfiniteQuery } from 'react-query';
import useLocalStorage from 'use-local-storage';

import useDialog from '@/hooks/useDialog';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

import { getCueList } from '@/pages/api/index';
import { Part, Results } from '@/partials/findcue/cueType';

import LoadingGif from '~/svg/FLoading.svg';
import Premeium from '~/svg/Premeium.svg';

const InfiniteCueList = ({
  isPremeium,
  isSet,
  isShaft,
  isButt,
  isRefreshing,
  isBuying,
  setIsRefreshing,
  document_id,
}: {
  isPremeium: boolean;
  isSet: boolean;
  isShaft: boolean;
  isButt: boolean;
  isBuying: boolean;
  isRefreshing: boolean;
  setIsRefreshing: Dispatch<SetStateAction<boolean>>;
  document_id: string;
}) => {
  const { data, hasNextPage, fetchNextPage, refetch, isFetching } =
    useInfiniteQuery(
      'cuelist',
      ({ pageParam = '' }) =>
        getCueList(
          pageParam,
          isPremeium,
          isSet,
          isShaft,
          isButt,
          isBuying,
          document_id
        ),
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
  const [scrollY, setScrollY] = useLocalStorage('cueListScroll', 0);
  const dialog = useDialog();
  const openModal = (cue: Results) => {
    dialog({
      title: '',
      description: <></>,
      catchOnCancel: true,
      submitText: '네',
      cancleText: '닫기',
      variant: 'warning',
      cue: cue,
    })
      .then()
      .catch();
    return <></>;
  };
  React.useEffect(() => {
    if (scrollY !== 0) {
      window.scrollTo(0, Number(scrollY));
      setScrollY(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const get_type = (type: number) => {
    if (type === 0) {
      return '하대';
    } else if (type === 1) {
      return '상대';
    } else {
      return '';
    }
  };

  const LoadingDiv = () => {
    return (
      <div className='h6 md:h4 flex justify-center border-b-[1px] py-6 md:py-20'>
        <div className='my-auto mr-2 pt-1 text-green-700 md:pt-[1px]'>
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
          page.results.map((cue: Results) => (
            <li key={cue.id} data-aos='fade-up' data-aos-duration='200'>
              <div>
                {/* <a> */}
                {/* <Link
                href={{
                  pathname: `findcue/${cue.id}`,
                  query: { results: JSON.stringify(cue) },
                }}
                scroll={false}
                as={`findcue/${cue.id}`}
                passHref
              >
                <a
                  href={`findcue/${cue.id}`}
                  onClick={() => setScrollY(window.scrollY)}
                > */}
                <div
                  className='h6 md:h4 delay-10 flex-col border-b-[1px] py-5 md:py-12 md:transition md:ease-in-out md:hover:scale-105'
                  onClick={() => openModal(cue)}
                >
                  <div className='flex'>
                    {/* 이미지 */}
                    <div className='w-1/3 md:w-1/4'>
                      <div className='rounded-lg border-[1px] drop-shadow-sm md:rounded-2xl md:drop-shadow-lg '>
                        <Image
                          className='absolute flex-none rounded-lg md:rounded-2xl'
                          alt={cue.images[0].id}
                          src={cue.images[0].image}
                          layout='responsive'
                          width='100%'
                          height='100%'
                          placeholder='blur'
                          blurDataURL='data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=='
                        ></Image>
                      </div>

                      {(cue.state === 'end' ||
                        cue.state === 'delivery' ||
                        cue.state === 'purchased' ||
                        cue.state === 'report' ||
                        cue.state === 'timeout' ||
                        cue.state === 'returning') && (
                        <div className='h6 md:h4 mt-1 w-full rounded-lg bg-black/50 py-1 text-center text-white md:mt-3 md:rounded-2xl'>
                          판매완료
                        </div>
                      )}
                    </div>
                    {cue.isPremium && (
                      <div className='absolute flex-none pl-1 pt-1 md:pt-3 md:pl-3'>
                        <Premeium className='text-[25px] md:text-[50px]' />
                      </div>
                    )}
                    <div className='md:3/4 w-2/3 flex-row  pl-3 md:pl-12'>
                      {/* 파트정보 */}
                      <div className='flex-col'>
                        {[...cue.parts]
                          .sort(function sort_by_type(curr, next) {
                            return curr.type - next.type;
                          })
                          .map((part: Part) => (
                            <div key={part.id}>
                              <div className='pb-2 md:pb-4'>
                                <div className='text-green-700 md:pb-1'>
                                  [{get_type(part.type)}]
                                </div>
                                <div className='h5 md:h3 md:pb-1'>
                                  {part.adminData.brand}{' '}
                                  {part.adminData.goods_name}
                                </div>
                                <div className='text-gray-600 md:pb-1'>
                                  {part.adminData.joint_type
                                    .toUpperCase()
                                    .replace(' ', '')
                                    .replace('조인트', '')
                                    .replace('WJ', '우드')}{' '}
                                  조인트 · {part.adminData.weight}g
                                  {part.adminData.modelYear !==
                                    '0000년 00월' && (
                                    <>
                                      {' '}
                                      ·{' '}
                                      {part.adminData.modelYear.replace(
                                        '20',
                                        ''
                                      )}
                                    </>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>

                      {/* 가격 */}
                      <div className='h4 md:h2 flex flex-row text-green-700 md:pt-3'>
                        <div>
                          {cue.price.toLocaleString()}
                          <span className='h6 md:h3 pl-1 md:pl-2'>원</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 조회, 생성일 */}
                  <div className='h6 md:h5 fle-row-reverse flex-1 pt-2 text-right text-gray-600 md:pt-4'>
                    조회 {cue.view_cnt.toLocaleString()}회
                    {/* ·{' '}{TimeFormat(cue.created_at)} */} · 찜{' '}
                    {cue.like_cnt.toLocaleString()}회
                  </div>
                </div>
              </div>
              {/* </a>
              </Link> */}
            </li>
          ))
        )}
      </ul>
      <div className='h5 md:h4 flex justify-center'>
        {hasNextPage && (
          <>
            <LoadingDiv />
            <button onClick={() => fetchNextPage()} className='text-center'>
              {/* 💚 로딩중 ... 💚 */}
            </button>
          </>
        )}
        {document_id.length > 0 && data?.pages[0].results.length === 0 && (
          <div className='mt-2 mr-2 py-16 text-center leading-8'>
            <div className='h3'>검색 결과가 없습니다 🥲</div>
            <div className='md:h4 h5 mt-10 text-gray-700'>
              상품번호를 다시 확인해주세요
            </div>
            <div className='md:h4 h5 font-medium text-gray-700'>
              검색어 예시] CUE-00865, 00865
            </div>
          </div>
        )}
        {document_id.length === 0 && !isFetching && !hasNextPage && (
          <div className='mt-2 py-16 text-center'>
            등록된 모든 큐를 로딩했습니다
          </div>
        )}
      </div>
      {/* document_id 검색결과가 있을때 */}
      {document_id.length !== 0 && data?.pages[0].results.length !== 0 && (
        <div className='flex justify-center py-16  text-gray-500 md:py-20'>
          중고큐 거래는 큐찾사 !
        </div>
      )}
      <div ref={loadMoreButtonRef} />
    </>
  );
};

export default InfiniteCueList;
