import Image from 'next/image';
import React from 'react';

import saalogo from '~/images/logo_award_app.jpeg';
function SmartAppAward() {
  return (
    <section className='py-16 tracking-wider md:py-28'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='mx-auto max-w-4xl text-center'>
          <Image
            src={saalogo}
            alt='로고'
            // layout='responsive'
            width='202.5'
            height='30'
            className='mx-auto mb-4 justify-center md:w-1/3'
          />
          <div className='h1 flex-1 justify-center pb-5 text-center leading-loose '>
            스마트 앱 어워드 최우수상
          </div>
          <div className='md:h4 h5 flex-1 justify-center text-center leading-relaxed text-gray-700'>
            2021년 스마트 앱 어워드 코리아
          </div>
          <div className='md:h4 h5 flex-1 justify-center text-center leading-relaxed text-gray-700'>
            생활 쇼핑분야 <span className='text-green-700'>최우수상</span>을
            수상하였습니다.
          </div>
        </div>
      </div>
    </section>
  );
}

export default SmartAppAward;
