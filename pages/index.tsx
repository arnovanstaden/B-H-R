// Components
import Page from "../components/Page/Page";

// Styles
import styles from '../styles/pages/home.module.scss'

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
      Home
    </Page>
  )
}
