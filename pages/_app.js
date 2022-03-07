import '../styles/globals.css'
import Nav from './nav'
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mongo CRUD App </title>
      </Head>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
