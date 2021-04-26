
// MUI
import Container from "@material-ui/core/Container";
import useMediaQuery from '@material-ui/core/useMediaQuery';

import styles from "./nav.module.scss";

const PageNav = ({ links, page }) => {
    // Config
    const isMobileDevice = useMediaQuery('(max-width:760px)');

    const keys = Object.keys(links);

    // handlers
    const handleClick = (clickedElement) => {
        const tabs = document.querySelectorAll(`.${styles.links} a`);
        tabs.forEach((elem) => {
            elem.classList.remove(styles.active)
        })
        clickedElement.target.classList.add(styles.active);
    }

    if (isMobileDevice) {
        return null
    }

    return (
        <nav className={styles.nav}>
            <Container>
                <div className={styles.links}>
                    {keys.map((key, index) => (
                        <a
                            key={index}
                            href={`/${page}#${key}`}
                            onClick={handleClick}
                        >
                            {links[key]}
                        </a>
                    ))}
                </div>
            </Container>
        </nav>
    )
}

export default PageNav
