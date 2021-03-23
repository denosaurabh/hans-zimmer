import React from 'react';

import { Page } from '@layouts/index';
import { Heading } from '@components';
import { ImgDescription, FilmsCareer, Latests } from '@shared/biography';

const Home = (): JSX.Element => {
  return (
    <Page>
      <Heading
        mainTitle="BIOGRAPHY"
        subTitle="ARTIST"
        description={{
          top: 'MORE THAN 200',
          mid: 'PROJECTS ACROSS ALL',
          bottom: 'MEDIUMS'
        }}
      />
      <ImgDescription />
      <FilmsCareer />
      <Latests />
    </Page>
  );
};

export default Home;
