/* eslint-disable */
import { signIn, signOut, useSession } from 'next-auth/react';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { niceID } from '@/pages/api';
import { apiUrl } from '@/constant/env';

// 참고 : https://stackoverflow.com/questions/64576733/where-and-how-to-change-session-user-object-after-signing-in/64595973#64595973

export default function SignIn() {
  // 로그인 여부를 useSession 으로 불러옴
  const { data: session, status } = useSession();
  // TODO: 로그인 정보 저장하기 -> LS 활용하여 저장필요
  const [isLoginRememberChecked, setIsLoginRememberChecked] =
    React.useState<boolean>(false);
  // 로그인 실패시
  const [error, setError] = React.useState(false);
  // 로그인된 상태일 경우 메인페이지로 이동
  const router = useRouter();
  if (status === 'authenticated') {
    console.log(router);
    router.push('/');
  }

  // 핸드폰번호 input 참조
  const phonenumberRef =
    React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const [phonenumber, setPhonenumber] = React.useState<string>('');
  // 핸드폰번호를 010-0000-0000 형태로 변환
  const phonenumberHelper = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(e.target.value)) {
      setPhonenumber(e.target.value);
    }
  };
  React.useEffect(() => {
    if (phonenumber.length === 10) {
      setPhonenumber(phonenumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
    }
    if (phonenumber.length === 13) {
      setPhonenumber(
        phonenumber
          .replace(/-/g, '')
          .replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
      );
    }
  }, [phonenumber]);

  // 비밀번호 input 참조
  const passwordRef =
    React.useRef() as React.MutableRefObject<HTMLInputElement>;
  // next-auth credentials 로그인 pages > api > auth > [...nextauth].js
  const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const x = await signIn('credentials', {
      redirect: false,
      phonenumber: phonenumberRef.current.value,
      password: passwordRef.current.value,
      callbackUrl: '/',
    })
      .then((data) => {
        if (data?.status === 401) {
          setError(true);
        } else if (data?.status === 200) {
          setError(false);
        }
        console.log('Login Success', data);
      })
      .catch((error) => {
        console.log('Login Fail', error);
      });
  };

  return (
    <Layout>
      <Seo />
      <main className='grow'>
        <section className='min-h-screen bg-white bg-gradient-to-b'>
          <div className='mx-auto max-w-6xl px-4 sm:px-6'>
            <div className='pt-16 pb-12 md:pt-40'>
              <div className='mx-auto max-w-3xl pb-12 text-center md:pb-20'>
                <h1 className='h2'>로그인 / 회원가입</h1>
                <h5 className='mt-3'>
                  홈페이지용 비밀번호 설정은 큐찾사 앱에서 가능합니다.
                </h5>
              </div>

              <div className='mx-auto max-w-md'>
                {/* 핸드폰번호 / 비밀번호 입력 */}
                <form onSubmit={(e) => loginHandler(e)}>
                  {/* 핸드폰번호 */}
                  <div className='-mx-3 mb-4 flex flex-wrap'>
                    <div className='w-full px-3'>
                      <label
                        className='h5 md:h4 mb-1 block text-gray-800'
                        htmlFor='phonenumber'
                      >
                        핸드폰번호
                      </label>
                      <input
                        id='phonenumber'
                        type='text'
                        ref={phonenumberRef}
                        className='placeholder:h6 md:placeholder:h5 form-input w-full text-gray-800  placeholder:text-gray-600'
                        placeholder='핸드폰번호를 입력해주세요. ex) 010-0000-0000'
                        onChange={(e) => phonenumberHelper(e)}
                        onClick={(e) => setPhonenumber('')}
                        value={phonenumber}
                        required
                      />
                    </div>
                  </div>
                  {/* 비밀번호 */}
                  <div className='-mx-3 mb-4 flex flex-wrap'>
                    <div className='w-full px-3'>
                      <div className='flex justify-between'>
                        <label
                          className='h5 md:h4 mb-1 block text-gray-800'
                          htmlFor='password'
                        >
                          비밀번호
                        </label>
                      </div>
                      <input
                        id='password'
                        type='password'
                        ref={passwordRef}
                        className='placeholder:h6 md:placeholder:h5 form-input w-full text-gray-800 placeholder:text-gray-600'
                        placeholder='비밀번호를 입력해주세요'
                        onClick={() => (passwordRef.current.value = '')}
                        required
                      />

                      <div className='h6 my-3 text-center text-gray-600 '>
                        <span className='text-green-700'>👉 </span>
                        비밀번호는{' '}
                        <span className='text-green-700'>큐찾사 앱</span>에서
                        설정할 수 있습니다.
                      </div>
                    </div>
                  </div>

                  {/* 로그인 정보 기억하기  */}
                  <div className='-mx-3 mb-4 flex flex-wrap'>
                    <div className='flex w-full px-3'>
                      <div className='flex flex-1 items-center md:flex-none'>
                        <input
                          type='checkbox'
                          id='Remember-yes'
                          name='Remember-confirmation'
                          value='yes'
                          className='absolute h-8 w-8 opacity-0'
                          onChange={() =>
                            setIsLoginRememberChecked(!isLoginRememberChecked)
                          }
                          checked={isLoginRememberChecked}
                        />
                        <div className='mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border-2 border-gray-400 bg-white focus-within:border-green-600'>
                          {isLoginRememberChecked && (
                            <svg
                              className='pointer-events-none hidden h-3 w-3 fill-current text-green-600'
                              version='1.1'
                              viewBox='0 0 17 12'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <g fill='none' fillRule='evenodd'>
                                <g
                                  transform='translate(-9 -11)'
                                  fill='rgb(21, 128, 61)'
                                  fillRule='nonzero'
                                >
                                  <path d='m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z' />
                                </g>
                              </g>
                            </svg>
                          )}
                        </div>
                        <label
                          htmlFor='Remember-yes'
                          className='h6 md:h5 select-none pt-[2px] text-gray-600'
                        >
                          로그인 정보 기억하기
                        </label>
                      </div>
                      {error && (
                        <div className='h5 flex-1 text-right text-red-500 '>
                          일치하는 회원이 없습니다.
                        </div>
                      )}
                    </div>
                  </div>

                  {/* 로그인 버튼 / 실명인증로그인 */}
                  <div className='-mx-3 mt-6 flex flex-wrap'>
                    <div className='w-full px-3'>
                      <button
                        className='btn w-full rounded-md bg-green-600 py-3 text-white hover:bg-green-700'
                        type='submit'
                      >
                        로그인
                      </button>
                    </div>
                  </div>
                </form>
                {/* 비밀번호 모를경우 */}
                <div className='h6 my-3 text-center text-gray-600 '>
                  비밀번호를 모르실 경우{' '}
                  <button
                    onClick={() =>
                      alert(
                        '큐찾사앱에서 로그인/회원가입후\n1.마이페이지\n2.닉네임클릭\n3.내정보관리\n로 들어가시면 비밀번호를 설정할 수 있습니다.'
                      )
                    }
                  >
                    <span className='underline decoration-2 underline-offset-4 hover:text-green-700'>
                      앱에서 재설정
                    </span>
                  </button>
                  해주세요
                </div>

                <div className='my-6 flex items-center'>
                  <div
                    className='mr-3 grow border-t border-gray-300'
                    aria-hidden='true'
                  ></div>
                  <div className='italic text-gray-600'>OR</div>
                  <div
                    className='ml-3 grow border-t border-gray-300'
                    aria-hidden='true'
                  ></div>
                </div>

                {/* 실명인증으로 로그인 */}
                <div className='-mx-3 flex flex-wrap'>
                  <div className='w-full px-3'>
                    <button
                      className='btn relative flex w-full items-center rounded-md bg-gray-400 px-0 text-white  hover:bg-gray-500'
                      onClick={() =>
                        alert(
                          '해당 기능은 개발중입니다 😀\n큐찾사 회원가입 후 비밀번호 설정해주시기 바랍니다.'
                        )
                      }
                    >
                      <span className='flex-auto py-3'>
                        실명인증으로 로그인
                      </span>
                    </button>
                  </div>
                </div>

                {/* 회원가입 LINK */}
                <div className='h6 mt-3 text-center text-gray-600'>
                  회원이 아니신가요?{' '}
                  <button
                    onClick={() =>
                      alert(
                        '해당 기능은 개발중입니다 😀\n큐찾사앱에서 회원가입이 가능합니다.'
                      )
                    }
                  >
                    <span className='text-gray-600 underline decoration-2 underline-offset-4 transition duration-150 ease-in-out hover:text-green-600 '>
                      회원가입하기
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
