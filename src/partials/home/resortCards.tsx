import axios from 'axios';
import clsx from 'clsx';
import React from 'react';
import toast from 'react-hot-toast';

import useDialog from '@/hooks/useDialog';

import { fetch_data, resort } from './homeType';

const ResortCard = (resort: resort, key: number, isDetail: boolean) => {
  const [isFav, setIsFav] = React.useState<boolean>(false);
  const favClicked = (resort: resort) => {
    // TODO: 유저 구현 후 즐겨찾기 수정 api로 변경해주어야 합니다.
    if (isFav) {
      toast.promise(
        axios.get('').then((res) => {
          return res;
        }),
        {
          loading: (
            <span className='pb-[2px] pt-[4px] text-center text-sm text-gray-700'>
              적용중 ⛷️
            </span>
          ),
          success: (
            <span className='center pt-[4px] pb-[2px] text-center text-sm text-gray-700'>
              {resort.resortName} 즐겨찾기
              <span className='text-[#e10b39]'> 제거완료</span>
            </span>
          ),
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          error: (err: any) =>
            err?.response?.data?.msg ?? (
              <span className='pb-[2px] pt-[4px] text-center text-sm text-gray-700'>
                잠시후 다시 시도해주세요 🥲
              </span>
            ),
        },
        {
          position: 'bottom-center',
          style: {
            backgroundImage:
              'linear-gradient(rgba(255, 255, 255), rgba(255, 255, 255)), linear-gradient(to right, #da76a3, #e10b39)',
            backgroundOrigin: 'border-box',
            backgroundClip: 'content-box, border-box',
            padding: '3px',
            minWidth: '0.5rem',
            boxShadow: '3.0px 5.0px 5.0px hsl(0deg 0% 0% / 0.1)',
          },
          success: {
            icon: '',
          },
        }
      );
    } else {
      toast.promise(
        axios.get('').then((res) => {
          return res;
        }),
        {
          loading: (
            <span className='pb-[2px] pt-[4px] text-center text-sm text-gray-700'>
              적용중 ⛷️
            </span>
          ),
          success: (
            <span className='center pb-[2px] pt-[4px] text-center text-sm text-gray-700'>
              {resort.resortName} 즐겨찾기
              <span className=' text-[#1e40af]'> 추가완료</span>
            </span>
          ),
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          error: (err: any) =>
            err?.response?.data?.msg ?? (
              <span className='pb-[2px] pt-[4px] text-center text-sm text-gray-700'>
                잠시후 다시 시도해주세요 🥲
              </span>
            ),
        },
        {
          position: 'bottom-center',
          style: {
            backgroundImage:
              'linear-gradient(rgba(255, 255, 255), rgba(255, 255, 255)), linear-gradient(to right, #0ea5e9, #1e40af)',
            backgroundOrigin: 'border-box',
            backgroundClip: 'content-box, border-box',
            padding: '3px',
            minWidth: '0.5rem',
            boxShadow: '3.0px 5.0px 5.0px hsl(0deg 0% 0% / 0.1)',
          },
          success: {
            icon: '',
          },
        }
      );
    }
    setIsFav(!isFav);
  };

  const Heart = () => {
    return (
      <svg
        width='21'
        height='18'
        viewBox='0 0 18 15'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clipPath='url(#clip0_4_1970)'>
          <path
            d='M8.99414 15C8.83112 14.9994 8.67449 14.9387 8.55582 14.83L1.45539 8.36621C0.525838 7.43945 0.0037999 6.19726 -3.97052e-05 4.90277C-0.00387931 3.60828 0.510792 2.3632 1.43483 1.43124C1.88325 0.978746 2.42089 0.618817 3.01565 0.372971C3.61041 0.127125 4.24994 0.000427246 4.89622 0.000427246C5.5425 0.000427246 6.18218 0.127125 6.77694 0.372971C7.3717 0.618817 7.90934 0.978746 8.35776 1.43124L8.97107 2.04495L9.58689 1.43124C10.0267 0.988458 10.5521 0.634487 11.133 0.389603C11.7139 0.144718 12.3388 0.0137651 12.9718 0.00424194C13.6049 -0.00528117 14.2337 0.106766 14.8221 0.334061C15.4105 0.561356 15.947 0.899361 16.4007 1.3287C16.4851 1.36512 16.5617 1.41644 16.6269 1.48C17.5349 2.41086 18.0263 3.65374 17.9935 4.93626C17.9688 6.21966 17.4333 7.44376 16.4996 8.35126L9.4287 14.8288C9.31169 14.9378 9.15617 14.999 8.99414 15V15ZM4.897 1.30002C4.42234 1.3001 3.95254 1.39306 3.51565 1.57346C3.07875 1.75385 2.68368 2.01795 2.35401 2.34998C1.68011 3.0325 1.30379 3.942 1.30379 4.88812C1.30379 5.83425 1.68011 6.74374 2.35401 7.42627L8.99288 13.47L15.6101 7.4075C16.2903 6.74147 16.6798 5.84593 16.6977 4.9075C16.7212 4.01953 16.3999 3.15548 15.7978 2.48746C15.722 2.45359 15.653 2.40662 15.5946 2.34876C15.2652 2.01695 14.8704 1.75301 14.4339 1.57277C13.9973 1.39253 13.5279 1.29964 13.0536 1.29964C12.5793 1.29964 12.1098 1.39253 11.6732 1.57277C11.2366 1.75301 10.8419 2.01695 10.5125 2.34876L9.43654 3.42252C9.37677 3.48247 9.30514 3.53011 9.22609 3.56274C9.14704 3.59538 9.06213 3.61232 8.97625 3.61249C8.89037 3.61232 8.8053 3.59538 8.72625 3.56274C8.6472 3.53011 8.57573 3.48247 8.51595 3.42252L7.44251 2.34876C7.11247 2.01659 6.71698 1.7525 6.27961 1.57231C5.84225 1.39212 5.37201 1.29953 4.897 1.30002Z'
            fill='black'
          />
          <g clipPath='url(#clip1_4_1970)'>
            <path
              d='M8.72465 14.6456L8.72411 14.6451L1.62794 8.18521C0.746992 7.30487 0.253594 6.12747 0.249959 4.90203C0.246319 3.67476 0.734195 2.49295 1.61236 1.60726L1.6124 1.60722C2.03717 1.1786 2.54682 0.837278 3.11115 0.604011C3.6755 0.370736 4.28257 0.250427 4.89622 0.250427C5.50987 0.250427 6.1171 0.370739 6.68144 0.604011C7.24577 0.837278 7.75543 1.1786 8.18019 1.60722L8.18093 1.60796L8.79424 2.22167L8.97071 2.39826L9.14754 2.22203L9.76336 1.60833L9.76425 1.60743C10.1809 1.188 10.679 0.852326 11.2301 0.619969C11.7813 0.387607 12.3745 0.263256 12.9756 0.254214C13.5767 0.245171 14.1737 0.351578 14.732 0.567266C15.2904 0.782959 15.7991 1.10354 16.2289 1.51029L16.2611 1.54071L16.3017 1.55824C16.3572 1.58221 16.4075 1.61573 16.4503 1.65698C17.3104 2.54003 17.7746 3.7169 17.7436 4.92987L17.7435 4.93145C17.7201 6.14674 17.2136 7.30737 16.328 8.16943L9.25982 14.6444L9.25982 14.6444L9.2583 14.6458C9.18817 14.7112 9.09368 14.7491 8.99381 14.75C8.89254 14.7493 8.79651 14.7114 8.72465 14.6456Z'
              fill={isFav ? 'rgb(59 130 246)' : '#C8C8C8'}
              stroke={isFav ? 'rgb(59 130 246)' : '#C8C8C8'}
              strokeWidth='0.5'
            />
          </g>
        </g>
      </svg>
    );
  };

  const getStatusDesc = (
    status: string,
    openSlopeNameListStr: string | null,
    endTime: string | null,
    startTime: string | null
  ) => {
    if (status === 'O') {
      return (
        <div className='text-blue-600'>
          영업중{' '}
          {openSlopeNameListStr && (
            <>({openSlopeNameListStr?.replace(' ', '').replace(',', ', ')})</>
          )}
        </div>
      );
    } else if (status === 'P') {
      return '정설중';
    } else {
      return (
        <div>
          영업종료 ({startTime?.slice(0, 5)} - {endTime?.slice(0, 5)})
        </div>
      );
    }
  };

  const dialog = useDialog();
  const openModal = (resort: resort) => {
    dialog({
      title: '',
      description: <></>,
      catchOnCancel: true,
      submitText: '네',
      cancleText: '닫기',
      variant: 'warning',
      resort: resort,
    })
      .then()
      .catch();
    return <></>;
  };
  return (
    <div id={key.toString()} className='mb-3 py-1 text-gray-800 md:mb-5'>
      <div
        className={clsx(
          'duration-200 md:hover:scale-[1.02] md:hover:ease-in-out',
          'rounded-xl border-[1.5px] shadow-md md:border-[2px]',
          'border-gray-200/50 md:hover:border-blue-600/75',
          'bg-white'
        )}
      >
        <div className={clsx('flex space-x-3', 'pt-4 pl-4 pb-1')}>
          <button
            className='flex bg-none pt-1 checked:bg-none hover:bg-none focus:bg-none'
            onClick={() => favClicked(resort)}
          >
            <Heart />
          </button>
          <div
            className='h4 flex flex-1 flex-col pb-1 md:pb-2'
            onClick={() => openModal(resort)}
          >
            <div>
              {resort.addressDtlDepth} · {resort.resortName}
            </div>
            {isDetail && (
              <div className='h6 md:h5 space-y-[1px] pb-3 text-gray-700 md:space-y-2 '>
                <div className='pt-1 md:pt-2'>
                  {getStatusDesc(
                    resort.status,
                    resort.openSlopeNameListStr,
                    resort.endTime,
                    resort.startTime
                  )}
                </div>
                <div className=''>방문 : 0명 | 게시글 : 0개</div>
                <div className=''>강사 : 0명 | 제휴샵 : 0개</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

function ResortCards({
  resorts,
  isDetail,
}: {
  resorts: fetch_data;
  isDetail: boolean;
}) {
  // console.log(resorts);
  return (
    <section className='relative pb-20'>
      <div className='layout'>
        <div className='h2 mt-5 pt-2 pb-3'>강원도</div>
        {resorts.data['강원도'].map((resort: resort, key: number) => {
          return ResortCard(resort, key, isDetail);
        })}

        <div className='h2 mt-8 py-3 md:mt-12'>경기도</div>
        {resorts.data['경기도'].map((resort: resort, key: number) => {
          return ResortCard(resort, key, isDetail);
        })}

        <div className='h2 mt-8 py-3 md:mt-12'>전라/경상</div>
        {resorts.data['전라도/경상도'].map((resort: resort, key: number) => {
          return ResortCard(resort, key, isDetail);
        })}
      </div>
    </section>
  );
}
export default ResortCards;
