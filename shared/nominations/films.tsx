import { Flex, Text } from '@chakra-ui/react';
import FilmBox from '@shared/nominations/film-box';

const Films = () => {
  return (
    <Flex direction="column" w="full">
      <Flex w="full" justifyContent="space-between" marginBottom={8}>
        <Text>
          AWARDS <br /> NOMINATION
        </Text>
        <Text size="sm">Films</Text>
      </Flex>
      <FilmBox />
      <FilmBox />
      <FilmBox />
      <FilmBox />
      <FilmBox />
      <FilmBox />
    </Flex>
  );
};

export default Films;
