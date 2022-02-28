import '../styles/globals.css'
import Nav from './nav'

function MyApp({ Component, pageProps }) {
  return <>
  <Nav/>
  <Component {...pageProps} />
  </>
}

export default MyApp
