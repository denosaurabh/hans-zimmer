import { NextSeo } from 'next-seo';

import SmoothScroll from '@layouts/smooth-scroll';
import { Header, Footer } from '@components/index';

interface PageI {
  children: JSX.Element[];
  seo: Record<string, unknown>;
}

const Page = ({ children, seo }: PageI) => {
  return (
    <>
      <NextSeo {...seo} titleTemplate="%s | Hans Zimmer" />

      <Header />
      <SmoothScroll key>{children}</SmoothScroll>
      <Footer />
    </>
  );
};

export default Page;
