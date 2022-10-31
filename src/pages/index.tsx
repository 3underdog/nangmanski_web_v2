import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import BetaBanner from '@/partials/home/banner';
import FindCueIntro from '@/partials/home/findcueintro';
import FindCuePay from '@/partials/home/findcuepay';
import FindCueService from '@/partials/home/findecuepremeium';
import FindCueSearch from '@/partials/home/findecuesearch';
import Introduce from '@/partials/home/introduce';
import MainBanner from '@/partials/home/mainbanner';
import SmartAppAward from '@/partials/home/smartappaward';
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

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white dark:bg-white'>
          <div className='flex min-h-screen flex-col overflow-hidden'>
            <main className='grow'>
              <BetaBanner />
              <MainBanner />
              <Introduce />
              <FindCueIntro />
              <FindCueSearch />
              <FindCueService />
              <FindCuePay />
              <SmartAppAward />
            </main>
          </div>
          {/* <div className='layout flex min-h-screen flex-col items-center justify-center text-center'></div> */}
        </section>
      </main>
    </Layout>
  );
}
