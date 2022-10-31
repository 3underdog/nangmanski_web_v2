import * as React from 'react';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import useLocalStorage from 'use-local-storage';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { getCueList } from '@/pages/api/index';
import FindBanner from '@/partials/findcue/banner';
import InfiniteCueList from '@/partials/findcue/list';
import Tabs from '@/partials/findcue/tabs';

export default function Findcue() {
  const [isPremeium, setIsPremeium] = React.useState<boolean>(false);
  const [isSet, setIsSet] = React.useState<boolean>(false);
  const [isButt, setIsButt] = React.useState<boolean>(false);
  const [isShaft, setIsShaft] = React.useState<boolean>(false);
  const [isBuying, setIsBuying] = React.useState<boolean>(false);
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  const [document_id, setDocument_id] = React.useState('');
  useLocalStorage('PostListScroll', 0);
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <main>
        <section className='bg-white'>
          <FindBanner />
          {/* Tabs */}
          <div className='sticky top-14 z-[1] border-b-[1px] md:top-20 md:z-[1]'>
            <Tabs
              isPremeium={isPremeium}
              setIsPremeium={setIsPremeium}
              isSet={isSet}
              setIsSet={setIsSet}
              isButt={isButt}
              setIsButt={setIsButt}
              isShaft={isShaft}
              setIsShaft={setIsShaft}
              isBuying={isBuying}
              setIsBuying={setIsBuying}
              setIsRefreshing={setIsRefreshing}
              document_id={document_id}
              setDocument_id={setDocument_id}
            />
          </div>
          <div className=' bg-[#f6f6f6]'>
            <div className='layout'>
              <InfiniteCueList
                isPremeium={isPremeium}
                isSet={isSet}
                isButt={isButt}
                isShaft={isShaft}
                isBuying={isBuying}
                isRefreshing={isRefreshing}
                document_id={document_id}
                setIsRefreshing={setIsRefreshing}
              />
            </div>
            <div className='h-96' />
          </div>
        </section>
      </main>
    </Layout>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery('cuelist', () => getCueList(), {
    staleTime: 60 * 1000,
    cacheTime: 60 * 1000,
  });

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}
