import React from 'react';

import { Page } from '@layouts/index';
import { Heading } from '@components';
import { ImgDescription, FilmsCareer, Latests } from '@shared/biography';

const Home = (): JSX.Element => {
  return (
    <Page>
      <Heading
        mainTitle={{
          text: 'BIOGRAPHY',
          fontSize: ['60px', '70px', '100px', '130px', '168px']
        }}
        subTitle={{
          text: 'ARTIST',
          fontSize: ['60px', '70px', '100px', '130px', '168px']
        }}
        description={{
          top: 'MORE THAN 200',
          mid: 'PROJECTS ACROSS ALL',
          bottom: 'MEDIUMS',
          paddingTop: { base: 4, md: 0 }
        }}
      />
      <ImgDescription />
      <FilmsCareer />
      <Latests />
    </Page>
  );
};

export default Home;
