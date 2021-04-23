// Components
import Page from "../components/UI/Page/Page";
import TextIntro from "../components/UI/Page/TextIntro/TextIntro";

// MUI
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

// Styles
import styles from '../styles/pages/contact.module.scss';

export default function Contact() {
    return (
        <Page
            className={styles.contact}
            head={{
                title: "Contact Us | BHR Solutions",
                description: "FIX THIS",
                canonical: "/contact"
            }}
            contact={false}
        >
            <TextIntro title="Contact Us" />

            <Container>
                <div className="heading">
                    <h1>What can we help with?</h1>
                    <h2>For more information on our products and services, please contact us and experience the difference we can make.</h2>
                </div>

                <section className={styles.content}>

                    <Grid container>
                        <Grid item className={styles.details} xs={12} sm={5} md={4}>
                            <h3>Get In Touch</h3>
                            <a href="tel:+27219756376">
                                <span>T</span>
                            +27 21 975 6376
                        </a>
                            <a href="info@bhrsolutions.co.za">
                                <span>E</span>
                            info@bhrsolutions.co.za
                        </a>
                        </Grid>

                        <Grid item className={styles.form} xs={12} sm={7} md={8}>
                            <h3>Enquiry Form</h3>
                            <form name="contact" id="contact-form">
                                <Grid container spacing={3}>
                                    <Grid item sm={6} xs={12}>
                                        <input type="text" name="First Name" placeholder="First Name*" required />
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <input type="text" name="Last Name" placeholder="Last Name*" required />
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <input type="email" name="Email" placeholder="Email*" required />
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <input type="text" name="Country" placeholder="Country*" required />
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <input type="tel" name="Phone" placeholder="Phone" />
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <input type="text" name="Company" placeholder="Company" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <textarea name="Message" rows={6} placeholder="Your Message"></textarea>
                                    </Grid>
                                </Grid>
                                <div className={styles.button}>
                                    <button className="button">Send</button>
                                </div>
                            </form>
                        </Grid>
                    </Grid>
                </section>
            </Container>
        </Page>
    )
}
