import React from 'react';

import SmoothScroll from '@layouts/smooth-scroll';
import { Header } from '@components/index';
import { Films, ImgDescription, TopHeading } from '@shared/nominations';

const Home = (): JSX.Element => {
  return (
    <>
      <Header />

      <SmoothScroll>
        <TopHeading />
        <ImgDescription />
        <Films />
      </SmoothScroll>
    </>
  );
};

export default Home;
