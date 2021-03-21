import { useState } from 'react';
import { Flex, GridItem, Heading, Text } from '@chakra-ui/react';
import { MotionFlex, MotionBox, MotionGrid } from '@components/index';

const FilmBox = () => {
  const [isHovered, setHovered] = useState(false);

  return (
    <MotionGrid
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <GridItem
        rowStart={1}
        rowEnd={2}
        colStart={1}
        colEnd={2}
        alignSelf="center"
        justifySelf="center"
        w="100%"
        h="100%"
      >
        <Flex justifyContent="center" alignItems="center" w="100%" h="100%">
          <MotionBox
            initial={{ width: '100%', height: '0' }}
            animate={isHovered ? { height: '100%' } : {}}
            transition={{ ease: 'linear', duration: 0.4 }}
            sx={{
              backgroundImage: 'url(/assets/lion-king.jfif)',
              backgroundSize: 'cover',
              objectFit: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              transformOrigin: 'center',
              alignSelf: 'center',
              justifySelf: 'center'
            }}
          />
        </Flex>
      </GridItem>
      <GridItem rowStart={1} rowEnd={2} colStart={1} colEnd={2}>
        <MotionFlex
          height="auto"
          justifyContent="space-between"
          paddingY="8"
          placeItems="center"
          borderTopWidth="thin"
          borderTopColor="grey.light"
          initial={{}}
          animate={
            isHovered
              ? {
                  paddingLeft: '32px',
                  paddingRight: '32px'
                }
              : {}
          }
          transition={{ ease: 'easeOut', duration: 0.4 }}
        >
          <Flex alignItems="center">
            <Heading fontSize="8xl" marginRight="10%">
              2020&nbsp;/
            </Heading>
            <Text fontSize="x-large" fontWeight="normal">
              GRAMMY <br /> AWARDS
            </Text>
          </Flex>
          <Flex direction="column" alignItems="flex-end">
            <Heading size="sm">THE LION KING</Heading>
            <Text size="sm" variant="semibold">
              Nominee
            </Text>
          </Flex>
        </MotionFlex>
      </GridItem>
    </MotionGrid>
  );
};

export default FilmBox;
