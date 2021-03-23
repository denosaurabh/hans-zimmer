import { Flex } from '@chakra-ui/react';
import { MotionImage, Description } from '@components';

const ImgDescription = () => {
  return (
    <Flex direction="column" alignItems="flex-end">
      <MotionImage
        h="4xl"
        w="full"
        objectFit="cover"
        src="/assets/hans-zimmer-grayscale.jpeg"
        transition={{ ease: 'linear', duration: 0.4 }}
        // style={{ x: imgXY.x, y: imgXY.y }}
      />

      <Description
        subtitle={{ top: 'MINI BIOGRAPHY FROM', bottom: 'IMDB' }}
        w="40%"
        marginTop="28"
      >
        A turning point in Zimmer&apos;s career in 1998 he was asked to score
        Rain Man for director Barry Levinson. The film went on to win the Oscar
        for Best Picture of the Year and earned Zimmer his first Academy Award
        Nomination for Best Original Score. The next year, Zimmer composed the
        score for another Best Picture Oscar recipient, Driving Miss Daisy,
        starring Jessica Tandy and Morgan Freeman.
      </Description>
    </Flex>
  );
};

export default ImgDescription;
