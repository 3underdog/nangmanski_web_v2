import clsx from 'clsx';
import React, { Dispatch, SetStateAction } from 'react';

import ArrowDown from '~/svg/ArrowDown.svg';
import ArrowUp from '~/svg/ArrowUp.svg';

function PostTabs({
  keyword,
  setKeyword,
  setIsRefreshing,
}: {
  keyword: string;
  setKeyword: Dispatch<SetStateAction<string>>;
  setIsRefreshing: Dispatch<SetStateAction<boolean>>;
}) {
  const goFirstPage = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const keywordOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value.toUpperCase());
  };
  const keywordSearchClicked = () => {
    goFirstPage();
    setIsRefreshing(true);
    setToggle(false);
  };

  const [countFilter, setCountFilter] = React.useState<number>(0);
  // 필터링
  const [toggle, setToggle] = React.useState<boolean>(false);

  // 첫번째 필터링
  const disableFirstRow = () => {
    setIsAll(false);
    setIsFav(false);
  };

  // 전체스키장
  const [isAll, setIsAll] = React.useState(true);
  const allClicked = () => {
    disableSecondRow();
    setIsAll(true);
    setIsVivaldi(true);
    setIsOakVally(true);
    setIsHighOne(true);
    setIsElisian(true);
    setIsYongPyung(true);
    setisOtwo(true);
    setisJisan(true);
    setisDuckYouSan(true);
    setIsFav(false);
    setCountFilter(8);
  };

  // 즐겨찾기
  const [isFav, setIsFav] = React.useState(false);
  const favClicked = () => {
    disableSecondRow();
    setIsAll(false);
    setIsFav(!isFav);
    setCountFilter(0);
  };

  // 필터
  const [isFilter, setIsFilter] = React.useState(false);

  // 두번째 필터링 관련
  const disableSecondRow = () => {
    setIsVivaldi(false);
    setIsOakVally(false);
    setIsHighOne(false);
    setIsElisian(false);
    setIsYongPyung(false);
    setisOtwo(false);
    setisJisan(false);
    setisDuckYouSan(false);
  };
  // 강원도
  // 비발디
  const [isVivaldi, setIsVivaldi] = React.useState(false);
  const vivaldiClicked = () => {
    disableFirstRow();
    setIsVivaldi(!isVivaldi);
    if (isVivaldi) {
      setCountFilter(countFilter - 1);
    } else {
      setCountFilter(countFilter + 1);
    }
  };
  // 오크밸리
  const [isOakVally, setIsOakVally] = React.useState(false);
  const oakVallyClicked = () => {
    disableFirstRow();
    setIsOakVally(!isOakVally);
    if (isOakVally) {
      setCountFilter(countFilter - 1);
    } else {
      setCountFilter(countFilter + 1);
    }
  };

  // 하이원
  const [isHighOne, setIsHighOne] = React.useState(false);
  const highOneClicked = () => {
    disableFirstRow();
    setIsHighOne(!isHighOne);
    if (isHighOne) {
      setCountFilter(countFilter - 1);
    } else {
      setCountFilter(countFilter + 1);
    }
  };

  // 엘리시안
  const [isElisian, setIsElisian] = React.useState(false);
  const elisianClicked = () => {
    disableFirstRow();
    setIsElisian(!isElisian);
    if (isElisian) {
      setCountFilter(countFilter - 1);
    } else {
      setCountFilter(countFilter + 1);
    }
  };

  // 용평
  const [isYongPyung, setIsYongPyung] = React.useState(false);
  const yongPyungClicked = () => {
    disableFirstRow();
    setIsYongPyung(!isYongPyung);
    if (isYongPyung) {
      setCountFilter(countFilter - 1);
    } else {
      setCountFilter(countFilter + 1);
    }
  };

  // 오투
  const [isOtwo, setisOtwo] = React.useState(false);
  const otwoClicked = () => {
    disableFirstRow();
    setisOtwo(!isOtwo);
    if (isOtwo) {
      setCountFilter(countFilter - 1);
    } else {
      setCountFilter(countFilter + 1);
    }
  };

  // 경기도
  // 지산
  const [isJisan, setisJisan] = React.useState(false);
  const jisanClicked = () => {
    disableFirstRow();
    setisJisan(!isJisan);
    if (isJisan) {
      setCountFilter(countFilter - 1);
    } else {
      setCountFilter(countFilter + 1);
    }
  };

  // 전라/경상
  // 덕유산
  const [isDuckYouSan, setisDuckYouSan] = React.useState(false);
  const duckYouSanClicked = () => {
    disableFirstRow();
    setisDuckYouSan(!isDuckYouSan);
    if (isDuckYouSan) {
      setCountFilter(countFilter - 1);
    } else {
      setCountFilter(countFilter + 1);
    }
  };

  const applyFilter = () => {
    if (toggle == false) {
      setToggle(!toggle);
    } else if (isAll) {
      setToggle(!toggle);
    } else {
      if (countFilter == 0) {
        alert('1개 이상 스키장을 선택해주세요');
      } else {
        setToggle(false);
      }
    }
    console.log(
      '현재 선택된 필터링들을 표시합니다 \n',
      'Vivaldi:',
      isVivaldi,
      '\n',
      'OakVally:',
      isOakVally,
      '\n',
      'HighOne:',
      isHighOne,
      '\n',
      'Elisian:',
      isElisian,
      '\n',
      'YongPyung:',
      isYongPyung,
      '\n',
      'Otwo:',
      isOtwo,
      '\n',
      'Jisan:',
      isJisan,
      '\n',
      'DuckYouSan:',
      isDuckYouSan,
      '\n'
    );
  };

  // 필터관련 useEffect
  React.useEffect(() => {
    if (countFilter > 0) {
      setIsFilter(true);
    }
    if (isAll || isFav) {
      setIsFilter(false);
    }
  }, [
    isAll,
    isFav,
    isVivaldi,
    isOakVally,
    isHighOne,
    isElisian,
    isYongPyung,
    isOtwo,
    isJisan,
    isDuckYouSan,
    countFilter,
  ]);

  return (
    <section className='relative'>
      <div className='h5 bg-[#f6f6f6] py-2 md:py-3'>
        <div className='layout'>
          {/* 첫번째줄 */}
          <div className=' flex flex-row flex-wrap space-x-5 pt-1'>
            {/* 전체 */}
            <div className='flex items-center'>
              <input
                type='checkbox'
                id='all-yes'
                name='all-confirmation'
                value='yes'
                className='absolute h-8 w-8 opacity-0'
                onChange={() => allClicked()}
                checked={isAll}
              />
              <div className='mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border-2 border-gray-400 bg-white focus-within:border-blue-600'>
                <svg
                  className='pointer-events-none hidden h-3 w-3 fill-current text-blue-600'
                  version='1.1'
                  viewBox='0 0 17 12'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g fill='none' fillRule='evenodd'>
                    <g
                      transform='translate(-9 -11)'
                      fill='rgb(92, 96, 141)'
                      fillRule='nonzero'
                    >
                      <path d='m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z' />
                    </g>
                  </g>
                </svg>
              </div>
              <label
                htmlFor='all-yes'
                className={`h6 md:h5 select-none pt-[2px] md:pt-[4px] ${
                  isAll ? 'text-blue-700 ' : 'text-[#a8aaa8]'
                } `}
              >
                스키장전체
              </label>
            </div>

            {/* 즐겨찾기 */}
            <div className='flex flex-1 items-center'>
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
                <svg
                  className='pointer-events-none hidden h-3 w-3 fill-current text-blue-600'
                  version='1.1'
                  viewBox='0 0 17 12'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g fill='none' fillRule='evenodd'>
                    <g
                      transform='translate(-9 -11)'
                      fill='rgb(92, 96, 141)'
                      fillRule='nonzero'
                    >
                      <path d='m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z' />
                    </g>
                  </g>
                </svg>
              </div>
              <label
                htmlFor='Fav-yes'
                className={`h6 md:h5 select-none pt-[2px] md:pt-[4px] ${
                  isFav ? 'text-blue-700 ' : 'text-[#a8aaa8]'
                } `}
              >
                즐겨찾기
              </label>
            </div>

            {/* 필터 */}
            <div className='flex items-center'>
              <input
                type='checkbox'
                id='Filter-yes'
                name='Filter-confirmation'
                value='yes'
                className='absolute h-8 w-8 opacity-0'
                onChange={() => setToggle(true)}
                checked={isFilter}
              />
              <div className='mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border-2 border-gray-400 bg-white focus-within:border-blue-600'>
                <svg
                  className='pointer-events-none hidden h-3 w-3 fill-current text-blue-600'
                  version='1.1'
                  viewBox='0 0 17 12'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g fill='none' fillRule='evenodd'>
                    <g
                      transform='translate(-9 -11)'
                      fill='rgb(92, 96, 141)'
                      fillRule='nonzero'
                    >
                      <path d='m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z' />
                    </g>
                  </g>
                </svg>
              </div>
              <label
                htmlFor='Filter-yes'
                className={`h6 md:h5 select-none pt-[2px] md:pt-[4px] ${
                  isFilter ? 'text-blue-700 ' : 'text-[#a8aaa8]'
                } `}
              >
                필터
              </label>
            </div>

            {/* 토글 */}
            <div
              className='flex-2 flex items-center'
              onClick={() => {
                applyFilter();
              }}
            >
              <div className='h1 md:h2 text-gray-700'>
                {!toggle ? <ArrowDown /> : <ArrowUp />}
              </div>
            </div>
          </div>

          {/* 두번째 줄 */}
          {toggle && (
            <div data-aos='fade-in'>
              <div className='mt-2 h-[1px] w-full bg-gray-300' />
              <div className='bg-gradient-to-r from-gray-700 to-gray-800 bg-clip-text pt-5 pb-1 text-transparent'>
                강원도
              </div>
              <div className='flex flex-row flex-wrap space-x-5 pt-1'>
                {/* 비발디 */}
                <div className='flex items-center'>
                  <input
                    type='checkbox'
                    id='isVivaldi-yes'
                    name='isVivaldi-confirmation'
                    value='yes'
                    className='absolute h-8 w-8 opacity-0'
                    onChange={() => vivaldiClicked()}
                    checked={isVivaldi}
                  />
                  <div className='mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border-2 border-gray-400 bg-white focus-within:border-blue-600'>
                    <svg
                      className='pointer-events-none hidden h-3 w-3 fill-current text-blue-600'
                      version='1.1'
                      viewBox='0 0 17 12'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g fill='none' fillRule='evenodd'>
                        <g
                          transform='translate(-9 -11)'
                          fill='rgb(92, 96, 141)'
                          fillRule='nonzero'
                        >
                          <path d='m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z' />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <label
                    htmlFor='isVivaldi-yes'
                    className={`h6 md:h5 select-none pt-[2px] md:pt-[4px] ${
                      isVivaldi ? 'text-blue-700 ' : 'text-[#a8aaa8]'
                    } `}
                  >
                    비발디파크
                  </label>
                </div>

                {/* 오크밸리 */}
                <div className='flex items-center'>
                  <input
                    type='checkbox'
                    id='isOakVally-yes'
                    name='isOakVally-confirmation'
                    value='yes'
                    className='absolute h-8 w-8 opacity-0'
                    onChange={() => oakVallyClicked()}
                    checked={isOakVally}
                  />
                  <div className='mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border-2 border-gray-400 bg-white focus-within:border-blue-600'>
                    <svg
                      className='pointer-events-none hidden h-3 w-3 fill-current text-blue-600'
                      version='1.1'
                      viewBox='0 0 17 12'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g fill='none' fillRule='evenodd'>
                        <g
                          transform='translate(-9 -11)'
                          fill='rgb(92, 96, 141)'
                          fillRule='nonzero'
                        >
                          <path d='m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z' />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <label
                    htmlFor='isOakVally-yes'
                    className={`h6 md:h5 select-none pt-[2px] md:pt-[4px] ${
                      isOakVally ? 'text-blue-700 ' : 'text-[#a8aaa8]'
                    } `}
                  >
                    오크밸리
                  </label>
                </div>

                {/* 하이원 */}
                <div className='flex items-center'>
                  <input
                    type='checkbox'
                    id='isHighOne-yes'
                    name='isHighOne-confirmation'
                    value='yes'
                    className='absolute h-8 w-8 opacity-0'
                    onChange={() => highOneClicked()}
                    checked={isHighOne}
                  />
                  <div className='mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border-2 border-gray-400 bg-white focus-within:border-blue-600'>
                    <svg
                      className='pointer-events-none hidden h-3 w-3 fill-current text-blue-600'
                      version='1.1'
                      viewBox='0 0 17 12'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g fill='none' fillRule='evenodd'>
                        <g
                          transform='translate(-9 -11)'
                          fill='rgb(92, 96, 141)'
                          fillRule='nonzero'
                        >
                          <path d='m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z' />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <label
                    htmlFor='isHighOne-yes'
                    className={`h6 md:h5 select-none pt-[2px] md:pt-[4px] ${
                      isHighOne ? 'text-blue-700 ' : 'text-[#a8aaa8]'
                    } `}
                  >
                    하이원
                  </label>
                </div>

                {/* 엘리시안 */}
                <div className='flex items-center'>
                  <input
                    type='checkbox'
                    id='isElisian-yes'
                    name='isElisian-confirmation'
                    value='yes'
                    className='absolute h-8 w-8 opacity-0'
                    onChange={() => elisianClicked()}
                    checked={isElisian}
                  />
                  <div className='mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border-2 border-gray-400 bg-white focus-within:border-blue-600'>
                    <svg
                      className='pointer-events-none hidden h-3 w-3 fill-current text-blue-600'
                      version='1.1'
                      viewBox='0 0 17 12'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g fill='none' fillRule='evenodd'>
                        <g
                          transform='translate(-9 -11)'
                          fill='rgb(92, 96, 141)'
                          fillRule='nonzero'
                        >
                          <path d='m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z' />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <label
                    htmlFor='isElisian-yes'
                    className={`h6 md:h5 select-none pt-[2px] md:pt-[4px] ${
                      isElisian ? 'text-blue-700 ' : 'text-[#a8aaa8]'
                    } `}
                  >
                    엘리시안
                  </label>
                </div>
              </div>

              <div className='flex flex-row flex-wrap space-x-5 pt-2'>
                {/* 용평 */}
                <div className='flex items-center'>
                  <input
                    type='checkbox'
                    id='isYongPyung-yes'
                    name='isYongPyung-confirmation'
                    value='yes'
                    className='absolute h-8 w-8 opacity-0'
                    onChange={() => yongPyungClicked()}
                    checked={isYongPyung}
                  />
                  <div className='mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border-2 border-gray-400 bg-white focus-within:border-blue-600'>
                    <svg
                      className='pointer-events-none hidden h-3 w-3 fill-current text-blue-600'
                      version='1.1'
                      viewBox='0 0 17 12'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g fill='none' fillRule='evenodd'>
                        <g
                          transform='translate(-9 -11)'
                          fill='rgb(92, 96, 141)'
                          fillRule='nonzero'
                        >
                          <path d='m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z' />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <label
                    htmlFor='isYongPyung-yes'
                    className={`h6 md:h5 select-none pt-[2px] md:pt-[4px] ${
                      isYongPyung ? 'text-blue-700 ' : 'text-[#a8aaa8]'
                    } `}
                  >
                    용평스키장
                  </label>
                </div>

                {/* 오투 */}
                <div className='flex items-center'>
                  <input
                    type='checkbox'
                    id='isOtwo-yes'
                    name='isOtwo-confirmation'
                    value='yes'
                    className='absolute h-8 w-8 opacity-0'
                    onChange={() => otwoClicked()}
                    checked={isOtwo}
                  />
                  <div className='mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border-2 border-gray-400 bg-white focus-within:border-blue-600'>
                    <svg
                      className='pointer-events-none hidden h-3 w-3 fill-current text-blue-600'
                      version='1.1'
                      viewBox='0 0 17 12'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g fill='none' fillRule='evenodd'>
                        <g
                          transform='translate(-9 -11)'
                          fill='rgb(92, 96, 141)'
                          fillRule='nonzero'
                        >
                          <path d='m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z' />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <label
                    htmlFor='isOtwo-yes'
                    className={`h6 md:h5 select-none pt-[2px] md:pt-[4px] ${
                      isOtwo ? 'text-blue-700 ' : 'text-[#a8aaa8]'
                    } `}
                  >
                    오투스키장
                  </label>
                </div>
              </div>

              <div className='bg-gradient-to-r from-gray-700 to-gray-800 bg-clip-text pt-6 pb-1 text-transparent'>
                경기도
              </div>
              <div className='flex flex-row flex-wrap space-x-5 pt-1'>
                {/* 지산 */}
                <div className='flex items-center'>
                  <input
                    type='checkbox'
                    id='isJisan-yes'
                    name='isJisan-confirmation'
                    value='yes'
                    className='absolute h-8 w-8 opacity-0'
                    onChange={() => jisanClicked()}
                    checked={isJisan}
                  />
                  <div className='mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border-2 border-gray-400 bg-white focus-within:border-blue-600'>
                    <svg
                      className='pointer-events-none hidden h-3 w-3 fill-current text-blue-600'
                      version='1.1'
                      viewBox='0 0 17 12'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g fill='none' fillRule='evenodd'>
                        <g
                          transform='translate(-9 -11)'
                          fill='rgb(92, 96, 141)'
                          fillRule='nonzero'
                        >
                          <path d='m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z' />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <label
                    htmlFor='isJisan-yes'
                    className={`h6 md:h5 select-none pt-[2px] md:pt-[4px] ${
                      isJisan ? 'text-blue-700 ' : 'text-[#a8aaa8]'
                    } `}
                  >
                    지산스키장
                  </label>
                </div>
              </div>

              <div className='bg-gradient-to-r from-gray-700 to-gray-800 bg-clip-text pt-6 pb-1 text-transparent'>
                전라/경상
              </div>
              <div className='flex flex-row flex-wrap space-x-5 pt-1'>
                {/* 지산 */}
                <div className='flex items-center'>
                  <input
                    type='checkbox'
                    id='isDuckYouSan-yes'
                    name='isDuckYouSan-confirmation'
                    value='yes'
                    className='absolute h-8 w-8 opacity-0'
                    onChange={() => duckYouSanClicked()}
                    checked={isDuckYouSan}
                  />
                  <div className='mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border-2 border-gray-400 bg-white focus-within:border-blue-600'>
                    <svg
                      className='pointer-events-none hidden h-3 w-3 fill-current text-blue-600'
                      version='1.1'
                      viewBox='0 0 17 12'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g fill='none' fillRule='evenodd'>
                        <g
                          transform='translate(-9 -11)'
                          fill='rgb(92, 96, 141)'
                          fillRule='nonzero'
                        >
                          <path d='m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z' />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <label
                    htmlFor='isDuckYouSan-yes'
                    className={`h6 md:h5 select-none pt-[2px] md:pt-[4px] ${
                      isDuckYouSan ? 'text-blue-700 ' : 'text-[#a8aaa8]'
                    } `}
                  >
                    덕유산스키장
                  </label>
                </div>
              </div>

              <div className='mb-6 flex flex-row flex-wrap space-x-3 pt-1'>
                <div className='h-8 flex-1' />
                <button
                  onClick={() => applyFilter()}
                  className={clsx(
                    'h6  rounded-md  px-3 pt-[3px] text-white ',
                    countFilter == 0
                      ? 'bg-gray-400 hover:bg-gray-500'
                      : 'bg-blue-500 hover:bg-blue-600'
                  )}
                >
                  {countFilter}개 스키장만 보기
                </button>
              </div>

              {/* 게시글 검색 */}
              <div className='mt-6 h-[1px] w-full bg-gray-300' />
              <div className='bg-gradient-to-r from-gray-700 to-gray-800 bg-clip-text pt-6 pb-1 text-transparent'>
                게시글 검색
              </div>
              <div className='mb-6 flex flex-row flex-wrap space-x-3 pt-1'>
                <input
                  className='h6 placeholder:h6 mr-2 w-full flex-1 rounded-md border-[1px] px-2 pt-[6px] pb-[3px] text-gray-800 placeholder:leading-6 placeholder:text-[#a8aaa8] hover:bg-gray-50  focus:border-transparent focus:outline-blue-500 focus:ring-0 md:w-80 md:pt-[8px] md:pb-[4px]'
                  placeholder='검색어를 입력해주세요 (작성자, 내용, 제목)'
                  value={keyword}
                  onClick={() => {
                    if (keyword.length > 0) {
                      setKeyword('');
                      setIsRefreshing(true);
                    }
                  }}
                  onChange={(e) => keywordOnChange(e)}
                />
                <button
                  onClick={() => keywordSearchClicked()}
                  className='h6 flex-3 h-8 w-16 rounded-md bg-blue-500 px-3 pt-[3px] text-white hover:bg-blue-600'
                >
                  검색
                </button>
              </div>
              {/* 토글 */}
              <div
                className='mb-3 flex justify-center'
                onClick={() => {
                  applyFilter();
                }}
              >
                <div className='h1 md:h2 text-gray-700'>
                  <ArrowUp />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
export default PostTabs;
