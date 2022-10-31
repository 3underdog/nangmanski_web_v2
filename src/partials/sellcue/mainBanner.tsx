import Image from 'next/image';
import React from 'react';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';

import Model2 from '~/images/model_2.png';

function SellMainBanner() {
  return (
    <section className='relative'>
      <div className='mx-auto max-w-6xl px-4 pb-12 pt-10 md:px-6 md:pt-16'>
        <div
          className='h4 text-left text-gray-600'
          data-aos='zoom-y-out'
          data-aos-delay='150'
        >
          내큐를 파는 가장 쉬운 방법
          <div
            className='h1 mt-4 font-bold leading-8 md:leading-[40px]'
            data-aos='zoom-y-out'
          >
            <div className='bg-gradient-to-r from-sky-500 to-blue-800 bg-clip-text pt-2 text-transparent'>
              맡겨만 주세요,
            </div>
            <div className='hidden text-gray-900 md:mt-4 md:block'>
              알아서 판매해드립니다.
            </div>
            <div className='text-gray-900 md:mt-4 md:hidden'>
              <div className=''>큐찾사가 직접</div>
              <div>판매 해드릴게요</div>
            </div>
          </div>
        </div>
        <div className='-mt-10 flex flex-row md:-mt-40' data-aos='fade-right'>
          <div className='mt-56 hidden space-x-4 md:flex'>
            <div>
              <div className='h5 mb-2 pr-2 text-center text-gray-600'>
                안드로이드
              </div>
              <ArrowLink
                as={ButtonLink}
                variant='light'
                className='inline-flex h-12 w-36 items-center justify-center rounded-xl md:h-16 md:w-44'
                href='https://play.google.com/store/apps/details?id=com.cuechatsaapp&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
              >
                Google Play
              </ArrowLink>
            </div>
            <div>
              <div className='h5 mb-2 pr-2 text-center text-gray-600'>
                아이폰
              </div>
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
          <div className='-mr-3 flex flex-1 justify-end'>
            <Image
              className=''
              src={Model2}
              width='691'
              height='730'
              alt='Target'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SellMainBanner;
