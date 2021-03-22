import React from 'react';

import SmoothScroll from '@layouts/smooth-scroll';
import { Header } from '@components/index';
import {
  ImgDescription,
  TopHeading,
  FilmsCareer,
  Latests
} from '@shared/biography';

const Home = (): JSX.Element => {
  return (
    <>
      <Header />

      <SmoothScroll>
        <TopHeading />
        <ImgDescription />
        <FilmsCareer />
        <Latests />
      </SmoothScroll>
    </>
  );
};

export default Home;
