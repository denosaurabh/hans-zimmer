import { Flex, Text } from '@chakra-ui/react';
import FilmBox from '@shared/nominations/film-box';

import FilmsData from '@shared/nominations/filmsData';

const Films = () => {
  return (
    <Flex flexDirection="column" w="full" marginBottom={{ base: 40, md: 40 }}>
      <Flex w="full" justifyContent="space-between" marginBottom={8}>
        <Text>
          AWARDS <br /> NOMINATION
        </Text>
        <Text size="sm">Films</Text>
      </Flex>
      {FilmsData.map((data, i) => (
        <FilmBox {...data} key={i} />
      ))}
    </Flex>
  );
};

export default Films;
