import Image from 'next/image';
import React from 'react';

import Banner1 from '~/images/banner1.png';

function HomeBanner() {
  return (
    <section className='relative'>
      <div className='mx-auto max-w-6xl px-4 pt-6 pb-4 md:px-6 md:pt-16'>
        <div
          className='h4 text-left text-gray-600'
          data-aos='zoom-y-out'
          data-aos-delay='150'
        >
          <div className='h-20 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 shadow-md '>
            <div className='hover:scale-105 hover:duration-200 hover:ease-in-out'>
              <div className='text-md pt-4 pl-6 text-gray-50'>
                22시즌도 낭만스키와 함께해요
              </div>
              <div className='pt-1 pl-6 text-sm text-gray-50'>
                모든 스키장의 실시간 정보를 제공합니다.
              </div>
            </div>
          </div>

          {/* <div className='flex flex-1 justify-end'>
            <Image className='rounded-xl' src={Banner1} alt='Target' />
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default HomeBanner;
