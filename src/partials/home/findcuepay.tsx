import Image from 'next/image';
import React from 'react';

// import CustomerAvatar01 from '../images/customer-avatar-01.jpg';
// import CustomerAvatar02 from '../images/customer-avatar-02.jpg';
// import CustomerAvatar03 from '../images/customer-avatar-03.jpg';
import Customers01 from '~/images/Sample.png';
import Customers02 from '~/images/Sample.png';
import Customers03 from '~/images/Sample.png';

function FindCuePay() {
  return (
    <section className='bg-[#f8f8f8] py-28 tracking-wider'>
      <div className='relative mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='py-12 md:py-20'>
          <div className='mx-auto max-w-3xl pb-12 text-center md:pb-20 lg:mx-0 lg:text-left'>
            <div className='h3 pb-3 font-semibold text-green-700'>
              결제 & 안전
            </div>
            <div className='h1 pt-2 pb-3 leading-relaxed'>
              <div className=''>부담될 땐 카드할부</div>
              <div className=''>편리하게 간편결제</div>
              <div className=''>모든지 안전하게</div>
            </div>
          </div>
        </div>
        <div className='py-4'>
          <div className='mx-auto max-w-xl space-y-20 md:max-w-none'>
            {/* 1st */}
            <div className='flex flex-col-reverse space-y-4 space-y-reverse md:flex-row-reverse md:items-center md:space-x-8 md:space-y-0 md:space-x-reverse lg:space-x-16 lg:space-x-reverse xl:space-x-20 xl:space-x-reverse'>
              {/* Content */}
              <div className='md:w-1/2 md:min-w-[30rem]' data-aos='fade-left'>
                <h2 className='h3 font-playfair-display mb-4 md:text-4xl'>
                  <div className='text-gray-800 hover:underline hover:decoration-blue-100'>
                    다양한 결제방식
                  </div>
                </h2>
                <p className='h5 md:h4 mb-8 border-l-2 border-gray-800 pl-4 text-gray-700'>
                  카드결제, 가상계좌, 삼성페이
                  <br />
                  카카오페이, 네이버페이 (예정) 지원
                </p>
                <div className='space-y-3'>
                  <blockquote className='font-playfair-display italic text-gray-500'>
                    *카드사별 무이자 할부가능
                  </blockquote>
                </div>
              </div>

              {/* Image */}
              <div
                className='flex items-center justify-center '
                data-aos='fade-right'
              >
                <div className='relative md:w-4/5'>
                  <Image
                    className='mx-auto md:max-w-none'
                    src={Customers01}
                    width='540'
                    height='405'
                    alt='Customer 01'
                  />
                </div>
              </div>
            </div>

            {/* 2nd */}
            <div className='flex flex-col-reverse space-y-4 space-y-reverse md:flex-row md:items-center md:space-x-8 md:space-y-0 lg:space-x-16 xl:space-x-20'>
              {/* Content */}
              <div className='md:w-1/2 md:min-w-[30rem]' data-aos='fade-left'>
                <h2 className='h3 font-playfair-display mb-4 md:text-4xl'>
                  <div className='text-gray-800 hover:underline hover:decoration-blue-100'>
                    안전한 결제 시스템
                  </div>
                </h2>
                <p className='h5 md:h4 mb-8 border-l-2 border-gray-800 pl-4 text-gray-700'>
                  여러 카드사와 은행의 심사 통과후
                  <br /> PG결제 시스템을 도입하였습니다. <br />
                  결제는 합법적이고 안전하게 이루어집니다.
                </p>
              </div>

              {/* Image */}
              <div
                className='flex items-center justify-center'
                data-aos='fade-right'
              >
                <div className='relative md:w-4/5'>
                  <Image
                    className='mx-auto md:max-w-none'
                    src={Customers02}
                    width='540'
                    height='405'
                    alt='Customer 02'
                  />
                </div>
              </div>
            </div>

            {/* 3rd */}
            <div className='flex flex-col-reverse space-y-4 space-y-reverse md:flex-row-reverse md:items-center md:space-x-8 md:space-y-0 md:space-x-reverse lg:space-x-16 lg:space-x-reverse xl:space-x-20 xl:space-x-reverse'>
              {/* Content */}
              <div className='md:w-1/2 md:min-w-[30rem]' data-aos='fade-left'>
                <h2 className='h3 font-playfair-display mb-4 md:text-4xl'>
                  <div className='text-gray-800 hover:underline hover:decoration-blue-100'>
                    모든 상품은 실매물
                  </div>
                </h2>
                <p className='h5 md:h4 mb-8 border-l-2 border-gray-800 pl-4 text-gray-700'>
                  등록된 모든 큐는 오프라인 매장에 진열되어
                  <br />
                  방문 시 직접 확인해 보실 수 있습니다.
                </p>
                <div className='space-y-3'>
                  <blockquote className='font-playfair-display italic text-gray-500'>
                    *현장 결제 후 바로 수령도 가능합니다.
                  </blockquote>
                </div>
              </div>

              {/* Image */}
              <div
                className='flex items-center justify-center'
                data-aos='fade-right'
              >
                <div className='relative md:w-4/5'>
                  <Image
                    className='mx-auto md:max-w-none'
                    src={Customers03}
                    width='540'
                    height='405'
                    alt='Customer 03'
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

export default FindCuePay;
