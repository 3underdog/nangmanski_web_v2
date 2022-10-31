import Image from 'next/image';
import React from 'react';

import MockupHalf from '~/images/mockup_half.png';

function FindCueIntro() {
  return (
    <section className='relative'>
      <div className='relative mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='pt-32 pb-20 md:pt-40 md:pb-44'>
          <div className='mx-auto max-w-xl space-y-16 md:flex md:max-w-none md:items-center md:space-x-8 md:space-y-0 lg:space-x-16 xl:space-x-20'>
            <div
              className='px-3 text-left md:min-w-[30rem] md:text-left'
              data-aos='fade-right'
            >
              <div className='h3 pb-3 font-semibold text-green-700'>
                내큐찾기
              </div>
              <div className='h1 pt-2 pb-10 leading-relaxed '>
                <div className=''>중고큐의 기준이 되다</div>
                <div className=''>모든 큐를</div>
                <div className=''>전부 관리하니까</div>
              </div>
              <div className='h5 w-11/12 text-gray-600 md:text-xl'>
                <div className='pb-5 '>
                  등록된 모든 큐들은 전문가의 검수와
                  <br />
                  수리 후 등록된 제품입니다.
                </div>
                <div>
                  구매 후 바로 사용할 수 있도록
                  <br /> 최상의 상태로 세팅되어 출고됩니다.
                </div>
              </div>
            </div>

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
          </div>
        </div>
      </div>
    </section>
  );
}

export default FindCueIntro;
