import useDialog from '@/hooks/useDialog';
import React, { Dispatch, SetStateAction } from 'react';
import { resort, resorts } from './homeType';

const ResortCard = (resort: resort, key: string, isDetail: boolean) => {
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
    <div
      id={key}
      className='py-1 text-gray-800'
      onClick={() => openModal(resort)}
    >
      <div className='flex space-x-3'>
        <div className='h3 flex'>💙</div>
        <div className='h4 flex flex-col'>
          <div>
            {resort.addressDtlDepth} · {resort.resortName}
          </div>
          {isDetail && (
            <div className='h6 md:h5 pb-3 text-gray-700'>
              <div className=''>
                {getStatusDesc(
                  resort.status,
                  resort.openSlopeNameListStr,
                  resort.endTime,
                  resort.startTime
                )}
              </div>
              <div className=''>자세한 내용이 나오는 곳</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

function ResortCards({
  resorts,
  isDetail,
}: {
  resorts: resorts;
  isDetail: boolean;
}) {
  console.log(resorts);
  return (
    <section className='relative mt-5'>
      <div className='layout'>
        <div className='h2 pt-2 pb-3'>강원도</div>
        {resorts.data['강원도'].map((resort: resort, key: string) => {
          return ResortCard(resort, key, isDetail);
        })}

        <div className='h2 mt-5 py-3'>경기도</div>
        {resorts.data['경기도'].map((resort: resort, key: string) => {
          return ResortCard(resort, key, isDetail);
        })}

        <div className='h2 mt-5 py-3'>전라/경상</div>
        {resorts.data['전라도/경상도'].map((resort: resort, key: string) => {
          return ResortCard(resort, key, isDetail);
        })}
      </div>
    </section>
  );
}
export default ResortCards;
