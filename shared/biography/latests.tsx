import React, { forwardRef, LegacyRef } from 'react';

import { Text, Box, Flex } from '@chakra-ui/react';
import { MotionHeading, NewsBox } from '@components/index';

const Latests = forwardRef((_, ref: LegacyRef<HTMLDivElement> | undefined) => {
  return (
    <Box marginTop={44} marginBottom={48} ref={ref} id="latests">
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
        {[
          {
            width: { base: '80%', md: '30%' },
            image: '/assets/hans-zimmer-live-show.jpg',
            label: 'Hans Zimmer in Show',
            imageSize: 'md',
            heading: { top: 'HANS ZIMMER', mid: 'LIVE SHOW 2021' },
            date: '2020, Sep 15'
          },
          {
            width: { base: '70%', md: '40%' },
            marginTop: 32,
            image: '/assets/hans-zimmer-ron-howard.jpg',
            label: 'Hans Zimmer meeting Ron Howard',
            heading: {
              top: 'SCORING RON',
              mid: "HOWARDS' NEXT FILM,",
              bottom: 'HILLBILLY ELEGY'
            },
            date: '2020, May 09'
          }
        ].map((news, i) => (
          <NewsBox {...news} key={i} />
        ))}
      </Flex>
    </Box>
  );
});

Latests.displayName = 'Latests';

export default Latests;
