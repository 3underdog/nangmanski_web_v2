import React from 'react';

function FindBanner() {
  return (
    <section className='relative'>
      <div className='bg-gradient-to-r from-green-600 to-green-700 py-3'>
        <div className='flex-row text-center text-slate-100'>
          <div className='h6 md:h4 pt-1'>
            큐 구매 및 상세검색은 큐찾사 앱에서만 가능합니다
          </div>
        </div>
      </div>
    </section>
  );
}

export default FindBanner;
