import React, { useState, forwardRef, LegacyRef } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import FilmBox from '@shared/nominations/film-box';

import FilmsData from '@shared/nominations/filmsData';

const Films = forwardRef((_, ref: LegacyRef<HTMLDivElement> | undefined) => {
  const [activeFilm, setActiveFilm] = useState(-1); /* FOR TOUCH EVENTS */

  /* I DON'T WANT TO SUFFER ANYMORE TO COMPLETE THIS */
  // const [isSmallerThan500px] = useMediaQuery('(max-width: 500px)');
  // console.log(isSmallerThan500px);

  return (
    <Flex
      ref={ref}
      id="awards"
      flexDirection="column"
      w="full"
      marginBottom={{ base: 40, md: 40 }}
    >
      <Flex w="full" justifyContent="space-between" marginBottom={8}>
        <Text>
          AWARDS <br /> NOMINATION
        </Text>
        <Text size="sm">Films</Text>
      </Flex>
      {FilmsData.map((data, i) => (
        <FilmBox
          {...data}
          key={i}
          amITouched={i === activeFilm}
          onTouchStartHandler={() => setActiveFilm(i)}
          onTouchEndHandler={() => setActiveFilm(i)}
        />
      ))}
    </Flex>
  );
});

Films.displayName = 'Films';

export default Films;
