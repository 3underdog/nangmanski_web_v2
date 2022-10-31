/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next/types';
import { useSession } from 'next-auth/react';
import React, { Dispatch, SetStateAction } from 'react';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';

import { apiUrl } from '@/constant/env';
import {
  deleteArticle,
  deleteComment,
  getPostDetail,
  postComment,
} from '@/pages/api';
import { UserType } from '@/pages/api/auth/userType';
import PostBanner from '@/partials/community/banner';
import { Comment, Comments, ReplyType } from '@/partials/community/commentType';
import { PostImage, Results } from '@/partials/community/postType';
import TimeFormat from '@/utils/TimeFormat';

import Arrows from '~/images/comment_arrow.png';
import Avatar from '~/images/default_avatar.png';

const CommentCard = ({
  post_writer_nickName,
  comment,
  reply,
  setReplyComment,
}: {
  post_writer_nickName: string;
  comment: Comment;
  reply: Array<Comment>;
  setReplyComment: Dispatch<SetStateAction<ReplyType>>;
}) => {
  const { data: session } = useSession();
  const user = session?.user as UserType | null;
  const router = useRouter();
  return (
    <div className='h5 leading-5'>
      {/* 댓글 */}
      {comment && (
        <div className='mb-5 flex flex-col border-t-[1px] py-1'>
          <div className='mb-2 mt-3 flex flex-row items-center'>
            {comment.writer.images.length > 0 ? (
              <Image
                className='rounded-full'
                src={comment.writer.images[0].image}
                width={32}
                height={32}
                alt='유저 프로필사진'
              />
            ) : (
              <div
                className='flex justify-center rounded-full bg-gray-400 align-middle'
                style={{ height: 30, width: 30 }}
              >
                <Image
                  className='flex scale-75 justify-center align-middle'
                  src={Avatar}
                  width={20}
                  height={20}
                  alt='기본 프로필 사진'
                />
              </div>
            )}

            <div className='h6 md:h5 flex w-full flex-row justify-between space-x-2 pl-2 pt-1 text-gray-800 transition duration-150 ease-in-out'>
              <div className='flex-1'>
                lv.{comment.writer.level} {comment.writer.nickName}
                {comment.writer.nickName === post_writer_nickName && (
                  <span className='pl-1 text-gray-500'>(글작성자)</span>
                )}
              </div>
            </div>
          </div>
          <div className='h6 md:h5 h-full w-full whitespace-pre-wrap rounded-lg bg-gray-100 px-3 pb-2 pt-3 text-gray-800 antialiased md:leading-8'>
            {comment.content}
            <div className='md:h6 pt-2 text-left text-[10px] text-gray-500 md:pt-1'>
              <div className='flex space-x-2 text-right'>
                <div>{TimeFormat(comment.created_at)}</div>
                <div>|</div>
                <button
                  className='flex flex-row hover:text-green-700'
                  onClick={() => {
                    setReplyComment({
                      isReply: true,
                      comment_id: comment.id,
                      comment_user: comment.writer.nickName,
                      comment_content: comment.content,
                    });
                  }}
                >
                  <div className='pt-[1px] md:pt-[6px]'>
                    <svg
                      aria-hidden='true'
                      className='mr-1 h-4 w-4'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
                      ></path>
                    </svg>
                  </div>
                  답글
                </button>
                {/* FIXME : api에서 writer id도 포함시킨 후 nickName 비교가 아닌 id 비교필요 */}
                {comment.writer.nickName === user?.nickName && (
                  <>
                    <div>|</div>
                    <button
                      className='hover:text-red-500'
                      onClick={() => {
                        if (confirm('답글을 삭제하시겠습니까?')) {
                          deleteComment(user.accessToken, comment.id)
                            .then(function () {
                              alert('답글이 삭제되었습니다');
                              router.replace(router.asPath);
                            })
                            .catch(function () {
                              alert(
                                '오류가 발생했습니다. 잠시후 다시 시도해주세요 🥹'
                              );
                            });
                        }
                      }}
                    >
                      삭제
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 답글 */}
      {reply && (
        <div className=''>
          {reply.map((comment, key) => (
            <div className='flex flex-row' key={key}>
              <div className='mt-2 ml-3 mr-3'>
                <Image src={Arrows} width={15} height={15} alt='답글' />
              </div>
              <div className='mb-5 flex flex-1 flex-col'>
                <div className='mb-2 flex flex-row items-center'>
                  {comment.writer.images.length > 0 ? (
                    <Image
                      className='mr-2 rounded-full'
                      src={comment.writer.images[0].image}
                      width={32}
                      height={32}
                      alt='유저 프로필사진'
                    />
                  ) : (
                    <div
                      className='flex justify-center rounded-full bg-gray-400 align-middle'
                      style={{ height: 30, width: 30 }}
                    >
                      <Image
                        className='flex scale-75 justify-center align-middle'
                        src={Avatar}
                        width={20}
                        height={20}
                        alt='기본 프로필 사진'
                      />
                    </div>
                  )}
                  <div className='h6 md:h5 flex w-full flex-row justify-between space-x-2 pl-2 pt-1 text-gray-800 transition duration-150 ease-in-out'>
                    <div className='flex-1'>
                      lv.{comment.writer.level} {comment.writer.nickName}
                      {comment.writer.nickName === post_writer_nickName && (
                        <span className='pl-1 text-gray-500'>(글작성자)</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className='h6 md:h5 h-full w-full whitespace-pre-wrap rounded-lg bg-gray-100 px-3 pt-3 pb-2 text-gray-800 antialiased md:leading-8'>
                  {comment.content[0] === '@' ? (
                    <span className=' text-green-700'>
                      {comment.content.split(' ', 1)[0]}
                      <span className='text-gray-800'>
                        {comment.content.substr(
                          comment.content.split(' ', 1)[0].length
                        )}
                      </span>
                    </span>
                  ) : (
                    <span>{comment.content}</span>
                  )}

                  <div className='md:h6 pt-2 text-left text-[10px] text-gray-500 md:pt-1'>
                    <div className='flex space-x-2 text-right'>
                      <div>{TimeFormat(comment.created_at)}</div>
                      <div>|</div>
                      <button
                        className='flex flex-row hover:text-green-700'
                        onClick={() => {
                          setReplyComment({
                            isReply: true,
                            comment_id: comment.comment_id,
                            comment_user: comment.writer.nickName,
                            comment_content: comment.content,
                          });
                        }}
                      >
                        <div className='pt-[1px] md:pt-[6px]'>
                          <svg
                            aria-hidden='true'
                            className='mr-1 h-4 w-4'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
                            ></path>
                          </svg>
                        </div>
                        답글
                      </button>

                      {/* FIXME : api에서 writer id도 포함시킨 후 nickName 비교가 아닌 id 비교필요 */}
                      {comment.writer.nickName === user?.nickName && (
                        <>
                          <div>|</div>
                          <button
                            className='hover:text-red-500'
                            onClick={() => {
                              if (confirm('답글을 삭제하시겠습니까?')) {
                                deleteComment(user.accessToken, comment.id)
                                  .then(function () {
                                    alert('답글이 삭제되었습니다');
                                    router.replace(router.asPath);
                                  })
                                  .catch(function () {
                                    alert(
                                      '오류가 발생했습니다. 잠시후 다시 시도해주세요 🥹'
                                    );
                                  });
                              }
                            }}
                          >
                            삭제
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const CommentsDiv = ({
  postCommentCount,
  commentsArray,
  post_id,
  post_writer_nickName,
}: {
  postCommentCount: number;
  commentsArray: Comments;
  post_id: string;
  post_writer_nickName: string;
}) => {
  const Comments = commentsArray.filter(
    (value) => value.comment_id === null
  ) as Comments;
  const Replys = commentsArray.filter(
    (value) => value.comment_id !== null
  ) as Comments;

  const commentRef =
    React.useRef() as React.MutableRefObject<HTMLTextAreaElement>;
  const { data: session, status } = useSession();
  const user = session?.user as UserType;
  const router = useRouter();

  const [replyComment, setReplyComment] = React.useState<ReplyType>({
    isReply: false,
    comment_id: '',
    comment_user: '',
    comment_content: '',
  });

  React.useEffect(() => {
    if (status == 'authenticated' && replyComment.isReply) {
      commentRef?.current.blur();
      commentRef?.current.focus();
    }
  }, [replyComment, status]);

  const commentHandler = () => {
    postComment(
      user.accessToken,
      post_id,
      replyComment.isReply
        ? `@${replyComment.comment_user} ${commentRef.current.value}`
        : commentRef.current.value,
      replyComment.comment_id
    );
    alert('댓글이 등록되었습니다.');
    commentRef.current.value = '';
    setReplyComment({
      isReply: false,
      comment_id: '',
      comment_user: '',
      comment_content: '',
    });
    router.replace(router.asPath);
  };

  return (
    <div>
      <div className='mb-3 mt-12 text-left'>
        <h1 className='h5 md:h4 mb-3 text-gray-800'>
          댓글 {Comments.length + Replys.length}개{' '}
          {postCommentCount !== Comments.length + Replys.length && (
            <span className='h6 md:h5 ml-1'>
              (삭제된 댓글 {postCommentCount - Comments.length - Replys.length}
              개)
            </span>
          )}
        </h1>
      </div>
      {Comments.length === 0 && (
        <div className='my-2 border-t-[1px]'>
          <div className='h6 md:h5 my-5 mt-4 h-full w-full whitespace-pre-wrap rounded-lg bg-gray-100 px-4 pt-3 pb-2 text-gray-800 antialiased md:leading-8'>
            등록된 댓글이 없습니다. 제일 먼저 댓글을 작성해주세요 😀
          </div>
        </div>
      )}
      {Comments.map((comment) => {
        return (
          <CommentCard
            post_writer_nickName={post_writer_nickName}
            key={comment.id}
            comment={comment}
            setReplyComment={setReplyComment}
            reply={Replys.filter((reply) => reply.comment_id === comment.id)}
          />
        );
      })}
      <div className='h5 md:h4 border-b-[1px] pt-12 pb-3 text-gray-800'>
        {replyComment.isReply ? (
          <>
            <div className='flex flex-row justify-between'>
              <div>
                <span className='text-green-700'>
                  @{replyComment.comment_user}
                </span>
                님에게 답글{' '}
              </div>
              <button
                className='h6 md:h5 text-gray-600 hover:underline hover:underline-offset-2'
                onClick={() => {
                  setReplyComment({
                    isReply: false,
                    comment_id: '',
                    comment_user: '',
                    comment_content: '',
                  });
                }}
              >
                답글취소
              </button>
            </div>
            <div className='h6 md:h5 my-1 h-full w-full whitespace-pre-wrap rounded-lg bg-gray-100 px-4 pt-3 pb-2 text-gray-500 antialiased md:leading-8'>
              {replyComment.comment_content}
            </div>
          </>
        ) : (
          <div>댓글작성</div>
        )}
      </div>
      <div className=''>
        {status === 'authenticated' ? (
          <div className='mt-5 mb-16 md:mb-40'>
            <div className='relative'>
              <textarea
                id='comment'
                className='placeholder:md:h5 placeholder:h6 h6 md:h5 h-28 w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-3 pr-20 text-gray-900 focus:border-green-500 focus:bg-white focus:ring-green-500 md:h-24 md:p-3'
                placeholder={
                  replyComment.isReply
                    ? '답글을 작성해주세요'
                    : '댓글을 작성해주세요'
                }
                required
                ref={commentRef}
              />
              <button
                onClick={() => {
                  commentHandler();
                }}
                className='absolute right-2.5 bottom-2.5 mb-3 rounded-lg bg-green-700 px-4 py-1 text-sm font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 md:pt-2'
              >
                <span className='h6'>작성</span>
              </button>
            </div>
          </div>
        ) : (
          <div className='h5 mb-10 mt-5 w-full rounded-lg bg-gray-100 py-8 text-center text-gray-800'>
            로그인이 필요한 기능입니다.
            <Link href='/auth/login'>
              <span className='decoratio pl-1 text-gray-500  decoration-gray-500'>
                (로그인)
              </span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default function Article({
  data,
}: {
  data: InferGetServerSidePropsType<Comments>;
}) {
  const commentsArray = data as Comments;
  const router = useRouter();
  const [post, setPost] = React.useState<Results>({
    id: '',
    writer: { nickName: '', images: [], level: 0 },
    categorty: {
      id: 0,
      text: '',
      state: '',
    },
    title: '',
    content: '',
    images: [],
    value: '',
    state: '',
    viewCount: 0,
    commentCount: 0,
    created_at: '',
  });
  React.useEffect(() => {
    if (!router.query.post) {
      getPostDetail(router.asPath.split('/')[3]).then(function (response) {
        setPost(response.results[0]);
      });
    } else {
      setPost(JSON.parse(router.query.post));
    }
    // console.log('POST', post);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { data: session, status } = useSession();
  const user = session?.user as UserType;
  const deleteHandler = () => {
    if (confirm('게시글을 삭제하시겠습니까?')) {
      deleteArticle(user.accessToken, post.id)
        .then(function () {
          alert('게시글이 삭제되었습니다.');
          router.push('/community');
        })
        .catch(function () {
          alert('오류가 발생했습니다. 잠시후 다시 시도해주세요 🥹');
        });
    }
  };
  const editHandler = () => {
    if (confirm('게시글을 수정하시겠습니까?')) {
      router.push(
        {
          pathname: '/community/post/write/',
          query: {
            prevId: post.id,
            prevTitle: post.title,
            prevContent: post.content,
          },
        }
        // `/community/post/edit/${post.id}`
      );
    }
  };
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <main>
        <section className='bg-white'>
          <PostBanner />
          <div className='layout h3 mx-auto pt-5'>
            <div className='h3 md:my-4'>{post.title}</div>
            <div className='h6 md:h5 mt-2 flex justify-between border-b-[1px] text-gray-700'>
              <div className='mb-3 flex'>
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
                <div className='md:mt-2'>
                  lv.{post.writer.level} {post.writer.nickName}
                </div>
              </div>
              <div className='flex pr-1 text-[10px] md:mt-2 md:text-[13px]'>
                조회 {post.viewCount} · 댓글 {post.commentCount} ·{' '}
                {TimeFormat(post.created_at)}
              </div>
            </div>
            <div className='mt-5'>
              {post.images.length > 0 && (
                <Carousel
                  dynamicHeight={true}
                  emulateTouch={true}
                  showArrows={true}
                  showThumbs={false}
                >
                  {post.images.map((photo: PostImage) => {
                    return (
                      <div key={photo.id} className='rounded-3xl '>
                        {photo && (
                          <div>
                            <img
                              src={photo.image}
                              alt={photo.id}
                              className='max-h-[1260px]'
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </Carousel>
              )}
            </div>
            <div className='h6 md:h5 my-5 whitespace-pre-wrap rounded-2xl bg-gray-100 px-3 pt-5 pb-10 text-left leading-6 text-gray-700 antialiased md:px-8 md:pt-8 md:leading-8'>
              {post.content}
            </div>
            {/* TODO: nickname이 아닌 user id로 검증필요 */}
            {status === 'authenticated' &&
              user.nickName == post.writer.nickName && (
                <div className='h6 md:h5  -mt-3 text-right text-gray-700 md:-mt-1'>
                  <span
                    className='ml-1 cursor-pointer hover:text-pink-600'
                    onClick={() => {
                      editHandler();
                    }}
                  >
                    수정
                  </span>
                  <span
                    className='ml-1 cursor-pointer hover:text-pink-600'
                    onClick={() => {
                      deleteHandler();
                    }}
                  >
                    {' '}
                    · 삭제
                  </span>
                </div>
              )}

            <div className='mb-4'>
              {commentsArray && (
                <div className='-mt-3 md:mt-0'>
                  <CommentsDiv
                    postCommentCount={post.commentCount}
                    commentsArray={commentsArray}
                    post_id={post.id}
                    post_writer_nickName={post.writer.nickName}
                  />
                </div>
              )}
            </div>
            <div className='h4 pb-3 text-left text-gray-800 md:hidden'>
              큐찾사 앱 다운로드
            </div>
            <div className='mx-auto mb-8 flex flex-row justify-center text-white md:hidden md:justify-start'>
              <div className='m-2 md:m-3'>
                <ArrowLink
                  as={ButtonLink}
                  variant='light'
                  className='h5 inline-flex h-12 w-40 items-center justify-center rounded-xl md:h-16 md:w-44'
                  href='https://play.google.com/store/apps/details?id=com.cuechatsaapp&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
                >
                  Google Play
                </ArrowLink>
              </div>
              <div className='m-2 md:m-3'>
                <ArrowLink
                  as={ButtonLink}
                  variant='light'
                  className='h5 inline-flex h-12 w-40 items-center justify-center rounded-xl md:h-16 md:w-44'
                  href='https://apps.apple.com/app/id1524591264'
                >
                  App Store
                </ArrowLink>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const fetchUrl = `${apiUrl}/post/web/comment/?post_id=${context.params?.id}&page_size=500`;
  const res = await axios.get(fetchUrl);
  const data = (await res.data.results) ? await res.data.results : null;
  return {
    props: { data },
  };
};
