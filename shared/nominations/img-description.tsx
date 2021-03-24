import { Flex } from '@chakra-ui/react';
import { MotionImage, Description } from '@components';
// import { useEffect, useRef, useState } from 'react';

const ImgDescription = () => {
  /*
  const [mouseXY, setMouseXY] = useState({ x: 0, y: 0 });
  const [imgCenterXY, setImgCenterXY] = useState({ x: 300, y: 300 });

  const [imgXY, setImgXY] = useState({ x: 150, y: 150 });

  const imageRef = useRef(undefined);

  const setMousePosition = e => {
    setMouseXY({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    if (!imageRef.current) return;

    const { x, y, width, height } = imageRef.current.getBoundingClientRect();
    console.log(y, height, x, width);

    const centerX = x + width / 2;
    const centerY = y + height / 2 - 220;
    
    // -220 because of the Y-axis layout shift caused due to animaation, no layout change in X though,
    // I gets correted in Hot Reload also.
    

    setImgCenterXY({ x: centerX, y: centerY });
  }, [imageRef]);

  useEffect(() => {
    window.addEventListener('mousemove', setMousePosition);

    return () => window.removeEventListener('mousemove', setMousePosition);
  }, []);

  useEffect(() => {
    const { x, y } = mouseXY;
    const { x: centerX, y: centerY } = imgCenterXY;

    const shiftAmount = 10;

    // Using sqrt[sq((x2-x1)) + sq(y2-y1)] for calculating distance b/w two points on a XY plane
    const distance = Math.sqrt(
      Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
    );

    const imgX = (centerX / x) * shiftAmount;  // 20 for px shift 
    const imgY = (centerY / y) * shiftAmount; // 20 for px shift 

    setImgXY({ x: imgX, y: imgY });
  }, [imgCenterXY, mouseXY]);

  // useEffect(() => {
  //   console.log(mouseXY);
  // }, [mouseXY]);

  */

  return (
    <Flex position="relative" marginBottom={{ base: 96, md: 52 }}>
      <MotionImage
        // ref={imageRef}
        rounded="full"
        h={{ base: 'sm', md: 'lg' }}
        w={{ base: 'sm', md: 'lg' }}
        objectFit="cover"
        src="/assets/hans-zimmer-blue.jpg"
        transition={{ ease: 'linear', duration: 0.4 }}
        // style={{ x: imgXY.x, y: imgXY.y }}
      />

      <Description
        subtitle={{ top: 'GO TO DISCOGRAPHY', bottom: 'ARCHIVE' }}
        position="absolute"
        top={{ base: '80%', md: '30%' }}
        right="0"
        w={{ base: '90%', md: '50%', lg: '40%' }}
      >
        Zimmer has received a range of honors and awards, including the Lifetim
        Archivement Award in film Composition from the National Board of Revi
        the Frederick Loewe Award in 2003 at the Palm Springs International
        Festival, ASCAP&apos; s Henry Mancini Award for Lifetime Archivement,
        and BMI&apos; s Richard Kirk Award for lifetime archivement in 1996.
      </Description>
    </Flex>
  );
};

export default ImgDescription;
