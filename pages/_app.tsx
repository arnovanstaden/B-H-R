// Components
import Header from '../components/UI/Header/Header';
import Footer from '../components/UI/Footer/Footer';

// Global Styles
import '../styles/global.scss';

// Fonts & icons
import "typeface-montserrat"
import "../assets/icons/style.css"

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
