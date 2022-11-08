import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import ResortFilteringTabs from '@/partials/home/tabs';
import { GetServerSideProps } from 'next';
import { ApiUrl, apiUrl } from '@/constant/env';
import axios from 'axios';
import ResortCards from '@/partials/home/resortCards';
import { fetch_data } from '@/partials/home/homeType';
import HomeBanner from '@/partials/home/banner';
/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage(resorts: fetch_data) {
  const [isDetail, setIsDetail] = React.useState<boolean>(false);
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
              <ResortFilteringTabs
                isDetail={isDetail}
                setIsDetail={setIsDetail}
                isFav={isFav}
                setIsFav={setIsFav}
              />
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
