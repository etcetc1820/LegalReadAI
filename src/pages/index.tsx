import { MainScreen } from '@components/MainScreen/MainScreen';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Legal Read</title>
      </Head>
      <div className="container screen">
        <MainScreen />
      </div>
    </>
  );
}
