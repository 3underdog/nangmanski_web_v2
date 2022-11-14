/* eslint-disable */
import { Dialog, Transition } from '@headlessui/react';
import clsx from 'clsx';

import Image from 'next/image';
import * as React from 'react';
import {
  HiExclamationCircle,
  HiOutlineCheck,
  HiOutlineExclamation,
  HiOutlineX,
} from 'react-icons/hi';

import Button from '@/components/buttons/Button';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import { resort } from '@/partials/home/homeType';

import ReactTable_V8 from '@/components/table/TableV8';
import { Carousel } from 'react-responsive-carousel';

type BaseDialogProps = {
  open: boolean;
  onSubmit: () => void;
  onClose: () => void;
  options: DialogOptions;
};

export type DialogOptions = {
  catchOnCancel?: boolean;
  title: React.ReactNode;
  description: React.ReactNode;
  variant: 'success' | 'warning' | 'danger';
  submitText: React.ReactNode;
  cancleText: React.ReactNode;
  resort: resort | null;
};

export default function BaseDialog({
  open,
  onSubmit,
  onClose,
  options: { title, description, variant, submitText, cancleText, resort },
}: BaseDialogProps) {
  const current = colorVariant[variant];

  // const sortImages = (images: any) => {
  //   const sortedIamges = images.filter((id) => id);
  //   return sortedIamges;
  // };

  const copyAddress = (address: string) => {
    let t = document.createElement('textarea');
    document.body.appendChild(t);
    t.value = address;
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
    alert('주소가 클립보드에 복사되었습니다.');
  };

  // react-table 형식으로 변경해줍니다.
  const getTableHeader = (slopeSummary: Array<Array<string>>) => {
    let tableHeader = [] as any;
    slopeSummary[0].map((header, idx) => {
      let obj = {} as any;
      obj['id'] = 'x' + idx.toString();
      obj['headerName'] = header;
      tableHeader.push(obj);
    });
    tableHeader[0]['id'] = 'operateTime';
    tableHeader.splice(1, 0, { id: 'spacer', headerName: '' });
    return tableHeader;
  };

  // react-table 형식으로 변경해줍니다.
  const getTableData = (slopeSummary: Array<Array<string>>) => {
    let tableData = [] as any;
    slopeSummary.slice(0).map((rows) => {
      let obj = {} as any;
      rows.map((row, idx) => {
        if (idx == 0) {
          obj['operateTime'] = row;
        } else {
          obj['x' + idx.toString()] = row;
        }
      });
      obj['spacer'] = ' ';
      tableData.push(obj);
    });
    tableData.shift();
    return tableData;
  };

  const getSlopeLevelInfo = (slopeList: any) => {
    const getStatus = (status: string) => {
      if (status === 'C') {
        return <span className='text-gray-600'>(미오픈)</span>;
      } else if (status === 'O') {
        return <span className='text-blue-500'>(오픈)</span>;
      } else {
        return <span className='text-gray-500'></span>;
      }
    };
    console.log(slopeList);
    return (
      <div className='pl-3 text-left text-xs'>
        {[...slopeList]
          .sort(function sort_by_slopeCode(curr, next) {
            console.log(curr);
            return curr['slopeCode'] - next['slopeCode'];
          })
          .map((slopeListItem: any) => {
            return (
              <div className='pt-1'>
                {slopeListItem['level']} : {slopeListItem['slopeName']}{' '}
                {getStatus(slopeListItem['status'])}
              </div>
            );
          })}
      </div>
    );
  };

  return (
    <Transition.Root show={open} as={React.Fragment}>
      <Dialog
        as='div'
        static
        className='fixed inset-0 z-40 overflow-y-auto'
        open={open}
        onClose={() => onClose()}
      >
        <div className='flex min-h-screen items-start justify-center px-5 py-5 text-center drop-shadow-xl sm:block sm:p-0 md:mt-16'>
          <Transition.Child
            as={React.Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-75 transition-opacity' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className='hidden sm:inline-block sm:h-screen sm:align-middle'
            aria-hidden='true'
          >
            &#8203;
          </span>
          <Transition.Child
            as={React.Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 trangray-y-4 sm:trangray-y-0 sm:scale-95'
            enterTo='opacity-100 trangray-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 trangray-y-0 sm:scale-100'
            leaveTo='opacity-0 trangray-y-4 sm:trangray-y-0 sm:scale-95'
          >
            <div className='z-auto inline-block w-full transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-12 sm:min-h-[1000px] sm:max-w-6xl sm:p-6 sm:align-middle'>
              <div className='absolute top-0 right-0  block pt-4 pr-4'>
                <button
                  type='button'
                  className={clsx(
                    'rounded-md bg-white text-gray-400 hover:text-gray-500',
                    'focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2',
                    'disabled:cursor-wait disabled:brightness-90 disabled:filter'
                  )}
                  onClick={onClose}
                >
                  <span className='sr-only'>Close</span>
                  <HiOutlineX className='h-6 w-6' aria-hidden='true' />
                </button>
              </div>
              <div>
                {resort && (
                  <div data-aos='fade-up'>
                    <div className='mb-5 text-center'>
                      {/* 헤더 */}
                      <div className='h4 md:h3 font-medium leading-6 text-gray-900 antialiased md:leading-8'>
                        {resort.resortName}
                      </div>

                      {/* 슬로프이미지 */}
                      <div className='text-md pl-1 pb-1 text-left'>
                        슬로프 맵
                      </div>
                      <div className='relative h-full w-full rounded-xl pt-5'>
                        {resort.slopesImageUrl !== null ? (
                          <Carousel
                            dynamicHeight={true}
                            emulateTouch={false}
                            showArrows={false}
                            showThumbs={false}
                            showIndicators={false}
                            showStatus={false}
                          >
                            // @ts-ignore
                            <div>
                              {resort.slopesImageUrl && (
                                <img
                                  src={resort.slopesImageUrl}
                                  className='max-h-[1260px] rounded-xl'
                                />
                              )}
                            </div>
                            {/* <div></div> */}
                          </Carousel>
                        ) : (
                          // <Image
                          //   alt={resort.resortName}
                          //   src={resort.slopesImageUrl}
                          //   layout='fill'
                          //   width='100%'
                          //   height='100%'
                          //   objectFit='contain'
                          //   placeholder='blur'
                          //   blurDataURL='data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=='
                          // />
                          <div className='mx-auto flex h-40 w-full max-w-4xl rounded-xl bg-gray-300 md:h-72'>
                            <div className='my-auto flex-1 text-xs text-gray-600'>
                              앗 등록된 슬로프 사진이 없어요
                            </div>
                          </div>
                        )}
                      </div>

                      <div className='text-right text-xxs text-gray-600'>
                        이미지 출처 : {resort.resortName} 홈페이지
                      </div>

                      {/* 실시간 슬로프 오픈 현황 */}
                      <div className='mt-6'>
                        <div className='text-md pl-1 pb-1 text-left'>
                          실시간 슬로프 현황
                        </div>
                        <ReactTable_V8
                          tableHeader={getTableHeader(resort.slopeSummary)}
                          tableData={getTableData(resort.slopeSummary)}
                        />
                        <div className='text-right text-xxs text-gray-600'>
                          좌우 스크롤
                        </div>
                      </div>

                      {/* 슬로프 정보 */}
                      <div className='mt-6'>
                        <div className='text-md pl-1 pb-1 text-left'>
                          슬로프 난이도
                        </div>
                        {getSlopeLevelInfo(resort.slopeList)}
                      </div>

                      {/* 할인 정보 */}
                      <div className='mt-6'>
                        <div className='text-md pl-1 pb-1 text-left'>
                          할인 / 우대
                        </div>
                        <div className='pl-4 pt-1 text-left text-xs text-gray-600'>
                          기능 준비중입니다.
                        </div>
                      </div>

                      {/* 스키장정보 */}
                      <div className='mt-6'>
                        <div className='text-md pl-1 pb-1 text-left'>
                          스키장 정보
                        </div>
                        <div className='space-y-1 pl-4 pt-1 text-left text-xs text-gray-800'>
                          <div>
                            주소 : {resort.address}{' '}
                            <span onClick={() => copyAddress(resort.address)}>
                              (복사)
                            </span>
                          </div>
                          <div>오픈 : {resort.startTime}</div>
                          <div>마감 : {resort.endTime}</div>
                          <div>고객센터 : {resort.phoneNo}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className='mt-5 sm:mt-4 sm:flex sm:flex-row-reverse'>
                <Button
                  type='button'
                  variant='outline'
                  onClick={onClose}
                  className='font mt-3 w-full items-center justify-center !font-medium sm:mt-0 sm:w-auto sm:text-sm'
                >
                  {cancleText}
                </Button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

const colorVariant = {
  success: {
    bg: {
      light: 'bg-green-100',
    },
    text: {
      primary: 'text-green-500',
    },
    icon: HiOutlineCheck,
  },
  warning: {
    bg: {
      light: 'bg-yellow-100',
    },
    text: {
      primary: 'text-yellow-500',
    },
    icon: HiOutlineExclamation,
  },
  danger: {
    bg: {
      light: 'bg-red-100',
    },
    text: {
      primary: 'text-red-500',
    },
    icon: HiExclamationCircle,
  },
};
