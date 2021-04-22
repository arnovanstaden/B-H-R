// MUI
import Container from "@material-ui/core/Container";

import styles from "./nav.module.scss";

const PageNav = ({ children }) => {
    return (
        <nav className={styles.nav}>
            <Container>
                <div className={styles.links}>
                    {children}
                </div>
            </Container>
        </nav>
    )
}

export default PageNav
