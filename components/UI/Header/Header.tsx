import Link from 'next/link';
import { useRouter } from "next/router";


// Styles & Media
import styles from "./header.module.scss";

const Header = () => {
    const router = useRouter();

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <Link href="/">
                        <img src="/images/logos/navbar-logo.svg" alt="BHR Logo" />
                    </Link>
                </div>
                <div className={styles.menu}>
                    <ul className={styles.social}>
                        <li >
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
                        <li className={router.pathname == "/about" ? styles.active : ""}>
                            <Link href="/about">
                                Our Company
                                </Link>
                        </li>
                        <li className={router.pathname == "/solutions" ? styles.active : ""}>
                            <Link href="/solutions">
                                Industry Solutions
                                </Link>
                        </li>
                        <li className={router.pathname == "/services" ? styles.active : ""}>
                            <Link href="/services">
                                Services
                                </Link>
                        </li>
                        <li className={router.pathname == "/team" ? styles.active : ""}>
                            <Link href="/team">
                                Our Team
                                </Link>
                        </li>
                        <li className={router.pathname == "/projects" ? styles.active : ""}>
                            <Link href="/projects">
                                Projects
                                </Link>
                        </li>
                        <li className={router.pathname == "/contact" ? styles.active : ""}>
                            <Link href="/contact">
                                Contact Us
                                </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header
