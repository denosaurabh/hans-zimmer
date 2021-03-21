import React, {
  useRef,
  useState,
  useCallback,
  useLayoutEffect,
  useEffect
} from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import {
  useViewportScroll,
  useTransform,
  useSpring,
  motion
} from 'framer-motion';

import MotionBox from '@components/motion/box';

interface SmoothScrollProps {
  children: JSX.Element[];
}

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  // scroll container
  const scrollRef = useRef(null);

  // page scrollable height based on content length
  const [pageHeight, setPageHeight] = useState(0);

  // useEffect(() => {
  //   if (!scrollRef) return;

  //   setPageHeight(scrollRef.current.offsetHeight);
  // }, [scrollRef]);

  // update scrollable height when browser is resizing
  const resizePageHeight = useCallback(entries => {
    for (const entry of entries) {
      setPageHeight(3000); // PREV: entry.contentRect.height
    }
  }, []);

  // observe when browser is resizing
  useLayoutEffect(() => {
    setPageHeight(window.innerHeight);

    const resizeObserver = new ResizeObserver(entries => {
      resizePageHeight(entries);
    });

    scrollRef && resizeObserver.observe(scrollRef.current);
    return () => resizeObserver.disconnect();
  }, [scrollRef, resizePageHeight]);

  const { scrollY } = useViewportScroll(); // measures how many pixels user has scrolled vertically
  // as scrollY changes between 0px and the scrollable height, create a negative scroll value...
  // ... based on current scroll position to translateY the document in a natural way
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);
  const physics = { damping: 15, mass: 0.27, stiffness: 55 }; // easing of smooth scroll
  const spring = useSpring(transform, physics); // apply easing to the negative scroll value

  return (
    <MotionBox height={pageHeight}>
      <motion.div
        ref={scrollRef}
        style={{ y: spring }} // translateY of scroll container using negative scroll value
        className="scroll-container"
      >
        {children}
      </motion.div>
      {/* <div style={{ height: pageHeight }}></div> */}
    </MotionBox>
  );
};

export default SmoothScroll;

/* <> */
/* blank div that has a dynamic height based on the content's inherent height */
/* this is neccessary to allow the scroll container to scroll... */
/* ... using the browser's native scroll bar */
/* <div style={{ height: pageHeight }} /> */
/* </> */
