import styles from "./footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.company}>
                    <img src="/images/icons/logomark.svg" alt="" />
                    <p>© 2020 BHR Solutions</p>
                </div>
                <div className={styles.social}>
                    <ul className={styles.social}>
                        <li>
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
                    <p>Development by <a href="https://webdacity.co.za">Webdacity</a> </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
