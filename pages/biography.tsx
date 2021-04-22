import React, { LegacyRef, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';

import { Page } from '@layouts/index';
import { Heading, Information } from '@components';
import {
  ImgDescription,
  FilmsCareer,
  FilmsCareerArchives,
  Latests
} from '@shared/biography';

const Biography = () => {
  const careerRef: LegacyRef<HTMLHeadingElement> | undefined = useRef(null);
  const archivesRef: LegacyRef<HTMLHeadingElement> | undefined = useRef(null);
  const latestsRef: LegacyRef<HTMLHeadingElement> | undefined = useRef(null);

  const router = useRouter();

  useEffect(() => {
    if (!careerRef.current) return;
    if (router.query.to !== careerRef.current.id) return;

    window.scrollTo(0, careerRef.current.offsetTop);
  }, [router, careerRef]);

  useEffect(() => {
    if (!archivesRef.current) return;
    if (router.query.to !== archivesRef.current.id) return;

    window.scrollTo(0, archivesRef.current.offsetTop);
  }, [router, archivesRef]);

  useEffect(() => {
    if (!latestsRef.current) return;
    if (router.query.to !== latestsRef.current.id) return;

    window.scrollTo(0, latestsRef.current.offsetTop);
  }, [router, latestsRef]);

  return (
    <Page
      seo={{
        title: 'Home',
        description: 'Hans Zimmer, Films Career and Latest News'
      }}
    >
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
      <FilmsCareer ref={careerRef} />
      <FilmsCareerArchives ref={archivesRef} />
      <Latests ref={latestsRef} />
      <Information />
    </Page>
  );
};

export async function getStaticProps() {
  return {
    props: { page: 'biography' } // Page prop for no much reason
  };
}

export default Biography;
