import Link from 'next/link';
import React from 'react';

function PostWriteButton() {
  return (
    <div className='fixed bottom-5 right-5 z-10'>
      <div className='flex h-[55px] w-[55px] justify-center rounded-full bg-pink-500 hover:bg-pink-600 md:h-16 md:w-16'>
        <Link href='/community/post/write'>
          <button className='mb-2 text-center font-secondary text-[50px] text-white md:mb-3 md:text-[60px]'>
            +
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PostWriteButton;
