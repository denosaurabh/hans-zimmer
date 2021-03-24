import { Heading, Text, Box, Flex } from '@chakra-ui/react';
import { MotionFlex, MotionImage, MotionHeading } from '@components/index';

const Latests = () => {
  return (
    <Box marginTop={44} marginBottom={48}>
      <Flex
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent="space-between"
        w="full"
        marginBottom={40}
      >
        <MotionHeading fontSize="7xl" marginBottom={16} fontWeight="light">
          LATEST /
        </MotionHeading>
        <Text flexBasis="40%" fontSize="lg" fontWeight="light">
          Upcoming projects include The SpongeBob Movie: <br />
          Sponge on the Run, which will be released by Paramount on July 31,
          2020, Wonder Women 1984 set to be released by the Warner Bros. August
          14, 2020, the latest James Bond film No Time to Die, which will be
          released by MGM on November 25, 2020, Dune set to be released by
          Warner Bros. Recently, Zimmer completed highly successful Hans Zimmer
          Live tour stops across Asia and Australia and continues to perform
          concerts around the globe including an upcoming European tour
          beginning in Feburary 2021.
        </Text>
      </Flex>
      <Flex
        justifyContent="space-between"
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <MotionFlex width={{ base: '80%', md: '30%' }} flexDirection="column">
          <MotionImage
            src="/assets/hans-zimmer-live-show.jpg"
            height="md"
            objectFit="cover"
            marginBottom="8"
          />
          <Heading
            fontFamily="body"
            fontSize="3xl"
            fontWeight="normal"
            marginBottom="6"
          >
            HANS ZIMMER &#8599; <br /> LIVE 2021 SHOW
          </Heading>
          <Text size="sm" fontWeight="light">
            2020, Sep 15
          </Text>
        </MotionFlex>
        <MotionFlex
          width={{ base: '70%', md: '40%' }}
          flexDirection="column"
          marginTop="32"
        >
          <MotionImage
            src="/assets/hans-zimmer-ron-howard.jpg"
            marginBottom={8}
          />
          <Heading
            fontFamily="body"
            fontSize="3xl"
            fontWeight="normal"
            marginBottom="6"
          >
            SCORING RON &#8599; <br /> HOWARDS&apos;s NEXT FILM,
            <br /> HILLBILLY ELEGY
          </Heading>
          <Text size="sm" fontWeight="light">
            2020, May 09
          </Text>
        </MotionFlex>
      </Flex>
    </Box>
  );
};

export default Latests;
