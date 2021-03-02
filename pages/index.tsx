import React from 'react';
import Head from 'next/head';
import { Text, Grid, GridItem, Image, Flex } from '@chakra-ui/react';

import Header from '@components/header';

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

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap"
          rel="stylesheet"
        />
      </Head>
      <CosiTimesFont />

      <Header />

      <Grid
        templateColumns="40% 60%"
        templateRows="repeat(2, auto)"
        marginBottom={16}
      >
        <Text
          fontFamily="heading"
          fontSize={['98px', '168px']}
          lineHeight="shorter"
        >
          Hans
        </Text>
        <GridItem colStart={2} rowStart={2}>
          <Text
            fontFamily="heading"
            fontSize={['98px', '168px']}
            lineHeight="shorter"
          >
            Zimmer
          </Text>
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

      <Flex>
        <Image
          src="/assets/hans-zimmer.png"
          alt="hans zimmer sitting on chair"
        />
      </Flex>
    </div>
  );
};

export default Home;
