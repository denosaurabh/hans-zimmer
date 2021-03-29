import React, { useRef, useState, useCallback, useEffect } from 'react';

import ResizeObserver from 'resize-observer-polyfill';
import {
  useViewportScroll,
  useTransform,
  useSpring,
  motion
} from 'framer-motion';

interface SmoothScrollProps {
  children: JSX.Element[];
}

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  // scroll container
  const scrollRef = useRef<HTMLDivElement>(null);

  // page scrollable height based on content length
  const [pageHeight, setPageHeight] = useState(0);

  // update scrollable height when browser is resizing
  const resizePageHeight = useCallback(entries => {
    for (const entry of entries) {
      setPageHeight(entry.contentRect.height);
    }
  }, []);

  // observe when browser is resizing
  useEffect(() => {
    if (!scrollRef.current) return;

    setPageHeight(window.innerHeight);

    const resizeObserver = new ResizeObserver((entries: unknown) => {
      resizePageHeight(entries);
    });

    scrollRef && resizeObserver.observe(scrollRef.current); // scrollRef.current
    return () => resizeObserver.disconnect();
  }, [scrollRef, resizePageHeight]);

  const scroll = useViewportScroll();
  const { scrollY } = scroll;

  // measures how many pixels user has scrolled vertically
  // as scrollY changes between 0px and the scrollable height, create a negative scroll value...
  // ... based on current scroll position to translateY the document in a natural way
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);
  const physics = { damping: 15, mass: 0.27, stiffness: 55 }; // easing of smooth scroll
  const spring = useSpring(transform, physics); // apply easing to the negative scroll value

  return (
    <>
      <motion.div
        ref={scrollRef}
        style={{
          y: spring,
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          overflow: 'hidden',
          willChange: 'transform',
          marginTop: '6rem'
        }} // translateY of scroll container using negative scroll value
        className="scroll-container"
      >
        {children}
      </motion.div>
      <div style={{ height: pageHeight }}></div>
    </>
  );
};

export default SmoothScroll;
