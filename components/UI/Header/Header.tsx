import Link from 'next/link'
// MUI
import Container from "@material-ui/core/Container";

// Styles & Media
import styles from "./header.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <nav className={styles.nav}>
                    <div className={styles.logo}>
                        <Link href="/">
                            <img src="/images/logos/nav.png" alt="BHR Logo" />
                        </Link>
                    </div>
                    <div className={styles.menu}>
                        <ul className={styles.social}>
                            <li>
                                <a href="https://www.facebook.com/bhrsolutions" target="blank">
                                    <i className="icon-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/" target="blank">
                                    <i className="icon-linkedin"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com" target="blank">
                                    <i className="icon-twitter"></i>
                                </a>
                            </li>
                        </ul>
                        <ul className={styles.links}>
                            <li>
                                <Link href="/about">
                                    Our Company
                        </Link>
                            </li>
                            <li>
                                <Link href="/solutions">
                                    Industry Solutions
                        </Link>
                            </li>
                            <li>
                                <Link href="/services">
                                    Services
                        </Link>
                            </li>
                            <li>
                                <Link href="/team">
                                    Our Team
                        </Link>
                            </li>
                            <li>
                                <Link href="/projects">
                                    Projects
                        </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                    Contact Us
                        </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </Container>
        </header>
    )
}

export default Header
