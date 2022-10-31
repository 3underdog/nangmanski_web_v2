import Image from 'next/image';
import React from 'react';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';

import Model1 from '~/images/model_1.png';

function MainBanner() {
  return (
    <section className='relative'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='pt-20 pb-12 md:pb-20'>
          <div className='pb-12 text-center md:pb-16'>
            <div
              className='h4 mb-4 text-gray-600'
              data-aos='zoom-y-out'
              data-aos-delay='150'
            >
              누구나 편하게, 안심하고 거래하세요
            </div>
            <div className='h0 mb-4 font-bold' data-aos='zoom-y-out'>
              <div>
                <span className='bg-gradient-to-r from-green-800 to-green-700 bg-clip-text text-transparent'>
                  100%
                </span>{' '}
                실매물
              </div>
              <div className='mt-2 md:mt-5'>
                <span>중고큐 거래앱</span>
              </div>
              <div className='mt-2 md:mt-5'>
                <span className='bg-gradient-to-r from-green-800 to-green-700 bg-clip-text text-transparent'>
                  큐찾사
                </span>
              </div>
            </div>
            <div data-aos='fade-left'>
              <Image
                className='mx-auto'
                src={Model1}
                width='481'
                height='762'
                alt='Target'
              />
            </div>
            <div
              className='mx-auto mt-10 flex max-w-6xl flex-row justify-center text-white md:mt-12'
              data-aos='zoom-y-out'
              data-aos-delay='300'
            >
              <div className='m-2 md:m-3'>
                <div className='h5 mb-2 text-gray-600'>안드로이드</div>
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
                <div className='h5 mb-2 text-gray-600'>아이폰</div>
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainBanner;
