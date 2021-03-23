import { Grid, GridItem } from '@chakra-ui/react';
import { MotionHeading, MotionText } from '@components/index';

interface TopHeadingI {
  mainTitle: { text: string; [key: string]: unknown };
  subTitle: { text: string; [key: string]: unknown };
  description: {
    top: string;
    mid: string;
    bottom: string;
    [key: string]: unknown;
  };
}

const TopHeading = ({ mainTitle, subTitle, description }: TopHeadingI) => {
  const { text: mainTitleText, ...mainTitleProps } = mainTitle;
  const { text: subTitleText, justifySelfMobile, ...subTitleProps } = subTitle;

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
          fontSize={['60px', '90px', '100px', '130px', '168px']}
          {...mainTitleProps}
        >
          {mainTitleText}
        </MotionHeading>
      </GridItem>

      <GridItem
        colStart={{ base: 1, md: 2 }}
        justifySelf={{
          base: justifySelfMobile ?? 'flex-end',
          md: 'flex-start'
        }}
        rowStart={2}
      >
        <MotionHeading
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
        fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
        fontWeight="light"
        {...restDesProps}
      >
        <MotionText>{top}</MotionText>
        <MotionText>{mid}</MotionText>
        <MotionText>{bottom}</MotionText>
      </GridItem>
    </Grid>
  );
};

export default TopHeading;
