import { Flex } from '@chakra-ui/react';
import { MotionImage, Description } from '@components';

const ImgDescription = () => {
  return (
    <Flex position="relative" marginBottom={{ base: 96, md: 52 }}>
      <MotionImage
        rounded="full"
        h={{ base: 'sm', md: 'lg' }}
        w={{ base: 'sm', md: 'lg' }}
        objectFit="cover"
        src="/assets/hans-zimmer-blue.jpg"
        transition={{ ease: 'linear', duration: 0.4 }}
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
