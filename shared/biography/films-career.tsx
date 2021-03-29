import React, { forwardRef, LegacyRef } from 'react';

import { Heading, Flex, Image, Box } from '@chakra-ui/react';
import { MotionFlex, MotionImage } from '@components/index';
import NominationsNumber from '@shared/biography/nominations-number';

export const FilmsCareer = forwardRef(
  (_, ref: LegacyRef<HTMLHeadingElement> | undefined) => {
    return (
      <MotionFlex flexDirection="column">
        <Heading
          ref={ref}
          id="career"
          fontSize="7xl"
          marginBottom={16}
          fontWeight="light"
        >
          FILMS / <br />
          CAREER
        </Heading>
        <Flex
          justifyContent="space-between"
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <MotionFlex width={{ base: '90%', md: '40%' }} flexDirection="column">
            <MotionImage
              src="/assets/hans-zimmer-award.jpeg"
              marginBottom="8"
            />
          </MotionFlex>
          <MotionFlex
            width={{ base: '60%', md: '40%' }}
            marginTop={{ base: 12, md: 0 }}
            alignSelf={{ base: 'flex-end', md: 'unset' }}
            flexDirection="column"
          >
            <MotionImage
              src="/assets/hans-zimmer-glasses.jpeg"
              marginBottom={8}
            />
          </MotionFlex>
        </Flex>
      </MotionFlex>
    );
  }
);

export const FilmsCareerArchives = forwardRef(
  (_, ref: LegacyRef<HTMLDivElement> | undefined) => {
    return (
      <Box>
        <Flex
          ref={ref}
          id="archives"
          marginTop={52}
          marginBottom={52}
          justifyContent="center"
          textAlign="center"
        >
          <Heading fontSize="4xl">
            HANS ZIMMER HAS SCORED MORE THAN 200 PROJECTS <br /> ACROSS ALL
            MEDIUMS, WHICH, COMBINED HAVE <br /> GROSSED MORE THAN 28 BILLION
            DOLLARS AT THE <br /> WORLD WIDE BOX OFFICE
          </Heading>
        </Flex>

        <Flex
          justifyContent="center"
          position="relative"
          h={{ base: 'xl', md: '4xl' }}
        >
          <Image
            w={{ base: '80%', md: '60%' }}
            h="full"
            roundedTopLeft="full"
            roundedTopRight="full"
            objectFit="cover"
            src="/assets/hans-zimmer-piano.jpeg"
          />

          <NominationsNumber
            number={11}
            title={{ top: 'OSCAR', bottom: 'NOMINATIONS' }}
            top="35%"
            left={{ base: '0%', md: '10%' }}
          />

          <NominationsNumber
            number={18}
            title={{ top: 'GRAMMY', bottom: 'NOMINATIONS' }}
            top="15%"
            right={{ base: '0%', md: '20%' }}
          />

          <NominationsNumber
            number={14}
            title={{ top: 'GOLDEN GLOBES', bottom: 'NOMINATIONS' }}
            top="75%"
            left="45%"
          />
        </Flex>
      </Box>
    );
  }
);

FilmsCareer.displayName = 'Films Career';
FilmsCareerArchives.displayName = 'Films Career Archives';
