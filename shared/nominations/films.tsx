import { useState } from 'react';
import { Flex, Text, useMediaQuery } from '@chakra-ui/react';
import FilmBox from '@shared/nominations/film-box';

import FilmsData from '@shared/nominations/filmsData';

const Films = () => {
  const [activeFilm, setActiveFilm] = useState(-1); /* FOR TOUCH EVENTS */
  const [isSmallerThan500px] = useMediaQuery('(max-width: 500px)');
  console.log(isSmallerThan500px);

  return (
    <Flex flexDirection="column" w="full" marginBottom={{ base: 40, md: 40 }}>
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
};

export default Films;
