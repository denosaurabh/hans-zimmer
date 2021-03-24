import SmoothScroll from '@layouts/smooth-scroll';
import { Header, Footer } from '@components/index';
import { NextSeo } from 'next-seo';

interface PageI {
  children: JSX.Element[];
  seo: Record<string, unknown>;
}

const Page = ({ children, seo }: PageI) => {
  return (
    <>
      <NextSeo {...seo} titleTemplate="%s | Hans Zimmer" />

      <Header />
      <SmoothScroll>{children}</SmoothScroll>
      <Footer />
    </>
  );
};

export default Page;
