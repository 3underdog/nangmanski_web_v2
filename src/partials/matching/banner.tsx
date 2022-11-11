import { useSession } from 'next-auth/react';
import React from 'react';

function MatchingBanner() {
  const { status } = useSession();
  return (
    <section className='relative'>
      <div className='bg-gradient-to-r from-sky-400 to-sky-600 py-3'>
        <div className='flex-row text-center text-slate-100'>
          <div className='h6 md:h4 pt-1'>
            {status === 'authenticated'
              ? '강습 매칭 준비중입니다'
              : '강습 매칭 준비중입니다'}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MatchingBanner;
