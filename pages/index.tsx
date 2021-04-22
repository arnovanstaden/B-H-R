// Components
import Page from "../components/UI/Page/Page";

// MUI
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

// Styles
import styles from '../styles/pages/home.module.scss';

export default function Home() {
  return (
    <Page
      className={styles.home}
      head={{
        title: "BHR Solutions",
        description: "FIX THIS",
        canonical: "/"
      }}
    >

      <Container >
        <div className="heading">
          <h1>Meet <span>BHR Solutions</span></h1>
          <h2>We pride ourselves on being a one-stop shop that is able to meet our client’s needs. Our goal is to privide a high quality customer service. We understand that time and cost are crucial so we strive to go above and beyond our client’s expectations.</h2>
        </div>

      </Container>

    </Page>
  )
}
