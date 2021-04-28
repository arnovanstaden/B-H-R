import { useRef, useEffect, useState } from "react"
import { useMediaQuery } from 'react-responsive'


// MUI
import Container from "@material-ui/core/Container";

import styles from "./nav.module.scss";

const PageNav = ({ links, page }) => {
    // Config
    const navRef = useRef<HTMLElement>(null)
    const isMobile = useMediaQuery({ query: '(max-width: 760px)' });
    const keys = Object.keys(links);
    let initialPos = 0;

    // State
    const [isSticky, setIsSticky] = useState(false)


    // Handlers
    const handleClick = (clickedElement) => {
        const tabs = document.querySelectorAll(`.${styles.links} a`);
        tabs.forEach((elem) => {
            elem.classList.remove(styles.active)
        })
        clickedElement.target.classList.add(styles.active);
    }

    const handleNavStuck = () => {
        const currentPos = navRef.current.getBoundingClientRect().top + document.documentElement.scrollTop;
        if ((currentPos - initialPos) > 5) {
            setIsSticky(true)
        } else {
            setIsSticky(false)
        }
    }

    useEffect(() => {
        if (!isMobile) {
            document.addEventListener("scroll", handleNavStuck);
            initialPos = navRef.current.getBoundingClientRect().top + document.documentElement.scrollTop;

            return () => {
                document.removeEventListener("scroll", handleNavStuck);
            }
        }
    }, [])


    if (isMobile) {
        return null
    }

    return (
        <nav className={`${styles.nav} ${isSticky ? styles.sticky : ""}`} ref={navRef} >
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
