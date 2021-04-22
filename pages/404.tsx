// Components
import Page from "../components/UI/Page/Page";

// Styles
import styles from '../styles/pages/404.module.scss';

const PageNotFound = () => {
    return (
        <Page
            className={styles.notFound}
            head={{
                title: "Page Not Found | BHR Solutions",
                description: "FIX THIS",
                canonical: "/",
                robots: false
            }}
        >

        </Page>
    )
}

export default PageNotFound
