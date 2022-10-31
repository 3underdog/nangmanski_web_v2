import React from 'react';

function Process() {
  return (
    <section>
      <div className='mx-auto max-w-6xl px-4 sm:px-6 md:max-w-screen-2xl'>
        <div className='border-t border-gray-200 py-12 md:py-16'>
          <div className='h4 md:h2 mb-5 text-center md:mb-20 md:mt-10'>
            <div className='h6 md:h4 mb-1 text-gray-600 md:mb-2'>
              귀찮은 일들은 전부 큐찾사에 맡겨주세요
            </div>
            큐찾사로 쉽고, 간편하게 판매해보세요
          </div>

          {/* Items */}
          <div className='relative mx-auto grid max-w-sm items-start gap-6 md:max-w-2xl md:grid-cols-2 lg:max-w-none lg:grid-cols-5'>
            <div
              className='absolute top-1/2 hidden h-1 w-full bg-gradient-to-r from-blue-300 to-blue-800 lg:block'
              aria-hidden='true'
            ></div>

            {/* 1st item */}
            <div className='relative flex flex-col items-center rounded bg-white p-6 shadow-xl'>
              <div className='mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-400 pt-1 text-white'>
                1
              </div>
              <h4 className='h5 md:h4 mb-2 leading-snug tracking-tight'>
                등록
              </h4>
              <p className='h6 md:h5 text-center text-gray-600'>
                판매할 상품을 큐찾사로 보내주세요.
                <br />
                직접 방문해주셔도 됩니다.
              </p>
            </div>

            {/* 2nd item */}
            <div className='relative flex flex-col items-center rounded bg-white p-6 shadow-xl'>
              <div className='mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 pt-1 text-white'>
                2
              </div>
              <h4 className='h5 md:h4 mb-2 leading-snug tracking-tight'>
                검수
              </h4>
              <p className='h6 md:h5 text-center text-gray-600'>
                전문가가 배정되어 검수 후<br />
                판매가격 상담 전화를 드립니다.
              </p>
            </div>

            {/* 3rd item */}
            <div className='relative flex flex-col items-center rounded bg-white p-6 shadow-xl'>
              <div className='mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 pt-1 text-white'>
                3
              </div>
              <h4 className='h5 md:h4 mb-2 leading-snug tracking-tight'>
                업로드
              </h4>
              <p className='h6 md:h5 text-center text-gray-600'>
                큐찾사 스튜디오에서 사진 촬영 후<br />
                큐찾사에 판매 등록됩니다.
              </p>
            </div>

            {/* 4th item */}
            <div className='relative flex flex-col items-center rounded bg-white p-6 shadow-xl'>
              <div className='mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 pt-1 text-white'>
                4
              </div>
              <h4 className='h5 md:h4 mb-2 leading-snug tracking-tight'>
                판매
              </h4>
              <p className='h6 md:h5 text-center text-gray-600'>
                큐찾사 앱과 김치빌리아드 매장에서
                <br />
                판매가 시작됩니다.
              </p>
            </div>

            {/* 5st item */}
            <div className='relative flex flex-col items-center rounded bg-white p-6 shadow-xl'>
              <div className='mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-800 pt-1 text-white'>
                5
              </div>
              <h4 className='h5 md:h4 mb-2 leading-snug tracking-tight'>
                정산
              </h4>
              <p className='h6 md:h5 text-center text-gray-600'>
                등록하신 계좌로 수수료 제외 후<br />
                안전하게 입금됩니다.
              </p>
            </div>
          </div>
          <div className='h5 md:h4 mt-5 text-center md:mt-20'>
            큐찾사 이용수수료는{' '}
            <span className='text-blue-700'>판매 완료 시 판매금의 8%</span>{' '}
            입니다.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
