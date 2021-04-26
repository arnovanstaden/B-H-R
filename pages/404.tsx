// Components
import Page from "../components/UI/Page/Page";

// MUI
import Container from "@material-ui/core/Container";

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
            contact={false}
        >

            <Container>
                <div className={styles.content}>
                    <h1>404</h1>
                    <h3>Page Not Found</h3>
                    <p>The Page you are looking for does not exist...</p>
                    <a className="button" href="/">Go Home</a>
                </div>
            </Container>
        </Page>
    )
}

export default PageNotFound
