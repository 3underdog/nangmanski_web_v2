import Link from 'next/link';
import * as React from 'react';

export default function Footer() {
  return (
    <footer className='border-t-[1px] border-gray-200 bg-white'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        {/* Bottom area */}
        <div className=' py-6 md:flex md:items-center md:justify-between md:py-8'>
          {/* Copyrights note */}
          <div className='h6 mr-4 text-slate-500'>
            <div className='h3 md:h4 mb-2 '>
              <span className='bg-gradient-to-r from-sky-500 to-blue-800 bg-clip-text text-transparent'>
                낭만스키
              </span>
            </div>
          </div>
          <div className='mr-4 mt-4 text-xs text-gray-500 text-transparent md:mt-0 md:text-sm'>
            COPYRIGHT © 2022 3underdog ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
      {/* <div className='layout flex h-80 items-center justify-between'>

      </div> */}
    </footer>
  );
}
