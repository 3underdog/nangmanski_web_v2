import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';
import React, { useEffect, useRef, useState } from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

import { UserType } from '@/pages/api/auth/userType';
import Transition from '@/utils/Transition';

import CuechatsaSVG from '~/svg/Cuechatsa.svg';

type Page = 'home' | 'home' | 'matching' | 'community' | 'mypage';

// eslint-disable-next-line @typescript-eslint/no-explicit-any, unused-imports/no-unused-vars
export default function Header({ mode }: { mode: any }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [top, setTop] = useState(true);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const trigger = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mobileNav = useRef<any>(null);

  // close the mobile menu on click outside
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const clickHandler = ({ target }: { target: any }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const keyHandler = ({ keyCode }: { keyCode: any }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  const [currentPage, setCurrentPage] = useState<Page>('home');
  useEffect(() => {
    setCurrentPage(
      window.location.pathname
        .substring(1, window.location.pathname.length)
        .split('/', 1)[0] as Page
    );
  }, []);

  const router = useRouter();
  const navigateSigin = () => {
    router.push('/auth/login');
    setMobileNavOpen(false);
  };

  const navigateCommunity = () => {
    router.push('/community');
    window.scrollTo(0, 0);
    setMobileNavOpen(false);
  };

  const navigateHome = () => {
    router.push('/');
    window.scrollTo(0, 0);
    setMobileNavOpen(false);
  };

  const { data: session, status } = useSession();
  const user = session?.user as UserType;

  return (
    <header className='sticky top-0 z-[10] border-b-[1px] bg-white md:z-[50]'>
      <div className='layout flex h-14 items-center justify-between pt-2 md:h-20 md:justify-start md:space-x-20'>
        <UnstyledLink href='/' className='h-14 pb-2'>
          <div className='h2 md:h3 flex flex-row space-x-2 pt-3 md:pt-4'>
            <div className='bg-gradient-to-r from-sky-500 to-blue-800 bg-clip-text text-transparent'>
              낭만스키
            </div>
            <div className='h2 pt-[2px]'>⛷</div>
          </div>
          {/* <CuechatsaSVG className='h-full text-[100px] md:text-[120px]' /> */}
        </UnstyledLink>

        {/*Mobile navigation */}
        <div className='flex md:hidden'>
          {/* Hamburger button */}
          <button
            ref={trigger}
            className={`hamburger ${mobileNavOpen && 'active'}`}
            aria-controls='mobile-nav'
            aria-expanded={mobileNavOpen}
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
          >
            <span className='sr-only'>Menu</span>
            <svg
              className='h-6 w-6 fill-current text-slate-900'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect y='4' width='24' height='2' />
              <rect y='11' width='24' height='2' />
              <rect y='18' width='24' height='2' />
            </svg>
          </button>
          <div ref={mobileNav}>
            <Transition
              show={mobileNavOpen}
              tag='nav'
              id='mobile-nav'
              className='absolute top-full left-0 z-20 h-screen w-full overflow-scroll bg-white pb-16'
              enter='transition ease-out duration-200 transform'
              enterStart='opacity-0 -translate-y-2'
              enterEnd='opacity-100 translate-y-0'
              leave='transition ease-out duration-200'
              leaveStart='opacity-100'
              leaveEnd='opacity-0'
              appear=''
            >
              <ul className='px-5 py-2'>
                {/* {status === 'authenticated' ? (
                  <div className='my-5 flex justify-start space-x-3'>
                    {user && user.images && user.images.length > 0 && (
                      <div className='h-12 w-12 rounded-full border-[1px] border-gray-100 bg-gray-600'>
                        <Image
                          className='rounded-full'
                          src={user.images[0].thumbnail_image}
                          width='100%'
                          height='100%'
                          alt={user?.id}
                        />
                      </div>
                    )}
                    <div className='flex-col'>
                      <div className='h3 my-auto'>
                        <span className='text-blue-700'>{user.nickName}</span>님
                        환영합니다
                      </div>
                      <div className='h5 flex flex-row space-x-2'>
                        <button
                          onClick={() =>
                            signOut({
                              redirect: true,
                              callbackUrl: '/auth/login',
                            })
                          }
                          className='my-auto'
                        >
                          로그아웃
                        </button>
                        <li className='my-auto'>
                          <UnstyledLink href='/mypage'>마이페이지</UnstyledLink>
                        </li>
                      </div>
                    </div>
                  </div>
                ) : (
                  <li>
                    <button
                      onClick={() => navigateSigin()}
                      className={clsx(
                        'h3 mt-5 flex py-2 transition duration-150 ease-in-out'
                      )}
                    >
                      로그인 / 회원가입
                    </button>
                  </li>
                )} */}

                <li>
                  <button
                    onClick={() => navigateHome()}
                    className={clsx(
                      'h3 flex py-2 transition duration-150 ease-in-out hover:text-blue-700',
                      currentPage === 'home' &&
                        'text-blue-700 underline decoration-blue-700 decoration-[3px] underline-offset-[10px]'
                    )}
                  >
                    스키장
                  </button>
                </li>
                <li>
                  <UnstyledLink
                    href='/matching'
                    className={clsx(
                      'h3 flex py-2 transition duration-150 ease-in-out hover:text-blue-700',
                      currentPage === 'matching' &&
                        'text-blue-700 underline decoration-blue-700 decoration-[3px] underline-offset-[10px]'
                    )}
                  >
                    강사매칭
                  </UnstyledLink>
                </li>
                <li>
                  <button
                    onClick={() => navigateCommunity()}
                    className={clsx(
                      'h3 flex py-2 transition duration-150 ease-in-out hover:text-pink-500',
                      currentPage === 'community' &&
                        'text-pink-500 underline decoration-pink-500 decoration-[3px] underline-offset-[10px]'
                    )}
                  >
                    커뮤니티
                  </button>
                </li>
              </ul>
            </Transition>
          </div>
        </div>

        {/*PC navigation */}
        <div className='h4 hidden items-center justify-between space-x-10 pt-2 md:flex md:flex-1'>
          <div className='flex flex-1 space-x-8'>
            <UnstyledLink
              href='/home'
              className={clsx(
                'transition duration-150 ease-in-out hover:text-blue-700',
                currentPage === 'home' &&
                  'text-blue-700 underline decoration-blue-700 decoration-[3px] underline-offset-[10px]'
              )}
            >
              스키장
            </UnstyledLink>

            <UnstyledLink
              href='/matching'
              className={clsx(
                'transition duration-150 ease-in-out hover:text-blue-700',
                currentPage === 'matching' &&
                  'text-blue-700 underline decoration-blue-700 decoration-[3px] underline-offset-[10px]'
              )}
            >
              강사매칭
            </UnstyledLink>

            <UnstyledLink
              href='/community'
              className={clsx(
                'transition duration-150 ease-in-out hover:text-pink-500',
                currentPage === 'community' &&
                  'text-pink-500 underline decoration-pink-500 decoration-[3px] underline-offset-[10px]'
              )}
            >
              커뮤니티
            </UnstyledLink>

            {/* <UnstyledLink
              href='/mypage'
              className={clsx(
                'transition duration-150 ease-in-out hover:text-gray-700',
                currentPage === 'mypage' &&
                  'text-gray-700 underline decoration-gray-700 decoration-[3px] underline-offset-[10px]'
              )}
            >
              마이페이지
            </UnstyledLink> */}
          </div>
          {/* <div className='h5 pl-20'>
            {status === 'authenticated' ? (
              <div className='flex justify-center space-x-2'>
                <UnstyledLink
                  href='/mypage'
                  className='flex justify-center space-x-2'
                >
                  <div className='mb-1 h-7 w-7 rounded-full border-[1px] border-gray-100 bg-gray-600'>
                    {user && user.images && user.images.length > 0 && (
                      <Image
                        className='rounded-full'
                        src={user.images[0].thumbnail_image}
                        width='100%'
                        height='100%'
                        alt={user?.id}
                      />
                    )}
                  </div>
                  <div className='my-auto'>{user?.nickName} </div>
                </UnstyledLink>

                <button
                  onClick={() =>
                    signOut({
                      redirect: true,
                      callbackUrl: '/auth/login',
                    })
                  }
                  className='text-blue-700 transition duration-150 ease-in-out hover:text-gray-400'
                >
                  로그아웃
                </button>
              </div>
            ) : (
              <UnstyledLink
                href='/auth/login'
                className={clsx(
                  'transition duration-150 ease-in-out hover:text-gray-700',
                  currentPage === 'mypage' &&
                    'text-gray-700 underline decoration-gray-700 decoration-[3px] underline-offset-[10px]'
                )}
              >
                로그인
              </UnstyledLink>
            )}
          </div> */}
        </div>
      </div>
    </header>
  );
}
