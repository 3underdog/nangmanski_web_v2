import axios from 'axios';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next/types';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { apiUrl } from '@/constant/env';
import FindBanner from '@/partials/findcue/banner';
import { Results } from '@/partials/findcue/cueType';

export default function CueDetail({
  cue,
}: {
  cue: InferGetServerSidePropsType<Results>;
}) {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <main>
        <section className='bg-white'>
          <FindBanner />
          <div className='layout h3 mx-auto py-40'>
            {cue && cue.document_id} <br />
            상세페이지 준비중
          </div>
        </section>
      </main>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const fetchUrl = `${apiUrl}/goods/web/v3/?id=${context.params?.id}`;
  const res = await axios.get(fetchUrl);
  const cue = await res.data.results[0];
  return {
    props: { cue }, // will be passed to the page component as props
  };
};
