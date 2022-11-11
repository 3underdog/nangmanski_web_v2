import { useSession } from 'next-auth/react';
import React from 'react';

function PostBanner() {
  const { status } = useSession();
  return (
    <section className='relative'>
      <div className='bg-gradient-to-r from-blue-400 to-blue-600 py-3'>
        <div className='flex-row text-center text-slate-100'>
          <div className='h6 md:h4 pt-1'>
            {status === 'authenticated'
              ? '커뮤니티 준비중입니다'
              : '커뮤니티 준비중입니다'}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PostBanner;
