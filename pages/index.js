import Head from "next/head";
import {Text, Heading} from '@chakra-ui/react'
import CosiTimesFont from '@styles/fonts'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hans Zimmer</title>
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />


      </Head>
      <CosiTimesFont />

      <Heading>Hans Zimmer Project!!</Heading>
      <Text>First Commit</Text>

      <a href="http://www.onlinewebfonts.com">Online Web Fonts</a>
    </div>
  );
}
