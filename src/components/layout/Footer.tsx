import Link from 'next/link';
import * as React from 'react';

import CuechatsaSVG from '~/svg/Cuechatsa.svg';
export default function Footer() {
  return (
    <footer className='border-t-[1px] bg-white'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        {/* Top area: Blocks */}
        <div className='grid gap-8 py-4 sm:grid-cols-12 md:py-12'>
          <div className='sm:col-span-12 lg:col-span-4 lg:max-w-xs'>
            <CuechatsaSVG className='text-[100px]' />
            <div className='text-md text-slate-800'>
              1,000만 당구인을 위한 중고 큐 거래 앱
            </div>
          </div>

          <div className='sm:col-span-6 md:col-span-3 lg:col-span-2'>
            <h6 className='h5 mb-2 text-slate-800'>서비스</h6>
            <ul className='h5 space-y-2 text-slate-500'>
              <li>
                <Link href='/findcue'>내큐찾기</Link>
              </li>
              <li>
                <Link href='/sellcue'>내큐팔기</Link>
              </li>
              <li>
                <Link href='/community'>커뮤니티</Link>
              </li>
              <li>
                <Link href='/auth/login'>마이페이지</Link>
              </li>
            </ul>
          </div>

          <div className='sm:col-span-6 md:col-span-3 lg:col-span-2'>
            <h6 className='h5 mb-2 text-slate-800'>안전과 보안</h6>
            <ul className='h5 space-y-2 text-slate-500'>
              <li>NICE ID 실명인증</li>
              <li>PG 결제 시스템</li>
            </ul>
          </div>

          <div className='sm:col-span-6 md:col-span-3 lg:col-span-2'>
            <h6 className='h5 mb-2 text-slate-800'>회사</h6>
            <ul className='h5 space-y-2 text-slate-500'>
              <li>회사소개</li>
              <li>이용약관</li>
              <li>개인정보처리방침</li>
            </ul>
          </div>

          <div className='sm:col-span-6 md:col-span-3 lg:col-span-2'>
            <h6 className='h5 mb-2 text-slate-800'>고객센터</h6>
            <h6 className='mb-2 text-sm text-slate-800'>(평일 10시~19시)</h6>
            <ul className='h5 space-y-2 text-slate-500'>
              <li>전화 : 02-522-4999</li>
              <li>help@kimchibilliards.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom area */}
        <div className='border-t border-slate-200 py-6 md:flex md:items-center md:justify-between md:py-8'>
          {/* Copyrights note */}
          <div className='h6 mr-4 text-slate-500'>
            <div className='h3 md:h4 mb-2 text-slate-800'>(주)김치빌리아드</div>
            <div>사업자 등록번호 : 119-86-11033 ㅣ 대표 : 김종율</div>
            <div>137885 서울특별시 서초구 서초대로 277 기영빌딩 지하1층</div>
            <div>전화 : 02-522-4999</div>
            <div>메일 : help@kimchibilliards.com</div>
            <div>
              통신판매업 신고 : 제 2012-서울서초-1053호{' '}
              <a
                target='_blank'
                href='https://www.ftc.go.kr/bizCommPop.do?wrkr_no=1198611033'
                rel='noreferrer'
              >
                [사업자정보확인]
              </a>
            </div>
          </div>
          <div className='mr-4 mt-4 text-xs text-slate-800 md:text-sm'>
            COPYRIGHT © 2022 (주)김치빌리아드. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
      {/* <div className='layout flex h-80 items-center justify-between'>

      </div> */}
    </footer>
  );
}
