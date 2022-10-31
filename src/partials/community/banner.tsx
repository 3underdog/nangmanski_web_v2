import { useSession } from 'next-auth/react';
import React from 'react';

function PostBanner() {
  const { status } = useSession();
  return (
    <section className='relative'>
      <div className='bg-gradient-to-r from-pink-400 to-pink-600 py-3'>
        <div className='flex-row text-center text-slate-100'>
          <div className='h6 md:h4 pt-1'>
            {status === 'authenticated'
              ? '깨끗한 커뮤니티 큐찾사와 함께 만들어요'
              : '게시글, 댓글 작성은 로그인이 필요합니다.'}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PostBanner;
