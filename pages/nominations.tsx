import React from 'react';

import { Page } from '@layouts/index';
import { Heading } from '@components/index';
import { Films, ImgDescription } from '@shared/nominations';

const Home = (): JSX.Element => {
  return (
    <Page>
      <Heading
        mainTitle={{
          text: 'NOMINATION',
          fontSize: ['60px', '70px', '90px', '130px', '168px']
        }}
        subTitle={{
          text: 'ARCHIVE',
          justifySelfMobile: 'left',
          fontSize: ['60px', '90px', '100px', '130px', '168px']
        }}
        description={{
          top: 'RECOGNITION FOR',
          mid: 'HANS ZIMMER',
          bottom: '(SELECTION)',
          paddingTop: 4,
          fontSize: { base: 'xl', md: 'lg', lg: 'xl' }
        }}
      />
      <ImgDescription />
      <Films />
    </Page>
  );
};

export default Home;
