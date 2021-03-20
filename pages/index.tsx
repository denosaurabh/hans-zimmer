import React from 'react';

import SmoothScroll from '@layouts/smooth-scroll';
import { Header } from '@components/index';

import {
  TopHeading,
  ImgDescription,
  Releases,
  Latests
} from '@shared/home/index';

const Home = () => {
  return (
    <>
      <Header />

      <SmoothScroll>
        <TopHeading />
        <ImgDescription />
        <Releases />
        <Latests />
      </SmoothScroll>
    </>
  );
};

export default Home;
