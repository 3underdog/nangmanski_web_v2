import React, { Dispatch, SetStateAction } from 'react';

import ArrowDown from '~/svg/ArrowDown.svg';
import ArrowUp from '~/svg/ArrowUp.svg';
function Tabs({
  isPremeium,
  setIsPremeium,
  isSet,
  setIsSet,
  isButt,
  setIsButt,
  isShaft,
  setIsShaft,
  setIsRefreshing,
  isBuying,
  setIsBuying,
  document_id,
  setDocument_id,
}: {
  isPremeium: boolean;
  setIsPremeium: Dispatch<SetStateAction<boolean>>;
  isSet: boolean;
  setIsSet: Dispatch<SetStateAction<boolean>>;
  isButt: boolean;
  setIsButt: Dispatch<SetStateAction<boolean>>;
  isShaft: boolean;
  setIsShaft: Dispatch<SetStateAction<boolean>>;
  setIsRefreshing: Dispatch<SetStateAction<boolean>>;
  isBuying: boolean;
  setIsBuying: Dispatch<SetStateAction<boolean>>;
  document_id: string;
  setDocument_id: Dispatch<SetStateAction<string>>;
}) {
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const premeiumClicked = () => {
    setIsPremeium(!isPremeium);
    goTop();
    setIsRefreshing(true);
    setDocument_id('');
  };
  const buyingClicked = () => {
    setIsBuying(!isBuying);
    goTop();
    setIsRefreshing(true);
    setDocument_id('');
  };
  const setClicked = () => {
    setIsSet(!isSet);
    setIsButt(false);
    setIsShaft(false);
    goTop();
    setIsRefreshing(true);
    setDocument_id('');
  };
  const buttClicked = () => {
    setIsSet(false);
    setIsButt(!isButt);
    setIsShaft(false);
    goTop();
    setIsRefreshing(true);
    setDocument_id('');
  };
  const shaftClicked = () => {
    setIsSet(false);
    setIsButt(false);
    setIsShaft(!isShaft);
    goTop();
    setIsRefreshing(true);
    setDocument_id('');
  };

  const keywordOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDocument_id(e.target.value.toUpperCase());
  };

  const keywordSearchClicked = () => {
    goTop();
    setIsPremeium(false);
    setIsSet(false);
    setIsButt(false);
    setIsShaft(false);
    setIsBuying(false);
    setIsRefreshing(true);
  };
  const [toggle, setToggle] = React.useState<boolean>(false);
  return (
    <section className='relative'>
      <div className='h5 bg-[#f6f6f6] py-2 md:py-3'>
        <div className='layout flex flex-row flex-wrap justify-between md:justify-start   md:space-x-6'>
          {/* 프리미엄 */}
          <div className='flex flex-1 items-center md:flex-none'>
            <input
              type='checkbox'
              id='Premium-yes'
              name='Premium-confirmation'
              value='yes'
              className='absolute h-8 w-8 opacity-0'
              onChange={() => premeiumClicked()}
              checked={isPremeium}
            />
            <div className='mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border-2 border-gray-400 bg-white focus-within:border-green-600'>
              <svg
                className='pointer-events-none hidden h-3 w-3 fill-current text-green-600'
                version='1.1'
                viewBox='0 0 17 12'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g fill='none' fillRule='evenodd'>
                  <g
                    transform='translate(-9 -11)'
                    fill='rgb(21, 128, 61)'
                    fillRule='nonzero'
                  >
                    <path d='m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z' />
                  </g>
                </g>
              </svg>
            </div>
            <label htmlFor='Premium-yes' className='select-none'>
              <svg
                className='h-8 w-8 md:h-10 md:w-10'
                id='premium_icon'
                xmlns='http://www.w3.org/2000/svg'
                // width='40'
                // height='40'
                viewBox='0 0 148.063 148.067'
              >
                <g
                  id='그룹_326'
                  data-name='그룹 326'
                  transform='translate(0 0)'
                >
                  <path
                    id='패스_465'
                    data-name='패스 465'
                    d='M-141.244,398.657h0a8.351,8.351,0,0,1,12.889,2.3h0a8.353,8.353,0,0,0,10.384,3.834h0a8.4,8.4,0,0,1,11.333,6.627h0a8.44,8.44,0,0,0,8.468,7.2h0a8.484,8.484,0,0,1,8.408,10.156h0a8.538,8.538,0,0,0,5.526,9.7h0a8.559,8.559,0,0,1,4.478,12.457h0a8.592,8.592,0,0,0,1.917,11.029h0a8.583,8.583,0,0,1,0,13.257h0a8.592,8.592,0,0,0-1.917,11.029h0A8.56,8.56,0,0,1-84.236,498.7h0a8.538,8.538,0,0,0-5.526,9.7h0A8.484,8.484,0,0,1-98.17,518.56h0a8.433,8.433,0,0,0-8.468,7.195h0a8.4,8.4,0,0,1-11.333,6.631h0a8.355,8.355,0,0,0-10.384,3.83h0a8.348,8.348,0,0,1-12.889,2.3h0a8.328,8.328,0,0,0-11.053,0h0a8.344,8.344,0,0,1-12.885-2.3h0a8.356,8.356,0,0,0-10.384-3.83h0a8.4,8.4,0,0,1-11.333-6.631h0a8.436,8.436,0,0,0-8.468-7.195h0a8.485,8.485,0,0,1-8.411-10.156h0a8.534,8.534,0,0,0-5.526-9.7h0a8.556,8.556,0,0,1-4.474-12.457h0a8.6,8.6,0,0,0-1.921-11.029h0a8.589,8.589,0,0,1,0-13.257h0a8.6,8.6,0,0,0,1.921-11.029h0a8.555,8.555,0,0,1,4.474-12.457h0a8.534,8.534,0,0,0,5.526-9.7h0a8.485,8.485,0,0,1,8.411-10.156h0a8.443,8.443,0,0,0,8.468-7.2h0a8.4,8.4,0,0,1,11.333-6.627h0a8.354,8.354,0,0,0,10.384-3.834h0a8.346,8.346,0,0,1,12.885-2.3h0A8.319,8.319,0,0,0-141.244,398.657Z'
                    transform='translate(220.801 -394.554)'
                    fill='#fff'
                  />
                  <path
                    id='패스_466'
                    data-name='패스 466'
                    d='M-156.322,544.124a10.734,10.734,0,0,1-1.817-.16,10.363,10.363,0,0,1-7.291-5.278,6.41,6.41,0,0,0-7.947-2.929,10.229,10.229,0,0,1-8.928-.708,10.466,10.466,0,0,1-5.066-7.479,6.678,6.678,0,0,0-6.475-5.506A10.436,10.436,0,0,1-202,518.3a10.558,10.558,0,0,1-2.233-8.784,6.552,6.552,0,0,0-4.23-7.419,10.4,10.4,0,0,1-6.391-6.355,10.593,10.593,0,0,1,.864-9.032,6.591,6.591,0,0,0-1.469-8.431,10.537,10.537,0,0,1-3.862-8.184,10.541,10.541,0,0,1,3.862-8.191,6.607,6.607,0,0,0,1.469-8.443,10.579,10.579,0,0,1-.864-9.028,10.391,10.391,0,0,1,6.391-6.351,6.559,6.559,0,0,0,4.23-7.423A10.583,10.583,0,0,1-202,421.873a10.351,10.351,0,0,1,8.155-3.754,6.454,6.454,0,0,0,6.475-5.506,10.482,10.482,0,0,1,5.07-7.483,10.2,10.2,0,0,1,8.928-.708,6.4,6.4,0,0,0,7.943-2.925,10.34,10.34,0,0,1,7.287-5.274,10.224,10.224,0,0,1,8.628,2.429,6.386,6.386,0,0,0,8.456,0h0a10.233,10.233,0,0,1,8.628-2.429,10.33,10.33,0,0,1,7.283,5.27,6.4,6.4,0,0,0,7.947,2.929,10.239,10.239,0,0,1,8.928.708,10.466,10.466,0,0,1,5.066,7.483,6.666,6.666,0,0,0,6.479,5.506,10.58,10.58,0,0,1,8.151,3.758,10.564,10.564,0,0,1,2.237,8.788,6.553,6.553,0,0,0,4.23,7.419,10.392,10.392,0,0,1,6.391,6.351,10.605,10.605,0,0,1-.868,9.032,6.607,6.607,0,0,0,1.469,8.439,10.516,10.516,0,0,1,3.862,8.191,10.524,10.524,0,0,1-3.862,8.184,6.6,6.6,0,0,0-1.469,8.435,10.591,10.591,0,0,1,.868,9.032,10.4,10.4,0,0,1-6.391,6.351,6.551,6.551,0,0,0-4.23,7.419,10.571,10.571,0,0,1-2.233,8.784,10.448,10.448,0,0,1-8.155,3.762,6.565,6.565,0,0,0-6.479,5.506,10.449,10.449,0,0,1-5.062,7.479,10.236,10.236,0,0,1-8.932.708,6.422,6.422,0,0,0-7.943,2.925,10.366,10.366,0,0,1-7.291,5.282,10.307,10.307,0,0,1-8.624-2.437,6.387,6.387,0,0,0-8.456,0A10.264,10.264,0,0,1-156.322,544.124Zm-14.766-12.805a10.4,10.4,0,0,1,9.12,5.434,6.417,6.417,0,0,0,4.514,3.266,6.363,6.363,0,0,0,5.342-1.509,10.323,10.323,0,0,1,13.65,0,6.366,6.366,0,0,0,5.342,1.509,6.426,6.426,0,0,0,4.518-3.27,10.362,10.362,0,0,1,12.821-4.73,6.341,6.341,0,0,0,5.534-.432,6.488,6.488,0,0,0,3.137-4.634,10.525,10.525,0,0,1,10.456-8.892,6.65,6.65,0,0,0,5.054-2.329,6.554,6.554,0,0,0,1.381-5.438,10.581,10.581,0,0,1,6.827-11.981,6.45,6.45,0,0,0,3.958-3.933,6.557,6.557,0,0,0-.536-5.6A10.658,10.658,0,0,1-77.6,475.163a6.5,6.5,0,0,0,2.393-5.07,6.515,6.515,0,0,0-2.393-5.078A10.653,10.653,0,0,1-79.97,451.4a6.56,6.56,0,0,0,.536-5.6,6.447,6.447,0,0,0-3.958-3.938,10.576,10.576,0,0,1-6.827-11.973,6.553,6.553,0,0,0-1.385-5.446,6.576,6.576,0,0,0-5.05-2.325,10.575,10.575,0,0,1-10.456-8.888,6.506,6.506,0,0,0-3.137-4.642,6.3,6.3,0,0,0-5.53-.432,10.354,10.354,0,0,1-12.829-4.734,6.409,6.409,0,0,0-4.51-3.265,6.363,6.363,0,0,0-5.346,1.509,10.323,10.323,0,0,1-13.65,0,6.363,6.363,0,0,0-5.346-1.509,6.411,6.411,0,0,0-4.514,3.269,10.364,10.364,0,0,1-12.825,4.73,6.291,6.291,0,0,0-5.53.432,6.5,6.5,0,0,0-3.137,4.642,10.621,10.621,0,0,1-10.46,8.888,6.376,6.376,0,0,0-5.046,2.325,6.539,6.539,0,0,0-1.385,5.446,10.577,10.577,0,0,1-6.827,11.973,6.454,6.454,0,0,0-3.962,3.938,6.55,6.55,0,0,0,.54,5.594,10.66,10.66,0,0,1-2.373,13.622,6.526,6.526,0,0,0-2.393,5.074,6.5,6.5,0,0,0,2.393,5.066,10.661,10.661,0,0,1,2.373,13.622,6.55,6.55,0,0,0-.54,5.594,6.453,6.453,0,0,0,3.962,3.937,10.582,10.582,0,0,1,6.827,11.977,6.545,6.545,0,0,0,1.381,5.442,6.647,6.647,0,0,0,5.054,2.329,10.521,10.521,0,0,1,10.456,8.892,6.488,6.488,0,0,0,3.137,4.634,6.33,6.33,0,0,0,5.53.432A10.214,10.214,0,0,1-171.088,531.318Z'
                    transform='translate(219.32 -396.057)'
                    fill={`${isPremeium ? '#35af4d' : '#a8aaa8'}`}
                  />
                </g>
                <g
                  id='그룹_327'
                  data-name='그룹 327'
                  transform='translate(20.156 15.668)'
                >
                  <path
                    id='패스_467'
                    data-name='패스 467'
                    d='M-160.715,456.534a57.776,57.776,0,0,0,53.47-36.4H-214.181A57.77,57.77,0,0,0-160.715,456.534Z'
                    transform='translate(214.589 -339.461)'
                    fill={`${isPremeium ? '#35af4d' : '#a8aaa8'}`}
                  />
                  <path
                    id='패스_468'
                    data-name='패스 468'
                    d='M-160.409,399.972A57.779,57.779,0,0,0-214.283,437.5h107.749A57.775,57.775,0,0,0-160.409,399.972Z'
                    transform='translate(214.283 -399.972)'
                    fill={`${isPremeium ? '#35af4d' : '#a8aaa8'}`}
                  />
                </g>
                <g
                  id='그룹_328'
                  data-name='그룹 328'
                  transform='translate(29.66 25.992)'
                >
                  <path
                    id='패스_469'
                    data-name='패스 469'
                    d='M-167.79,449.14a47.58,47.58,0,0,0,44.038-29.985h-88.073A47.578,47.578,0,0,0-167.79,449.14Z'
                    transform='translate(212.16 -352.715)'
                    fill='none'
                    stroke='#fff'
                    strokeMiterlimit='10'
                    strokeWidth='1'
                  />
                  <path
                    id='패스_470'
                    data-name='패스 470'
                    d='M-167.537,402.552a47.585,47.585,0,0,0-44.371,30.909h88.745A47.586,47.586,0,0,0-167.537,402.552Z'
                    transform='translate(211.908 -402.552)'
                    fill='none'
                    stroke='#fff'
                    strokeMiterlimit='10'
                    strokeWidth='1'
                  />
                </g>
                <g
                  id='그룹_329'
                  data-name='그룹 329'
                  transform='translate(18.008 60.387)'
                >
                  <path
                    id='패스_471'
                    data-name='패스 471'
                    d='M-189.581,437.93H-214.82v-3.982h25.239Zm-5.638-13.842h4.718v3.982h-23.4v-3.982h3.95v-8.82h-3.49v-3.954h22.449v3.954h-3.521v4.286A12.1,12.1,0,0,1-195.22,424.088Zm-3.918-8.82h-6.155v8.82h5.542a12.2,12.2,0,0,0,.612-4.166Z'
                    transform='translate(214.82 -410.643)'
                    fill={`${isPremeium ? '#35af4d' : '#a8aaa8'}`}
                  />
                  <path
                    id='패스_472'
                    data-name='패스 472'
                    d='M-194.534,437.62h-12.713V422.554h9.22V415.6h-9.22v-3.922h13.814v14.794h-9.188v7.259h8.82c2.3,0,3.862-.336,4.778-1.164V411.193h4.658v28.268h-4.658v-3.185C-189.972,437.224-191.869,437.62-194.534,437.62Z'
                    transform='translate(237.552 -411.009)'
                    fill={`${isPremeium ? '#35af4d' : '#a8aaa8'}`}
                  />
                  <path
                    id='패스_473'
                    data-name='패스 473'
                    d='M-185.746,411.681V437.62H-199.9V411.681Zm-9.552,22.053h4.93V415.6h-4.93Zm13.626-22.541h4.658v28.268h-4.658Z'
                    transform='translate(259.617 -411.009)'
                    fill={`${isPremeium ? '#35af4d' : '#a8aaa8'}`}
                  />
                  <path
                    id='패스_474'
                    data-name='패스 474'
                    d='M-192.682,418.834a7.458,7.458,0,0,1,2.605-6.158,7.954,7.954,0,0,1,4.99-1.529,7.986,7.986,0,0,1,5.022,1.529,6.7,6.7,0,0,1,2.421,4.23h3.766v-5.574h4.654v15.987h-4.654v-6.491h-3.8a6.819,6.819,0,0,1-2.389,4.166,8.173,8.173,0,0,1-5.022,1.5,8.141,8.141,0,0,1-4.99-1.5A7.5,7.5,0,0,1-192.682,418.834Zm23.458,21.073h-21.469V428.422h21.469Zm-18.956-21.073a4.071,4.071,0,0,0,1.072,3.061,2.97,2.97,0,0,0,2.021.736,2.855,2.855,0,0,0,2.021-.736,3.96,3.96,0,0,0,1.1-3.061,4.036,4.036,0,0,0-1.1-3.093,2.7,2.7,0,0,0-2.021-.7,2.8,2.8,0,0,0-2.021.7A4.151,4.151,0,0,0-188.18,418.834Zm14.334,17.275v-3.77h-12.189v3.77Z'
                    transform='translate(281.271 -411.147)'
                    fill={`${isPremeium ? '#35af4d' : '#a8aaa8'}`}
                  />
                </g>
              </svg>
            </label>
          </div>
          {/* 세트만 */}
          <div className='flex flex-1 items-center md:flex-none'>
            <input
              type='checkbox'
              id='Set-yes'
              name='Set-confirmation'
              value='yes'
              className='absolute h-8 w-8 opacity-0'
              onChange={() => setClicked()}
              checked={isSet}
            />
            <div className='mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border-2 border-gray-400 bg-white focus-within:border-green-600'>
              <svg
                className='pointer-events-none hidden h-3 w-3 fill-current text-green-600'
                version='1.1'
                viewBox='0 0 17 12'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g fill='none' fillRule='evenodd'>
                  <g
                    transform='translate(-9 -11)'
                    fill='rgb(21, 128, 61)'
                    fillRule='nonzero'
                  >
                    <path d='m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z' />
                  </g>
                </g>
              </svg>
            </div>
            <label
              htmlFor='Set-yes'
              className={`h6 md:h4 select-none pt-[2px] ${
                isSet ? 'text-green-700 ' : 'text-[#a8aaa8]'
              } `}
            >
              세트만
            </label>
          </div>
          {/* 하대만 */}
          <div className='flex flex-1 items-center md:flex-none'>
            <input
              type='checkbox'
              id='Butt-yes'
              name='Butt-confirmation'
              value='yes'
              className='absolute h-8 w-8 opacity-0'
              onChange={() => buttClicked()}
              checked={isButt}
            />
            <div className='mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border-2 border-gray-400 bg-white focus-within:border-green-600'>
              {isButt && (
                <svg
                  className='pointer-events-none hidden h-3 w-3 fill-current text-green-600'
                  version='1.1'
                  viewBox='0 0 17 12'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g fill='none' fillRule='evenodd'>
                    <g
                      transform='translate(-9 -11)'
                      fill='rgb(21, 128, 61)'
                      fillRule='nonzero'
                    >
                      <path d='m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z' />
                    </g>
                  </g>
                </svg>
              )}
            </div>
            <label
              htmlFor='Butt-yes'
              className={`h6 md:h4 select-none pt-[2px] ${
                isButt ? 'text-green-700 ' : 'text-[#a8aaa8]'
              } `}
            >
              하대만
            </label>
          </div>
          {/* 상대만 */}
          <div className='flex flex-1 items-center md:flex-none'>
            <input
              type='checkbox'
              id='Shaft-yes'
              name='Shaft-confirmation'
              value='yes'
              className='absolute h-8 w-8 opacity-0'
              onChange={() => shaftClicked()}
              checked={isShaft}
            />
            <div className='isfocus-within:border-green-600 mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border-2 border-gray-400 bg-white'>
              {isShaft && (
                <svg
                  className='pointer-events-none hidden h-3 w-3 fill-current text-green-600'
                  version='1.1'
                  viewBox='0 0 17 12'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g fill='none' fillRule='evenodd'>
                    <g
                      transform='translate(-9 -11)'
                      fill='rgb(21, 128, 61)'
                      fillRule='nonzero'
                    >
                      <path d='m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z' />
                    </g>
                  </g>
                </svg>
              )}
            </div>
            <label
              htmlFor='Shaft-yes'
              className={`h6 md:h4 select-none pt-[2px] ${
                isShaft ? 'text-green-700 ' : 'text-[#a8aaa8]'
              } `}
            >
              상대만
            </label>
          </div>
          {/* MOBILE 토글 */}
          <div
            className='flex-2 flex items-center md:hidden'
            onClick={() => setToggle(!toggle)}
          >
            <div className='h1 text-gray-700'>
              {!toggle ? <ArrowDown /> : <ArrowUp />}
            </div>
          </div>
          {/* PC 판매중상품, 상품번호검색 */}
          <div className='hidden md:flex md:flex-1 md:flex-row-reverse'>
            <div className='h6 md:h4 flex select-none flex-row items-center pt-[2px] text-[#a8aaa8]'>
              <input
                className='h6 placeholder:h6 ml-5  mb-[2px] w-48 rounded-md border-[1px] px-2 pt-[1px] text-gray-800 placeholder:leading-6  placeholder:text-[#a8aaa8] focus:outline-green-700'
                value={document_id}
                placeholder='상품번호검색 ex.00876'
                onChange={(e) => keywordOnChange(e)}
                onClick={() => {
                  if (document_id.length > 0) {
                    setDocument_id('');
                    setIsPremeium(false);
                    setIsSet(false);
                    setIsButt(false);
                    setIsShaft(false);
                    setIsBuying(false);
                    setIsRefreshing(true);
                  }
                }}
              />
              <button
                onClick={() => keywordSearchClicked()}
                className='h6 mb-[2px] ml-4 w-16 rounded-md bg-green-700 pt-[2px] text-white'
              >
                검색
              </button>
            </div>
            <div className='flex flex-row items-center'>
              <input
                type='checkbox'
                id='Buying-yes'
                name='Buying-confirmation'
                value='yes'
                className='absolute h-8 w-8 opacity-0'
                onChange={() => buyingClicked()}
                checked={isBuying}
              />
              <div className='mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border-2 border-gray-400 bg-white focus-within:border-green-600'>
                {isBuying && (
                  <svg
                    className='pointer-events-none hidden h-3 w-3 fill-current text-green-600'
                    version='1.1'
                    viewBox='0 0 17 12'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g fill='none' fillRule='evenodd'>
                      <g
                        transform='translate(-9 -11)'
                        fill='rgb(21, 128, 61)'
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
                className={`h6 md:h4 select-none pt-[2px] ${
                  isBuying ? 'text-green-700 ' : 'text-[#a8aaa8]'
                } `}
              >
                판매중 상품만 보기
              </label>
            </div>
          </div>
        </div>
        {/* MOBILE TOGGLE ON 판매중상품, 상품번호검색 */}
        {toggle && (
          <div
            className='layout space-between flex flex-row pt-4 pb-1 md:hidden'
            data-aos='fade-in'
          >
            <div className='flex flex-1 items-center'>
              <input
                type='checkbox'
                id='Buying-yes'
                name='Buying-confirmation'
                value='yes'
                className='absolute h-8 w-8 opacity-0'
                onChange={() => buyingClicked()}
                checked={isBuying}
              />
              <div className='mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border-2 border-gray-400 bg-white focus-within:border-green-600'>
                {isBuying && (
                  <svg
                    className='pointer-events-none hidden h-3 w-3 fill-current text-green-600'
                    version='1.1'
                    viewBox='0 0 17 12'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g fill='none' fillRule='evenodd'>
                      <g
                        transform='translate(-9 -11)'
                        fill='rgb(21, 128, 61)'
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
                className={`h6 md:h4 select-none pt-[3px] ${
                  isBuying ? 'text-green-700 ' : 'text-[#a8aaa8]'
                } `}
              >
                판매중인 상품만
              </label>
            </div>
            <div className='h6 flex-2 mb-[1px] flex-row items-center pt-[2px] text-[#a8aaa8]'>
              <input
                className='h6 placeholder:h6 mx-2 mb-[2px] w-40 rounded-md border-[1px] px-2 pt-[1px] text-gray-800 placeholder:leading-6 placeholder:text-[#a8aaa8]  hover:bg-gray-50 focus:border-transparent focus:outline-green-500 focus:ring-0 md:w-80'
                value={document_id}
                placeholder='상품번호검색 ex.00876'
                onChange={(e) => keywordOnChange(e)}
                onClick={() => {
                  if (document_id.length > 0) {
                    setDocument_id('');
                    setIsPremeium(false);
                    setIsSet(false);
                    setIsButt(false);
                    setIsShaft(false);
                    setIsBuying(false);
                    setIsRefreshing(true);
                  }
                }}
              />
              <button
                onClick={() => keywordSearchClicked()}
                className='h6 mb-[2px] ml-2 w-12 rounded-md bg-green-700 px-3 pt-[2px] text-white md:hover:bg-green-600'
              >
                검색
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Tabs;
