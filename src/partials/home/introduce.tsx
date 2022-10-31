import React from 'react';

function Introduce() {
  return (
    <section
      className='bg-[#F8F8F8] py-16 tracking-wider md:py-28'
      data-aos='fade-up'
    >
      <div className='relative mx-auto max-w-6xl'>
        <div className='h1 flex flex-col'>
          <div className='h3 flex-1 justify-center text-center leading-loose '>
            큐찾사와 함께 떠나는 큐 여행 ✈️
          </div>
          <div className='flex-1 justify-center text-center leading-relaxed'>
            살때는 <span className='text-green-700'>안심하고</span>,
          </div>
          <div className='flex-1 justify-center text-center leading-relaxed'>
            팔때는 <span className='text-green-700'>편리하게</span>,
          </div>
          <div className='flex-1 justify-center text-center leading-relaxed'>
            소통은 <span className='text-green-700'>자유롭게</span>.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduce;
