import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { UserType } from '@/pages/api/auth/userType';

const Mypage = () => {
  const { data: session, status } = useSession();
  const user = session?.user as UserType | null;
  const router = useRouter();
  React.useEffect(() => {
    if (status !== 'authenticated') {
      router.push('/auth/login');
    }
  });

  return (
    <Layout>
      <Seo />{' '}
      <div className='min-h-screen py-40 text-center'>
        {user && user.images && user.images.length > 0 && (
          <div className='mb-8 flex-1 '>
            <div className='rounded-full'>
              <Image
                className='rounded-full'
                src={user.images[0].thumbnail_image}
                width='100%'
                height='100%'
                alt={user.id}
              ></Image>
            </div>
          </div>
        )}
        <span className='text-green-700'>{user?.nickName}</span>님 안녕하세요👋
        <br />
        현재 마이페이지는 개발중입니다.
      </div>
    </Layout>
  );
};

export default Mypage;
