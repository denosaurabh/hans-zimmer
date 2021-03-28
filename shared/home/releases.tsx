import { Flex } from '@chakra-ui/react';
import { MovieBox, MotionHeading } from '@components/index';

const Releases = () => (
  <Flex marginTop={96} flexDirection="column">
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

    <Flex flexDirection="column" marginTop="24">
      {[
        {
          image: 'films/lion-king.webp',
          label: 'A Big Lion Sitting',
          year: 2020,
          job: 'Composer',
          title: `THE LION KING`
        },
        {
          image: 'films/no-time-to-die.jpg',
          label: 'A man with grey coat',
          year: 2020,
          job: 'Score Producer / J. Marr',
          title: 'NO TIME TO DIE'
        },
        {
          image: 'films/x-men.jpg',
          label: 'Two womens holding hands and watching up',
          year: 2020,
          job: 'Composer',
          title: 'X-MEN: DARK PHOENIX'
        }
      ].map((el, i) => (
        <MovieBox {...el} index={i} key={i} />
      ))}
    </Flex>
  </Flex>
);

export default Releases;
