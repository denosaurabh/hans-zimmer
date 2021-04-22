import React from 'react';

import { Page } from '@layouts/index';
import { Heading, Information } from '@components/index';

import { ImgDescription, Releases, Latests } from '@shared/home/index';

const Home = () => {
  return (
    <Page
      seo={{
        title: 'Home',
        description: 'Hans Zimmer, Film Score Composer and Record Producer'
      }}
    >
      <Heading
        mainTitle={{ text: 'HANS' }}
        subTitle={{ text: 'ZIMMER' }}
        description={{
          top: 'A GERMAN BORN FILM',
          mid: 'SCORE COMPOSER AND',
          bottom: 'RECORD PRODUCER',
          paddingTop: '4'
        }}
      />
      <ImgDescription />
      <Releases />
      <Latests />
      <Information />
    </Page>
  );
};

export async function getStaticProps() {
  return {
    props: { page: 'home' } // Page prop for no much reason
  };
}

export default Home;
