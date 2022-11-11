import { useSession } from 'next-auth/react';
import * as React from 'react';
import useLocalStorage from 'use-local-storage';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import PostBanner from '@/partials/community/banner';
import InfinitePostList from '@/partials/community/list';
import PostTabs from '@/partials/community/tabs';
import PostWriteButton from '@/partials/community/writeButton';
import MatchingBanner from '@/partials/matching/banner';

export default function Community() {
  const [keyword, setKeyword] = React.useState('');
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  const { status } = useSession();
  useLocalStorage('CueListScroll', 0);
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <main>
        <section className='bg-white'>
          <MatchingBanner />
          <div className='sticky top-14 z-[1] border-b-[1px] md:top-20 md:z-[1]'>
            <PostTabs
              keyword={keyword}
              setKeyword={setKeyword}
              setIsRefreshing={setIsRefreshing}
            />
          </div>

          <div className=' bg-[#f6f6f6]'>
            <div className='layout min-h-screen'>
              {status === 'authenticated' && <PostWriteButton />}
              <div className='flex'>
                <div className='mt-28 flex-1 text-center'>
                  강사매칭 서비스 준비중 ⛷️{' '}
                </div>
              </div>
              {/* <InfinitePostList
                keyword={keyword}
                isRefreshing={isRefreshing}
                setIsRefreshing={setIsRefreshing}
              /> */}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

// import { QueryClient } from 'react-query';
// import { dehydrate } from 'react-query/hydration';
// export async function getServerSideProps() {
//   const queryClient = new QueryClient();
//   await queryClient.prefetchInfiniteQuery('postlist', () => getPostList(), {
//     staleTime: 60 * 1000,
//     cacheTime: 60 * 1000,
//   });

//   return {
//     props: {
//       dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
//     },
//   };
// }
