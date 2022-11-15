import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import Banner1 from '~/images/banner1.png';

function HomeBanner() {
  return (
    <section className='relative'>
      <div className='mx-auto max-w-6xl px-4 pt-6 pb-4 md:px-6 md:pt-8'>
        <div
          className={clsx(
            'h4 text-left text-gray-600',
            'rounded-xl',
            'duration-200 md:hover:scale-[1.02] md:hover:ease-in-out'
          )}
          // data-aos='zoom-y-out'
          // data-aos-delay='20'
        >
          <Carousel
            dynamicHeight={true}
            emulateTouch={true}
            // showArrows={false}
            showThumbs={false}
            showIndicators={true}
            showStatus={false}
          >
            <div className=' rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 text-left'>
              <div className='pb-10  md:hover:duration-200 md:hover:ease-in-out'>
                <div className='text-md pt-4 pl-6 text-gray-50'>
                  22시즌 낭만스키와 함께 💙
                </div>
                <div className='h-10 pt-1 pl-6 text-xs text-gray-50'>
                  얼른 스키장 가고싶지 않나요 ?
                </div>
              </div>
            </div>

            <div className=' rounded-xl bg-gradient-to-r from-gray-900 to-gray-900 text-left shadow-md '>
              <div className='pb-10 md:hover:ease-in-out'>
                <div className='text-md pt-4 pl-6 text-gray-50'>
                  여기 배너 광고주 모집 합니다 🖤
                </div>
                <div className='h-20 pt-1 pl-6 text-xs text-gray-50'>
                  <div>cha2hyun.dev@gmail.com 🙏</div>
                  <div></div>
                </div>
              </div>
            </div>
          </Carousel>

          {/* <div className='flex flex-1 justify-end'>
            <Image className='rounded-xl' src={Banner1} alt='Target' />
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default HomeBanner;
