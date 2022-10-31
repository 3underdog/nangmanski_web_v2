import Image from 'next/image';
import React from 'react';

import MockupHalf from '~/images/mockup_half.png';
import Premeium from '~/svg/Premeium.svg';

function FindCuePremeium() {
  return (
    <section className='relative '>
      <div className='relative mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='pt-32 pb-20 md:pt-40 md:pb-44'>
          <div className='mx-auto max-w-xl space-y-16 md:flex md:max-w-none md:items-center md:space-x-8 md:space-y-0 lg:space-x-16 xl:space-x-20'>
            {/* Hero image */}
            <div data-aos='fade-left'>
              {/* Image */}
              <div className='flex items-center justify-center'>
                <div className='relative w-3/4'>
                  <Image
                    // className='mx-auto md:max-w-none'
                    className='mx-auto mb-5'
                    src={MockupHalf}
                    alt='Hero'
                  />
                </div>
              </div>
            </div>
            <div
              className='px-3 text-left md:min-w-[30rem] md:text-left'
              data-aos='fade-right'
            >
              <div className='h3 pb-3 font-semibold text-green-700'>
                <Premeium className='text-[60px]' />
              </div>
              <div className='h1 pt-2 pb-10 leading-relaxed '>
                <div className=''>중고큐와 신품의</div>
                <div className=''>경계를 없애다</div>
              </div>
              <div className='h5 w-11/12 text-gray-700 md:text-xl'>
                <div></div>
                <div className='pb-5'>
                  프리미엄 등급은 새상품이거나 큐찾사 검수결과 새상품에 가까운
                  컨디션을 유지하는 큐입니다.
                </div>
                <div className='pb-5'>
                  원하는 팁을 미리 부착하거나 클리닝, 선골 교체같은 A/S 서비스가
                  가능합니다.
                </div>
                <div className='pb-5'>
                  김치빌리아드 쇼핑몰에서 판매되는 1,500여가지 당구용품과 함께
                  주문도 가능합니다.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FindCuePremeium;
