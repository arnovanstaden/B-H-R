import Image from 'next/image'

// Components
import Page from "../components/UI/Page/Page";
import TextIntro from "../components/UI/Page/TextIntro/TextIntro";
import PageNav from "../components/UI/Page/PageNav/PageNav"
import NextImage from "../components/NextImage/NextImage"

// MUI
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

// Styles
import styles from '../styles/pages/about.module.scss';

const about = () => {
    return (
        <Page
            className={styles.about}
            head={{
                title: "Our Company | BHR Solutions",
                description: "FIX THIS",
                canonical: "/about"
            }}
        >
            <TextIntro title="Our Company" />

            <PageNav>
                <a href="/about#about" className={styles.active}>About us</a>
                <a href="/about#mission">Our Mission</a>
                <a href="/about#values">What Matters To us</a>
            </PageNav>

            <Container>

                <section className={styles.intro}>
                    <Grid container className={styles.text}>
                        <Grid item xs={12} sm={5}>
                            <h1>About Us</h1>
                        </Grid>
                        <Grid item xs={12} sm={7}>
                            <p>
                                BHR Solutions is a B-BBEE compliant project,
                                construction and MEFP (Mechanical, Electrical,
                                Fire and Plumbing) management company. We
                                operate with transparency, focus on building
                                trustworthy partnerships and act with integrity
                                and respect.
                                </p>
                            <p>
                                Our company’s owners have day-to-day
                                involvement in operations ensuring our staff
                                deliver satisfactory customer service.
                                </p>
                        </Grid>
                    </Grid>

                    <Grid container className={styles.expertise} spacing={5}>
                        <Grid item xs={12} sm={6}>
                            <NextImage
                                src="/images/pages/about/about1.jpg"
                                alt="BHR Aircon Cleaning"
                            />
                            <div className={styles.text}>
                                <h2>International experience and local knowledge</h2>
                                <p>
                                    With industry experience of over 35 years
                                    to bring project management and MEFP
                                    Management compliance of international
                                    standards to Africa, BHR Solutions has
                                    evolved over the years, adapting to changing
                                    conditions and industry demands.
                                </p>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <NextImage
                                src="/images/pages/about/about2.jpg"
                                alt="BHR Welding"
                            />
                            <div className={styles.text}>
                                <h2>Bringing technology and innovation to Africa</h2>
                                <p>
                                    Staffed with personnel of international
                                    experience and use of the local knowledge
                                    we have successfully delivered on projects
                                    within the building, hospitality and retail
                                    industries in Africa.
                                </p>
                            </div>
                        </Grid>
                    </Grid>

                    <div className={styles.dealers}>
                        <h3>We are an authorised specialised dealer of</h3>
                        <div className={styles.logos}>
                            <img src="/images/pages/about/daikin.svg" alt="daikin logo" />
                            <img src="/images/pages/about/samsung.svg" alt="samsung logo" />
                            <img src="/images/pages/about/lg.svg" alt="lg logo" />
                            {/* FIX THIS */}
                        </div>
                    </div>
                </section>

                <section id="mission" className={styles.mission}>
                    <Grid container className={styles.grid}>
                        <Grid item xs={12} sm={6} className={styles.text}>
                            <h1>Our Mission</h1>
                            <p>While risk management and budget control
                            remain a core mission, centre to BHR
                            Solutions is long-term partnerships and
                            adding value to our client’s strategy, focus
                            on combining technology, sustainability and innovative solutions.
                                </p>
                        </Grid>
                        <Grid item xs={12} sm={6} className={styles.image}>
                            <img src="/images/icons/logomark-light-blue.svg" alt="" />
                        </Grid>
                    </Grid>
                </section>

                <section id="values" className={styles.values}>
                    <h1>What Matters To Us</h1>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={6}>
                            <div className={styles.item}>
                                <h2>People</h2>
                                <p>
                                    Donec fringilla porttitor velit, vitae
                                    facilisis neque rutrum at. Etiam
                                    ligula justo, elementum nec dolor in,
                                    pharetra sagittis tortor.
                                </p>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className={styles.item}>
                                <h2>Partnership</h2>
                                <p>
                                    Donec fringilla porttitor velit, vitae
                                    facilisis neque rutrum at. Etiam
                                    ligula justo, elementum nec dolor in,
                                    pharetra sagittis tortor.
                                </p>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className={styles.item}>
                                <h2>Technology</h2>
                                <p>
                                    Donec fringilla porttitor velit, vitae
                                    facilisis neque rutrum at. Etiam
                                    ligula justo, elementum nec dolor in,
                                    pharetra sagittis tortor.
                                </p>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className={styles.item}>
                                <h2>Delivery</h2>
                                <p>
                                    Donec fringilla porttitor velit, vitae
                                    facilisis neque rutrum at. Etiam
                                    ligula justo, elementum nec dolor in,
                                    pharetra sagittis tortor.
                                </p>
                            </div>
                        </Grid>
                    </Grid>
                </section>

            </Container>
        </Page>
    )
}

export default about
