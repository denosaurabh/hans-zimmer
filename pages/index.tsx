import React from 'react';
import Head from 'next/head';
import {
  Text,
  Grid,
  GridItem,
  Image,
  Flex,
  VStack,
  Heading
} from '@chakra-ui/react';

import Header from '@components/header';
import MovieBox from '@components/movie-box';

import MainHeading from '@components/motion/heading';

import CosiTimesFont from '@styles/fonts';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Hans Zimmer</title>
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link
          href="//db.onlinewebfonts.com/c/39f1392b405636e18b86258bbb58bb45?family=Cosi+Times+Light+Condensed"
          rel="stylesheet"
          type="text/css"
        />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap"
          rel="stylesheet"
        />
      </Head>
      <CosiTimesFont />

      <Header />

      <Grid
        templateColumns="1fr 1fr"
        templateRows="repeat(2, auto)"
        marginBottom={16}
      >
        <MainHeading
          fontFamily="heading"
          fontWeight="light"
          fontSize={['98px', '128px', '168px']}
          lineHeight="shorter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          HANS
        </MainHeading>
        <GridItem colStart={2} rowStart={2}>
          <Heading
            fontFamily="heading"
            fontWeight="light"
            fontSize={['98px', '128px', '168px']}
            lineHeight="shorter"
          >
            ZIMMER
          </Heading>
        </GridItem>
        <GridItem
          colStart={1}
          rowStart={2}
          placeSelf="center"
          justifySelf="center"
        >
          <Text fontWeight="200" fontSize="2xl">
            A GERMAN BORN FILM <br /> SCORE COMPOSER AND <br /> RECORD PRODUCER
          </Text>
        </GridItem>
      </Grid>

      <Flex position="relative">
        <Image
          src="/assets/hans-zimmer.png"
          bgSize="cover"
          alt="hans zimmer sitting on chair"
          minW="50%"
        />
        <VStack
          spacing="8"
          lignItems="left"
          position="absolute"
          top="90%"
          right="0"
          w="60%"
        >
          <Text
            color="grey.medium"
            letterSpacing="wide"
            fontSize="xl"
            fontWeight="light"
          >
            Voluptate officia officia nostrud eu duis nisi ut tempor magna. Sit
            proident veniam id minim mollit elit cupidatat culpa non labore qui
            id. Reprehenderit excepteur enim duis sunt nostrud aliqua ut fugiat
            nisi velit nisi fugiat ullamco sint. Anim excepteur aliqua aliqua
            occaecat proident quis reprehenderit voluptate nisi consectetur.
          </Text>

          <Text letterSpacing="wide" fontSize="2xl" casing="uppercase">
            Hans Zimmer Tour | Live <br /> In Pargue
          </Text>
        </VStack>
      </Flex>

      <Flex marginTop={96} direction="column">
        <Heading fontSize="7xl" marginBottom={32} fontWeight="light">
          19-20 / <br /> RELEASES
        </Heading>
        <Flex direction="column">
          {[
            {
              image: 'lion-king.jfif',
              year: 2020,
              job: 'Composer',
              title: 'THE LION KING'
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

      <Flex marginTop={96} direction="column">
        <Heading fontSize="7xl" marginBottom={32} fontWeight="light">
          LATEST /
        </Heading>
        <Grid templateColumns="30% 60%" columnGap="10%">
          <Flex direction="column">
            <Image src="/assets/barry-levinson.jfif" marginBottom="8" />
            <Heading
              fontFamily="body"
              fontSize="3xl"
              fontWeight="normal"
              marginBottom="6"
            >
              NEW FILM IS &#8599; <br /> DIRECTED BY BARRY LEVINSON
            </Heading>
            <Text fontWeight="light">2020, Sep 15</Text>
          </Flex>
          <Flex direction="column">
            <Image src="/assets/bond-movie.png" marginBottom="8" />
            <Heading
              fontFamily="body"
              fontSize="3xl"
              fontWeight="normal"
              marginBottom="6"
            >
              &apos;NO TIME TO DIE&apos; / HANS ZIMMER &#8599; <br /> TAKES OVER
              AS COMPOSER ON <br /> BOND MOVIE
            </Heading>
            <Text fontWeight="light">2020, June 06</Text>
          </Flex>
        </Grid>
      </Flex>
    </div>
  );
};

export default Home;
