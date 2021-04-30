import Link from 'next/link';
import { useRouter } from "next/router";
import { useState } from "react";

// MUI
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Drawer from '@material-ui/core/Drawer';

// Styles & Media
import styles from "./header.module.scss";

const Header = () => {

    // Config
    const router = useRouter();
    const isMobileDevice = useMediaQuery('(max-width:760px)');

    // State
    const [drawer, setDrawer] = useState(false)

    // Handlers
    const handleDrawerToggle = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setDrawer(prevState => !prevState);
    };

    const Links = () => {
        return (
            <ul className={styles.links} onClick={isMobileDevice ? handleDrawerToggle("right", true) : null}>
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
        )
    }

    const SocialLinks = () => {
        return (
            <ul className={styles.social}>
                <li >
                    <a href="https://www.facebook.com/bhrsolutions" target="blank" aria-label="facebook">
                        <i className="icon-facebook"></i>
                    </a>
                </li>
                {/* <li>
                    <a href="https://www.linkedin.com/" target="blank" aria-label="linkedin">
                        <i className="icon-linkedin"></i>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com" target="blank" aria-label="twitter">
                        <i className="icon-twitter"></i>
                    </a>
                </li> */}
            </ul>
        )
    }

    const Menu = () => {
        return (
            <div className={styles.menu}>
                <SocialLinks />
                <Links />
            </div>
        )
    }

    const MobileMenu = () => {
        return (
            <div className={styles.mobileMenu}>
                <div className={styles.button} onClick={handleDrawerToggle("right", true)}>
                    <i className="icon-menu"></i>
                </div>
                <Drawer
                    anchor={"right"}
                    open={drawer}
                    onClose={handleDrawerToggle("right", false)}
                >
                    <div className={styles.overlay}>
                        <i className="icon-clear" onClick={handleDrawerToggle("right", true)}></i>
                        <div className={styles.menu}>
                            <Links />
                            <SocialLinks />
                        </div>
                    </div>
                </Drawer>
            </div>
        )
    }

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <Link href="/">
                        <img src="/images/logos/navbar-logo.svg" alt="BHR Logo" />
                    </Link>
                </div>
                {isMobileDevice ? <MobileMenu /> : <Menu />}
            </nav>
        </header>
    )
}

export default Header
