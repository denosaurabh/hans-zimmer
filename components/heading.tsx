import { Grid, GridItem } from '@chakra-ui/react';
import { MotionHeading, MotionText } from '@components/index';
import { useOnboarding } from '@contexts/onboarding';

interface TopHeadingI {
  mainTitle: { text: string; [key: string]: unknown };
  subTitle: {
    text: string;
    justifySelfMobile?: string;
    [key: string]: unknown;
  };
  description: {
    top: string;
    mid: string;
    bottom: string;
    [key: string]: unknown;
  };
}

const TopHeading = ({ mainTitle, subTitle, description }: TopHeadingI) => {
  const { headingDelay, textDelay } = useOnboarding();

  const { text: mainTitleText, ...mainTitleProps } = mainTitle;
  const {
    text: subTitleText,
    justifySelfMobile = 'flex-end',
    ...subTitleProps
  } = subTitle;

  const { top, mid, bottom, ...restDesProps } = description;

  return (
    <Grid
      templateColumns={{ base: '1fr', md: '1fr 1fr' }}
      templateRows={{ base: 'repeat(2, auto)', md: 'repeat(3, auto)' }}
      marginTop={24}
      marginBottom={40}
    >
      <GridItem colSpan={{ base: 1, md: 2 }}>
        <MotionHeading
          delay={headingDelay}
          fontSize={['60px', '90px', '100px', '130px', '168px']}
          {...mainTitleProps}
        >
          {mainTitleText}
        </MotionHeading>
      </GridItem>

      <GridItem
        colStart={{ base: 1, md: 2 }}
        justifySelf={{
          base: justifySelfMobile,
          md: 'flex-start',
          lg: 'unset'
        }}
        rowStart={2}
      >
        <MotionHeading
          delay={headingDelay}
          fontSize={['60px', '90px', '100px', '130px', '168px']}
          {...subTitleProps}
        >
          {subTitleText}
        </MotionHeading>
      </GridItem>
      <GridItem
        colStart={1}
        rowStart={{ base: 3, md: 2 }}
        justifySelf="center"
        alignSelf="center"
        fontSize={{ base: 'md', md: 'lg', lg: '2xl' }}
        fontWeight="light"
        {...restDesProps}
      >
        <MotionText delay={textDelay}>{top}</MotionText>
        <MotionText delay={textDelay}>{mid}</MotionText>
        <MotionText delay={textDelay}>{bottom}</MotionText>
      </GridItem>
    </Grid>
  );
};

export default TopHeading;
