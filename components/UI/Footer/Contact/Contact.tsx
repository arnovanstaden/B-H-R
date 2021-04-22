// MUI
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container"

// Styles
import styles from "./contact.module.scss";

interface IProps {
    contact?: boolean
}

const Contact = ({ contact }: IProps) => {
    if (contact === false) {
        return null
    }

    return (
        <Container>
            <Grid container spacing={2} className={styles.contact}>
                <Grid item sm={6} className={styles.text}>
                    <h1>Contact us and discover how we can make a difference to your business.</h1>
                    <a className="button" href="/contact">Contact Us</a>
                </Grid>
                <Grid item sm={6} className={styles.logo}>
                    <img src="/images/logos/footer-logo.png" alt="" />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Contact
