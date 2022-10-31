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
import TimeFormat from '@/utils/TimeFormat';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';

import { CueImage, Part, Results } from '@/partials/findcue/cueType';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import PremeiumSVG from '~/svg/Premeium.svg';

type BaseDialogProps = {
  /** Maintained by useDialogStore */
  open: boolean;
  /** Maintained by useDialogStore */
  onSubmit: () => void;
  /** Maintained by useDialogStore */
  onClose: () => void;
  /** Customizable Dialog Options */
  options: DialogOptions;
};

export type DialogOptions = {
  catchOnCancel?: boolean;
  title: React.ReactNode;
  description: React.ReactNode;
  variant: 'success' | 'warning' | 'danger';
  submitText: React.ReactNode;
  cancleText: React.ReactNode;
  cue: Results | null;
};

/**
 * Base Dialog for useDialog hook implementation.
 *
 * **Should be called with the hook, not by the component itself**
 *
 *
 * @see useDialogStore
 * @example ```tsx
 * const dialog = useDialog();
 *
 * dialog(options);
 * ```
 */
export default function BaseDialog({
  open,
  onSubmit,
  onClose,
  options: { title, description, variant, submitText, cancleText, cue },
}: BaseDialogProps) {
  const current = colorVariant[variant];

  const getTypeToString = (type: any) => {
    if (type === 0) {
      return '하대';
    } else if (type === 1) {
      return '상대';
    } else {
      return '';
    }
  };

  const getSetTotalWeight = (parts: Array<Part>) => {
    const weights = parts.map((part) => {
      return parseInt(part.adminData.weight);
    });
    const result = weights.reduce(function add(sum, currValue) {
      return sum + currValue;
    });
    return result;
  };

  const sortImages = (images: Array<CueImage>) => {
    const sortedIamges = images.filter((id) => id);
    return sortedIamges;
  };

  const getAllCueImages = (images: Array<CueImage>, parts: Array<Part>) => {
    const allImages: { id: string; image: string }[] = [];
    sortImages(images).map((image) => {
      allImages.push(image);
    });
    parts.map((part) => {
      sortImages(part.adminData.images).map((image) => {
        allImages.push(image);
      });
    });
    console.log(allImages);
    return allImages;
  };

  const getPaintingStateToString = (paintingState: string) => {
    if (paintingState === '1') {
      return '재도장필요 (☆☆☆☆★)';
    } else if (paintingState === '2') {
      return '크랙/깨짐 (☆☆☆★★)';
    } else if (paintingState === '3') {
      return '찍힘 (☆☆★★★)';
    } else if (paintingState === '4') {
      return '사용감있음 (☆★★★★)';
    } else if (paintingState === '5') {
      return '신품급 (★★★★★)';
    }
  };

  const getBendStateToString = (bendState: string) => {
    if (bendState === '1') {
      return '3mm~ (☆☆☆☆★)';
    } else if (bendState === '2') {
      return '2~3mm (☆☆☆★★)';
    } else if (bendState === '3') {
      return '1~2mm (☆☆★★★)';
    } else if (bendState === '4') {
      return '~1mm (☆★★★★)';
    } else if (bendState === '5') {
      return '양호 (★★★★★)';
    }
  };

  const getTopTipStateToString = (topTipState: string) => {
    if (topTipState === '1') {
      return '3mm~ (☆☆☆☆★)';
    } else if (topTipState === '2') {
      return '2~3mm (☆☆☆★★)';
    } else if (topTipState === '3') {
      return '1~2mm (☆☆★★★)';
    } else if (topTipState === '4') {
      return '~1mm (☆★★★★)';
    } else if (topTipState === '5') {
      return '양호 (★★★★★)';
    }
  };

  const getDescriptions = (cue: Results) => {
    let msg = '';

    msg += '[구성]\n';
    if (cue.element_type === 'set') {
      msg += '하대와 상대가 함께 구성된 세트 상품입니다.\n';
    } else if (cue.element_type === 'lower') {
      msg += '하대만 판매되는 상품입니다. (상대는 없습니다)\n';
    } else if (cue.element_type === 'upper') {
      msg += '상대만 판매되는 상품입니다. (하대는 없습니다)\n';
    }

    [...cue.parts]
      .sort(function sort_by_type(curr, next) {
        return curr.type - next.type;
      })
      .map((part) => {
        if (part.type === 0) {
          msg += '\n[하대]\n';
          msg +=
            '제품명 : ' +
            part.adminData.brand +
            ' ' +
            part.adminData.goods_name;
          if (part.adminData.goods_name_D) {
            msg += ' (' + part.adminData.goods_name_D + ')\n';
          } else {
            msg += '\n';
          }
          msg +=
            part.adminData.serial_number === '-'
              ? '시리얼넘버 : 알수없음\n'
              : '시리얼넘버 : no.' + part.adminData.serial_number + '\n';
          msg +=
            '조인트타입 : ' +
            part.adminData.joint_type
              .toUpperCase()
              .replace(' ', '')
              .replace('조인트', '')
              .replace('WJ', '우드') +
            '\n';
          msg +=
            part.adminData.modelYear === '0000년 00월'
              ? '구매년월 : 알수없음\n'
              : '구매년월 : ' + part.adminData.modelYear + '\n';
          msg +=
            part.adminData.isHaveGuarantee === 'O'
              ? '보증서 : 있음'
              : '보증서 : 없음';
          if (part.adminData.isHaveGuarantee_D) {
            msg += ' (' + part.adminData.isHaveGuarantee_D + ')\n';
          } else {
            msg += '\n';
          }
          msg += '무게 : ' + part.adminData.weight + 'g\n';
          msg += '길이 : ' + part.adminData.length + 'cm\n';
          msg +=
            '외관도장상태 : ' +
            getPaintingStateToString(part.adminData.paintingState) +
            '\n';
          msg +=
            '휨상태 : ' + getBendStateToString(part.adminData.bendState) + '\n';
          msg += '제작방식 : ' + part.adminData.productionMethod + '\n';
        } else if (part.type === 1) {
          msg += '\n[상대]\n';
          msg +=
            '제품명 : ' +
            part.adminData.brand +
            ' ' +
            part.adminData.goods_name;
          if (part.adminData.goods_name_D) {
            msg += ' (' + part.adminData.goods_name_D + ')\n';
          } else {
            msg += '\n';
          }
          msg +=
            part.adminData.serial_number === '-'
              ? '시리얼넘버 : 알수없음\n'
              : '시리얼넘버 : no.' + part.adminData.serial_number + '\n';
          msg +=
            '조인트타입 : ' +
            part.adminData.joint_type
              .toUpperCase()
              .replace(' ', '')
              .replace('조인트', '')
              .replace('WJ', '우드') +
            '\n';
          msg +=
            part.adminData.modelYear === '0000년 00월'
              ? '구매년월 : 알수없음\n'
              : '구매년월 : ' + part.adminData.modelYear + '\n';
          msg +=
            part.adminData.isHaveGuarantee === 'O'
              ? '보증서 : 있음'
              : '보증서 : 없음';
          if (part.adminData.isHaveGuarantee_D) {
            msg += ' (' + part.adminData.isHaveGuarantee_D + ')\n';
          } else {
            msg += '\n';
          }
          msg += '무게 : ' + part.adminData.weight + 'g\n';
          msg += '길이 : ' + part.adminData.length + 'cm\n';
          msg += '상대구분 : ' + part.adminData.topSortation + '\n';
          msg += '상대타입 : ' + part.adminData.topSortationType + '\n';
          msg +=
            '휨상태 : ' + getBendStateToString(part.adminData.bendState) + '\n';
          msg += '팁종류 : ' + part.adminData.topTipKind + '\n';
          msg +=
            '팁상태 : ' +
            getTopTipStateToString(part.adminData.topTipState) +
            '\n';
          msg += '선골지름 : ' + part.adminData.ferruleDiameter + 'mm';
          if (part.adminData.ferruleDiameter_D) {
            msg += ' (' + part.adminData.ferruleDiameter_D + ')\n';
          } else {
            msg += '\n';
          }
          msg += '선골높이 : ' + part.adminData.ferruleHeigth + 'mm';
          if (part.adminData.ferruleHeigth_D) {
            msg += ' (' + part.adminData.ferruleHeigth_D + ')\n';
          } else {
            msg += '\n';
          }
        }
      });

    console.log(cue);
    return msg;
  };

  const copyAddress = () => {
    let address = '서울시 서초구 서초대로 277 기영빌딩';
    let t = document.createElement('textarea');
    document.body.appendChild(t);
    t.value = address;
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
    alert('주소가 클립보드에 복사되었습니다.');
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
                {/* 큐 영역 보여지는 구간 */}
                {cue && (
                  <div data-aos='fade-up'>
                    <div className='mb-5 text-center'>
                      <div className='h4 md:h3 font-medium leading-6 text-gray-900 antialiased md:leading-8'>
                        상품번호 : {cue.document_id}
                      </div>
                      <div className='mt-2'>
                        <p className='h5 md:h4 text-gray-600'>
                          {cue.state === 'end' ||
                          cue.state === 'delivery' ||
                          cue.state === 'purchased' ||
                          cue.state === 'report' ||
                          cue.state === 'timeout' ||
                          cue.state === 'returning' ? (
                            <span className='pl-2'>
                              해당 상품은 판매가 완료되었습니다.
                            </span>
                          ) : (
                            <span className='pl-2 text-green-700'>
                              구매 가능한 상품입니다.{' '}
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                    <div className='relative mx-auto'>
                      <div className='h6 md:h4 mx-auto max-w-3xl text-left md:pb-1'>
                        {cue.isPremium && (
                          <div className='my-4 flex h-full flex-row justify-center rounded-2xl bg-gray-100 px-5 py-2 md:my-8 md:py-5'>
                            <div className='pt-2 pr-3 text-[35px] md:mr-6 md:pt-0 md:text-[50px]'>
                              <PremeiumSVG />
                            </div>
                            <div className='h6 md:h4 whitespace-pre-wrap pt-1 text-left leading-6 text-gray-700 antialiased md:my-auto md:leading-8 '>
                              해당 상품은 프리미엄 등급으로 새상품에 가까운
                              컨디션을 유지하는 큐입니다
                            </div>
                          </div>
                        )}
                        {[...cue.parts]
                          .sort(function sort_by_type(curr, next) {
                            return curr.type - next.type;
                          })
                          .map((part: Part) => {
                            return (
                              <div
                                key={part.id}
                                className='h4 md:h3 mb-2 font-medium'
                              >
                                <div className='h6 md:h4 text-green-700 md:pb-1'>
                                  [{getTypeToString(part.type)}]
                                </div>
                                <div className='text-gray-800 '>
                                  {part.adminData.brand}{' '}
                                  {part.adminData.goods_name}{' '}
                                </div>
                                <div className='h6 md:h4 text-gray-500'>
                                  {part.adminData.joint_type
                                    .toUpperCase()
                                    .replace(' ', '')
                                    .replace('조인트', '')
                                    .replace('WJ', '우드')}{' '}
                                  조인트 · {part.adminData.weight}g
                                  {part.adminData.modelYear !==
                                    '0000년 00월' && (
                                    <>
                                      {' '}
                                      ·{' '}
                                      {part.adminData.modelYear.replace(
                                        '20',
                                        ''
                                      )}
                                    </>
                                  )}
                                  {part.adminData.serial_number !== '-' && (
                                    <> · no.{part.adminData.serial_number}</>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        <div className='my-3'>
                          <div className='flex justify-between'>
                            <div className='flex flex-row'>
                              <div className='h2 font-medium text-green-700 '>
                                {cue.price.toLocaleString()} 원
                              </div>
                            </div>

                            {/* 조회, 생성일 */}
                            <div className='h6 md:h5 fle-row-reverse flex-1 pt-2 text-right text-gray-600 md:pt-4'>
                              조회 {cue.view_cnt.toLocaleString()}회
                              {/* ·{' '}{TimeFormat(cue.created_at)} */}· 찜{' '}
                              {cue.like_cnt.toLocaleString()}회
                            </div>
                          </div>
                        </div>

                        {cue.images.length > 0 && (
                          <Carousel
                            dynamicHeight={true}
                            emulateTouch={true}
                            showArrows={true}
                            showThumbs={false}
                          >
                            {getAllCueImages(cue.images, cue.parts).map(
                              (photo: CueImage) => {
                                return (
                                  <div
                                    key={photo.id}
                                    className='rounded-3xl border-[1px] border-gray-100'
                                  >
                                    {photo && (
                                      <Image
                                        className='rounded-3xl'
                                        src={photo.image}
                                        alt={photo.id}
                                        layout='responsive'
                                        width={650}
                                        height={650}
                                        placeholder='blur'
                                        blurDataURL='data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=='
                                      />
                                    )}
                                  </div>
                                );
                              }
                            )}
                          </Carousel>
                        )}
                      </div>
                    </div>

                    <div className='relative mx-auto max-w-6xl leading-6 antialiased sm:px-6 md:leading-8'>
                      <div className='mx-auto max-w-3xl'>
                        <div className='h6 md:h4 text-gray-500'>
                          <div>
                            <div className='h4 md:h3 pt-12 pb-4 text-left text-gray-800'>
                              상품 상세정보
                            </div>
                            <div className='flex h-full w-full flex-col whitespace-pre-wrap rounded-2xl bg-gray-100 px-3 pt-5 pb-10 text-left leading-6 text-gray-700 antialiased md:px-8 md:pt-8 md:leading-8'>
                              {getDescriptions(cue)}
                            </div>
                            {/* {cue.element_type === 'set' && (
                              <div className='flex flex-row pt-4'>
                                <div className='flex-1'>
                                  <div>하대외관도장상태</div>
                                  <div className='pl-2'>
                                    <div>신품급 (★★★★★)</div>
                                    <div>사용감있음 (☆★★★★)</div>
                                    <div>찍힘 (☆☆★★★)</div>
                                    <div>크랙/깨짐 (☆☆☆★★)</div>
                                    <div>재도장필요 (☆☆☆☆★)</div>
                                  </div>
                                </div>
                                <div className='flex-1'>
                                  <div>하대 휨상태</div>
                                  <div className='pl-2'>
                                    <div>양호 (★★★★★)</div>
                                    <div>~1mm (☆★★★★)</div>
                                    <div>1~2mm (☆☆★★★)</div>
                                    <div>2~3mm (☆☆☆★★)</div>
                                    <div>3mm~ (☆☆☆☆★)</div>
                                  </div>
                                </div>
                              </div>
                            )} */}
                            <div className='h4 md:h3 pt-12 pb-4 text-left text-gray-800'>
                              큐찾사 검수자 메세지
                            </div>
                            <div className='flex h-full w-full flex-col whitespace-pre-wrap rounded-2xl bg-gray-100 px-3 pt-5 pb-10 text-left leading-6 text-gray-700 antialiased md:px-8 md:pt-8 md:leading-8'>
                              {cue.admin_check_text}
                            </div>

                            <div className='h4 md:h3 pt-12 pb-4 text-left text-gray-800'>
                              구매방법
                            </div>
                            <div className='flex flex-col text-center'>
                              <div className='flex h-full w-full flex-col whitespace-pre-wrap rounded-2xl bg-gray-100 px-3 pt-5 pb-10 text-left leading-6 text-gray-700 antialiased md:px-8 md:pt-8 md:leading-8'>
                                [온라인]
                                <br />
                                큐찾사 어플리케이션
                                <br />- 카드결제, 가상계좌입금, 카카오페이 가능
                                <span className='md:h5 text-[10px] text-green-700 md:pt-2'>
                                  * 무이자 할부 가능 (카드사별 상이)
                                </span>
                                <br />
                                [오프라인]
                                <br />
                                김치빌리아드 교대점 매장
                                <br />- 현금 또는 계좌이체만 가능
                                <span className='md:h5 text-[10px] text-green-700 md:pt-2'>
                                  * 전화 주문 불가
                                </span>
                              </div>
                            </div>

                            <div className='h4 md:h3 pt-12 pb-4 text-left text-gray-800'>
                              큐찾사 앱 다운로드
                            </div>
                            <div className='mx-auto flex flex-row justify-center text-white md:justify-start'>
                              <div className='m-2 md:m-3'>
                                <ArrowLink
                                  as={ButtonLink}
                                  variant='light'
                                  className='inline-flex h-12 w-36 items-center justify-center rounded-xl md:h-16 md:w-44'
                                  href='https://play.google.com/store/apps/details?id=com.cuechatsaapp&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
                                >
                                  Google Play
                                </ArrowLink>
                              </div>
                              <div className='m-2 md:m-3'>
                                <ArrowLink
                                  as={ButtonLink}
                                  variant='light'
                                  className='inline-flex h-12 w-36 items-center justify-center rounded-xl md:h-16 md:w-44'
                                  href='https://apps.apple.com/app/id1524591264'
                                >
                                  App Store
                                </ArrowLink>
                              </div>
                            </div>
                            <div className='flex flex-row pt-12 pb-4 '>
                              <div className='h4 md:h3 text-left text-gray-800 md:pt-1'>
                                김치빌리아드 교대점
                                <a
                                  className='h6 ml-2 mt-2 justify-center text-center text-gray-600 underline underline-offset-4'
                                  onClick={() => copyAddress()}
                                >
                                  주소 복사
                                </a>
                              </div>
                            </div>
                            <div className='mb-16 flex flex-col text-center'>
                              <div className='flex h-full w-full flex-col whitespace-pre-wrap rounded-2xl bg-gray-100 px-3 pt-5 pb-5 text-center leading-6 text-gray-700 antialiased md:px-8 md:pt-8 md:leading-8'>
                                서울시 서초구 서초대로 277 기영빌딩 지하1층
                                <br />( 교대역 10번 출구 50m 직진 )
                                <br />
                                <br />
                                영업시간 : 평일 10시 ~ 19시
                                <br />
                                고객센터 : 02-522-4999
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className='mt-5 sm:mt-4 sm:flex sm:flex-row-reverse'>
                {/* <Button
                  onClick={onSubmit}
                  className={clsx(
                    'w-full items-center justify-center !font-medium sm:ml-3 sm:w-auto sm:text-sm'
                  )}
                >
                  {submitText}
                </Button> */}
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
