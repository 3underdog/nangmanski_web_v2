import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import Faqs from '@/partials/sellcue/Faqs';
import SellMainBanner from '@/partials/sellcue/mainBanner';
import Process from '@/partials/sellcue/Process';
import SellTopBanner from '@/partials/sellcue/topBanner';

export default function Sellcue() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <main>
        <section className='bg-white'>
          <div className='flex min-h-screen flex-col overflow-hidden'>
            <main className='grow'>
              <SellTopBanner />
              <SellMainBanner />
              <Process />

              <Faqs />
            </main>
          </div>
        </section>
      </main>
    </Layout>
  );
}
