import React, { Dispatch, SetStateAction } from 'react';

function ResortFilteringTabs({
  isDetail,
  setIsDetail,
  isFav,
  setIsFav,
}: {
  isDetail: boolean;
  setIsDetail: Dispatch<SetStateAction<boolean>>;
  isFav: boolean;
  setIsFav: Dispatch<SetStateAction<boolean>>;
}) {
  const detailClicked = () => {
    setIsDetail(!isDetail);
  };
  const favClicked = () => {
    setIsFav(!isFav);
  };
  return (
    <section className='relative'>
      <div className='h5 bg-[#f6f6f6] py-2 md:py-3'>
        <div className='layout pb-[2px] md:pb-0'>
          <div className='h6 md:h5 flex h-8 w-full select-none items-center space-x-4 pt-[2px] text-[#a8aaa8] md:space-x-10'>
            <div className='flex-1 pt-[3px]'>관리자님 환영합니다.</div>
            <div className='flex items-center'>
              <input
                type='checkbox'
                id='Fav-yes'
                name='Fav-confirmation'
                value='yes'
                className='absolute h-8 w-8 opacity-0'
                onChange={() => favClicked()}
                checked={isFav}
              />
              <div className='mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border-2 border-gray-400 bg-white focus-within:border-blue-600'>
                {isFav && (
                  <svg
                    className='pointer-events-none hidden h-3 w-3 fill-current text-blue-600'
                    version='1.1'
                    viewBox='0 0 17 12'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g fill='none' fillRule='evenodd'>
                      <g
                        transform='translate(-9 -11)'
                        fill='rgb(37, 99, 235)'
                        fillRule='nonzero'
                      >
                        <path d='m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z' />
                      </g>
                    </g>
                  </svg>
                )}
              </div>
              <label
                htmlFor='Fav-yes'
                className={`h6 md:h5 select-none pt-[3px] ${
                  isFav ? 'text-blue-700 ' : 'text-[#a8aaa8]'
                } `}
              >
                즐겨찾기
              </label>
            </div>

            <div className='flex items-center'>
              <input
                type='checkbox'
                id='Buying-yes'
                name='Buying-confirmation'
                value='yes'
                className='absolute h-8 w-8 opacity-0'
                onChange={() => detailClicked()}
                checked={isDetail}
              />
              <div className='mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border-2 border-gray-400 bg-white focus-within:border-blue-600'>
                {isDetail && (
                  <svg
                    className='pointer-events-none hidden h-3 w-3 fill-current text-blue-600'
                    version='1.1'
                    viewBox='0 0 17 12'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g fill='none' fillRule='evenodd'>
                      <g
                        transform='translate(-9 -11)'
                        fill='rgb(37, 99, 235)'
                        fillRule='nonzero'
                      >
                        <path d='m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z' />
                      </g>
                    </g>
                  </svg>
                )}
              </div>
              <label
                htmlFor='Buying-yes'
                className={`h6 md:h5 select-none pt-[3px] ${
                  isDetail ? 'text-blue-700 ' : 'text-[#a8aaa8]'
                } `}
              >
                리조트 자세히 보기
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ResortFilteringTabs;
