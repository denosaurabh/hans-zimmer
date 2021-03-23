import { Flex } from '@chakra-ui/react';
import { MovieBox, MotionHeading } from '@components/index';

const Releases = () => (
  <Flex marginTop={96} direction="column">
    <MotionHeading
      marginBottom={0}
      fontSize={{ base: '4xl', sm: '5xl', lg: '6xl' }}
    >
      19-20 /
    </MotionHeading>
    <MotionHeading
      marginBottom={6}
      fontSize={{ base: '4xl', sm: '5xl', lg: '6xl' }}
    >
      RELEASES
    </MotionHeading>

    <Flex direction="column" marginTop="24">
      {[
        {
          image: 'lion-king.jfif',
          year: 2020,
          job: 'Composer',
          title: `THE LION KING`
        },
        {
          image: 'no-time-to-die.jpg',
          year: 2020,
          job: 'Score Producer / J. Marr',
          title: 'NO TIME TO DIE'
        },
        {
          image: 'x-men.jpg',
          year: 2020,
          job: 'Composer',
          title: 'X-MEN:DARK PHOENIX'
        }
      ].map((el, i) => (
        <MovieBox {...el} index={i} key={i} />
      ))}
    </Flex>
  </Flex>
);

export default Releases;
