// Components
import Header from '../components/UI/Header/Header';
import Footer from '../components/UI/Footer/Footer';

// Theme
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../styles/theme/Theme"

// Global Styles
import '../styles/global.scss';

// Fonts & icons
import "typeface-montserrat"
import "../assets/icons/style.css"

function MyApp({ Component, pageProps }) {

  return (
    <ThemeProvider theme={theme} >
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
