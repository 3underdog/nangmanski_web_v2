import axios from 'axios';
import { GetServerSideProps } from 'next';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { ApiUrl } from '@/constant/env';
import HomeBanner from '@/partials/home/banner';
import { fetch_data } from '@/partials/home/homeType';
import ResortCards from '@/partials/home/resortCards';
import ResortFilteringTabs from '@/partials/home/tabs';

export default function HomePage(resorts: fetch_data) {
  const [isDetail, setIsDetail] = React.useState<boolean>(true);
  const [isFav, setIsFav] = React.useState<boolean>(false);
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white dark:bg-white'>
          <div className='mb-20 flex min-h-fit flex-col overflow-hidden'>
            <main className='grow'>
              {/* <BetaBanner /> */}
              {/* <ResortFilteringTabs
                isDetail={isDetail}
                setIsDetail={setIsDetail}
                isFav={isFav}
                setIsFav={setIsFav}
              /> */}
              <HomeBanner />

              <ResortCards resorts={resorts} isDetail={isDetail} />
            </main>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const fetchUrl = `${ApiUrl}/resorts`;
  const res = await axios.get(fetchUrl);
  const resorts = await res.data;
  return {
    props: resorts,
  };
};
