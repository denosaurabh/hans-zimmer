import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

import {
  Text,
  Grid,
  GridItem,
  Image,
  Flex,
  VStack,
  Heading,
  Box,
  Spacer
} from '@chakra-ui/react';

import Header from '@components/header';
import MovieBox from '@components/movie-box';

import MainHeading from '@components/motion/heading';
import MotionImage from '@components/motion/image';
import MotionBox from '@components/motion/box';
import MotionText from '@components/motion/text';

import SmoothScroll from '@layouts/smooth-scroll';

import CosiTimesFont from '@styles/fonts';

const Home = () => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.5
      }
    }
  };

  const textContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.015,
        delayChildren: 0.5
      }
    }
  };

  const item = {
    hidden: { y: 150 },
    show: {
      y: 0,
      transition: {
        // ease: [0.7, 0.24, 0.31, 0.59]
        // ease: [1, -1.4, 0, 2]
        type: 'spring',
        stiffness: 80,
        bounce: 0,
        damping: 18
      }
    }
  };

  const textItem = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        // ease: [0.7, 0.24, 0.31, 0.59]
        // ease: [1, -1.4, 0, 2]
        type: 'tween',
        duration: 0.7
        // velocity: 50
        // stiffness: 110,
        // bounce: 0,
        // damping: 15
      }
    }
  };

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

      <SmoothScroll>
        <Header />

        <Grid
          templateColumns="1fr 1fr"
          templateRows="repeat(2, auto)"
          marginBottom={16}
        >
          <Box overflow="hidden">
            <MainHeading
              fontFamily="heading"
              fontWeight="light"
              fontSize={['98px', '128px', '168px']}
              lineHeight="90%"
              display="flex"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={item}>H</motion.div>
              <motion.div variants={item}>A</motion.div>
              <motion.div variants={item}>N</motion.div>
              <motion.div variants={item}>S</motion.div>
            </MainHeading>
          </Box>

          <GridItem colStart={2} rowStart={2}>
            <Box overflow="hidden">
              <MainHeading
                fontFamily="heading"
                fontWeight="light"
                fontSize={['98px', '128px', '168px']}
                lineHeight="90%"
                display="flex"
                variants={container}
                initial="hidden"
                animate="show"
              >
                <motion.div variants={item}>Z</motion.div>
                <motion.div variants={item}>I</motion.div>
                <motion.div variants={item}>M</motion.div>
                <motion.div variants={item}>M</motion.div>
                <motion.div variants={item}>E</motion.div>
                <motion.div variants={item}>R</motion.div>
              </MainHeading>
            </Box>
          </GridItem>
          <GridItem
            colStart={1}
            rowStart={2}
            justifySelf="center"
            alignSelf="end"
          >
            <Box overflow="hidden">
              <MotionBox
                display="flex"
                variants={textContainer}
                initial="hidden"
                animate="show"
              >
                {'A-GERMAN-BORN-FILM'.split('').map((el: string, i: number) => (
                  <MotionText
                    fontWeight="200"
                    fontSize="2xl"
                    variants={textItem}
                    key={i}
                    paddingRight={el === '-' ? '2' : '0'}
                  >
                    {el == '-' ? '' : el}
                  </MotionText>
                ))}
              </MotionBox>
            </Box>

            <Box overflow="hidden">
              <MotionBox
                display="flex"
                variants={textContainer}
                initial="hidden"
                animate="show"
              >
                {'SCORE-COMPOSER-AND'.split('').map((el: string, i: number) => (
                  <MotionText
                    fontWeight="200"
                    fontSize="2xl"
                    variants={textItem}
                    key={i}
                    paddingRight={el === '-' ? '2' : '0'}
                  >
                    {el == '-' ? '' : el}
                  </MotionText>
                ))}
              </MotionBox>
            </Box>

            <Box overflow="hidden">
              <MotionBox
                display="flex"
                variants={textContainer}
                initial="hidden"
                animate="show"
              >
                {'RECORD-PRODUCER'.split('').map((el: string, i: number) => (
                  <MotionText
                    fontWeight="200"
                    fontSize="2xl"
                    variants={textItem}
                    key={i}
                    paddingRight={el === '-' ? '2' : '0'}
                  >
                    {el == '-' ? '' : el}
                  </MotionText>
                ))}
              </MotionBox>
            </Box>
          </GridItem>
        </Grid>

        <Flex position="relative">
          <Box overflow="hidden">
            <MotionImage
              src="/assets/hans-zimmer.png"
              bgSize="cover"
              alt="hans zimmer sitting on chair"
              minW="50%"
              initial={{ x: -700 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.5, duration: 1.2, velocity: 10 }}
              whileHover={{ scale: 0.96 }}
            />
          </Box>

          <VStack
            spacing="8"
            alignItems="left"
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
              Voluptate officia officia nostrud eu duis nisi ut tempor magna.
              Sit proident veniam id minim mollit elit cupidatat culpa non
              labore qui id. Reprehenderit excepteur enim duis sunt nostrud
              aliqua ut fugiat nisi velit nisi fugiat ullamco sint. Anim
              excepteur aliqua aliqua occaecat proident quis reprehenderit
              voluptate nisi consectetur.
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
              <MotionImage src="/assets/barry-levinson.jfif" marginBottom="8" />
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
              <Image src="/assets/bond-movie.png" marginBottom={8} />
              <Heading
                fontFamily="body"
                fontSize="3xl"
                fontWeight="normal"
                marginBottom="6"
              >
                &apos;NO TIME TO DIE&apos; / HANS ZIMMER &#8599; <br /> TAKES
                OVER AS COMPOSER ON <br /> BOND MOVIE
              </Heading>
              <Text fontWeight="light">2020, June 06</Text>
            </Flex>
          </Grid>
        </Flex>
      </SmoothScroll>
    </div>
  );
};

export default Home;
