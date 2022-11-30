import type { AppProps } from 'next/app';
import Head from 'next/head';
import '@/styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ScreenSnap | Awesome website screenshots</title>
      </Head>
      <main className='grid h-screen place-items-center'>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default App;
