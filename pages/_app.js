import '../styles/globals.css'
import '../styles/connect4.css'
import dynamic from 'next/dynamic';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
