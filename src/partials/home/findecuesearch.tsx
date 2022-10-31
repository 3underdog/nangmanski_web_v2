import Image from 'next/image';
import React from 'react';

import MockupHalf from '~/images/mockup_half.png';

function FindCueSearch() {
  return (
    <section className='bg-[#f8f8f8] py-28 tracking-wider'>
      <div className='mx-auto max-w-6xl px-8 leading-relaxed sm:px-6'>
        <div className='py-12 md:py-20'>
          <div className='mx-auto max-w-3xl pb-12 text-center md:pb-20 lg:mx-0 lg:text-left'>
            <div className='h3 pb-3 font-semibold text-green-700'>
              검색 & 알림
            </div>
            <div className='h1 pt-2 pb-10 leading-relaxed'>
              <div className=''>내큐를 찾는건</div>
              <div className=''>한눈에 보이고</div>
              <div className=''>쉬워야 하니까</div>
            </div>
          </div>

          <div className='relative mx-auto grid max-w-sm items-start gap-8 md:max-w-none md:grid-cols-3 lg:gap-16 lg:gap-y-20'>
            <div className='relative' data-aos='fade-up'>
              <Image
                alt='mockup'
                src={MockupHalf}
                className='mx-auto mb-5 w-11/12'
              ></Image>
              <div className='h4 mb-2 text-center text-green-700'>
                간편 비교
              </div>
              <div className='h5 mb-3 text-center text-gray-700 md:text-xl '>
                상품, 가격, 구성, 무게, 조인트
                <br />
                필요한 내용을 한눈에 확인해보세요
              </div>
            </div>

            <div className='relative' data-aos='fade-up' data-aos-delay='100'>
              <Image
                alt='mockup'
                src={MockupHalf}
                className='mx-auto mb-5 w-11/12'
              ></Image>
              <div className='h4 mb-2 text-center text-green-700'>
                상세 검색
              </div>
              <div className='h5 mb-3 text-center text-gray-700 md:text-xl '>
                원하는 조건을 선택해서
                <br />
                내가 원하는 큐만 확인해보세요
              </div>
            </div>

            <div className='relative' data-aos='fade-up' data-aos-delay='200'>
              <Image
                alt='mockup'
                src={MockupHalf}
                className='mx-auto mb-5 w-11/12'
              ></Image>
              <div className='h4 mb-2 text-center text-green-700'>
                알람 설정
              </div>
              <div className='h5 mb-3 text-center text-gray-700 md:text-xl '>
                기다릴 필요없이 상품이 등록되면
                <br />
                핸드폰 알림으로 알려드릴게요
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FindCueSearch;
