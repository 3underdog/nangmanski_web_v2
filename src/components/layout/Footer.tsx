import Link from 'next/link';
import * as React from 'react';

export default function Footer() {
  return (
    <footer className='border-t-[1px] bg-white'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        {/* Bottom area */}
        <div className='border-t border-slate-200 py-6 md:flex md:items-center md:justify-between md:py-8'>
          {/* Copyrights note */}
          <div className='h6 mr-4 text-slate-500'>
            <div className='h3 md:h4 mb-2 text-slate-800'>낭만스키</div>
          </div>
          <div className='mr-4 mt-4 text-xs text-slate-800 md:text-sm'>
            COPYRIGHT © 2022 3underdog ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
      {/* <div className='layout flex h-80 items-center justify-between'>

      </div> */}
    </footer>
  );
}
