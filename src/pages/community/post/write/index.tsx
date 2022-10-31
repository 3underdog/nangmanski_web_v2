import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { editArticle, postArticle } from '@/pages/api';
import { UserType } from '@/pages/api/auth/userType';

function PostWrite() {
  const { data: session, status } = useSession();
  const user = session?.user as UserType;
  const router = useRouter();

  const prevId = router.query.prevId as string;
  const prevContent = router.query.prevContent as string;
  const prevTitle = router.query.prevTitle as string;

  const [title, setTitle] = React.useState<string>('');
  const [content, setContent] = React.useState<string>('');

  React.useEffect(() => {
    if (status !== 'authenticated') {
      router.push('/community');
    }
    if (prevId && prevContent && prevTitle) {
      setTitle(prevTitle);
      setContent(
        prevContent.substr(prevContent.length - 4, 3) === '수정됨'
          ? prevContent.substr(0, prevContent.length - 28)
          : prevContent
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const titleRef =
    React.useRef() as React.MutableRefObject<HTMLTextAreaElement>;
  const contentRef =
    React.useRef() as React.MutableRefObject<HTMLTextAreaElement>;
  const onClickHandler = () => {
    if (title.length > 1 && content.length > 1) {
      // 게시글 수정
      if (prevId) {
        if (confirm('게시글을 수정하시겠습니까?')) {
          const now = new Date();
          const date = new Date(+now + 3240 * 10000)
            .toISOString()
            .split('T')[0];
          const time = now.toTimeString().split(' ')[0];
          editArticle(
            user.accessToken,
            prevId,
            title,
            `${content}\n\n(${date} ${time}에 수정됨)`
          )
            .then(function () {
              alert('게시글이 수정되었습니다.');
              router.push(`/community/post/${prevId}`);
            })
            .catch(function () {
              alert('오류가 발생했습니다. 잠시후 다시 시도해주세요 🥹');
            });
        }
      }
      // 게시글 등록
      else if (confirm('게시글을 등록하시겠습니까?')) {
        postArticle(user.accessToken, title, content)
          .then(function () {
            alert('게시글이 등록되었습니다.');
            router.push('/community');
          })
          .catch(function () {
            alert('오류가 발생했습니다. 잠시후 다시 시도해주세요 🥹');
          });
      }
    }
  };
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <main>
        <section className='min-h-screen bg-white md:min-h-[700px]'>
          <div className='layout h3 mx-auto pt-5'>
            <div
              className='h6 md:h5 cursor-pointer text-gray-600 hover:text-pink-500'
              onClick={() => {
                router.back();
              }}
            >
              {'< '} 뒤로가기
            </div>
            <div className='text-left md:pt-5'>게시글 작성</div>
            <div className='h6 md:h5 pt-1 text-gray-600'>
              * 사진 업로드/수정 기능은 개발중입니다.
            </div>
            <label
              htmlFor='message'
              className='h6 md:h5 mt-2 mb-2 block text-gray-900 md:mt-4'
            >
              제목
            </label>
            <textarea
              id='title'
              rows={1}
              className='h6 md:h5 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500'
              placeholder='제목을 작성해주세요'
              ref={titleRef}
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></textarea>

            <div className='relative'>
              <label
                htmlFor='message'
                className='h6 md:h5 mt-4 mb-2 block text-gray-900 md:mt-8'
              >
                내용
              </label>
              <textarea
                id='comment'
                className='placeholder:md:h5 placeholder:h6 h6 md:h5 w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-3 pr-20 text-gray-900 focus:border-green-500 focus:bg-white focus:ring-green-500 md:p-3'
                placeholder='내용을 작성해주세요'
                rows={10}
                required
                ref={contentRef}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <button
                onClick={() => {
                  onClickHandler();
                }}
                className='absolute right-2.5 bottom-2.5 mb-3 rounded-lg bg-green-700 px-4 py-2 text-sm font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 md:pt-2'
              >
                <span className='h6'>{prevId ? '수정' : '게시글 등록'}</span>
              </button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default PostWrite;

{
  /* <label
                htmlFor='message'
                className='h6 md:h5 mt-4 mb-2 block text-gray-500 md:mt-4'
              >
                사진
              </label>
              <input
                className='file:h6 block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 px-2 py-1 text-sm
                text-gray-900 file:mr-4 file:rounded-full file:border-0 file:bg-green-700 file:py-1 file:px-4 file:pt-[6px] file:text-white hover:file:bg-green-600 focus:outline-none md:file:pt-[8px]'
                aria-describedby='file_input_help'
                id='file_input'
                type='file'
              />
              <p className='h7 md:h6 text-pink-500' id='file_input_help'>
                * 사진업로드 기능 개발중입니다.
              </p> */
}
