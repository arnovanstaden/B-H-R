// Components
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

// Global Styles
import '../styles/global.scss';

// Fonts
import "typeface-montserrat"

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
