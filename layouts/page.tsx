import SmoothScroll from '@layouts/smooth-scroll';
import { Header, Footer } from '@components/index';

interface PageI {
  children: JSX.Element[];
}

const Page = ({ children }: PageI) => {
  return (
    <>
      <Header />
      <SmoothScroll>{children}</SmoothScroll>
      <Footer />
    </>
  );
};

export default Page;
