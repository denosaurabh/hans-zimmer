import { Heading, Flex } from '@chakra-ui/react';
import { MotionFlex } from '@components/index';
import { NewsBox } from '@components/index';

const Latests = () => {
  return (
    <MotionFlex
      marginTop={{ base: 40, md: 96 }}
      marginBottom={{ base: 44, md: 80 }}
      flexDirection="column"
      h="auto"
    >
      <Heading fontSize="7xl" marginBottom={16} fontWeight="light">
        LATEST /
      </Heading>
      <Flex
        justifyContent="space-between"
        flexDirection={{ base: 'column', md: 'row' }}
      >
        {[
          {
            width: { base: '60%', md: '30%' },
            image: '/assets/barry-levinson.jfif',
            label: 'person in grayscale image',
            heading: { top: 'NEW FILM IS', mid: 'DIRECTED BY BARRY LEVINSON' },
            date: '2020, Sep 15'
          },
          {
            width: { base: '80%', md: '60%' },
            marginTop: { base: 12, md: 0 },
            image: '/assets/billie-eilish.jpg',
            label: 'Billie Eilish having award in his hands',
            heading: {
              top: `'NO TIME TO DIE' / HANS ZIMMER`,
              mid: 'TAKES OVER AS COMPOSER ON',
              bottom: 'BOND MOVIE'
            },
            date: '2020, June 06'
          }
        ].map((data, i) => (
          <NewsBox {...data} key={i} />
        ))}
      </Flex>
    </MotionFlex>
  );
};

export default Latests;
