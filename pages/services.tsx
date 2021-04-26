// Components
import Page from "../components/UI/Page/Page";
import Hero from "../components/UI/Page/Hero/Hero";
import NextImage from "../components/NextImage/NextImage"
import PageNav from "../components/UI/Page/PageNav/PageNav"

// MUI
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

// Styles
import styles from '../styles/pages/services.module.scss';

const services = () => {
    return (
        <Page
            className={styles.services}
            head={{
                title: "Services | BHR Solutions",
                description: "FIX THIS",
                canonical: "/services"
            }}
        >

            <Hero
                title="Services"
                alt="BHR Services Hero"
                src="/images/pages/services/hero.webp"
            />

            <PageNav
                links={{
                    design: "Design",
                    mechanical: "Mechanical",
                    electrical: "Electrical",
                    fire: "Fire",
                    plumbing: "Plumbing",
                    sanitisation: "Sanitisation"
                }}
                page="services"
            />



            <Container >
                <section className={styles.intro}>
                    <div className="heading">
                        <h1>Integrated service capabilities. <br />
                            <span>Our service – part of your business.</span>
                        </h1>
                        <h2>BHR Solutions provides sales and support of all maintenance, construction and infrastructure requirements to the building, hospitality and retail industries. Every project is approached with a delivery mindset.</h2>
                    </div>
                </section>

                <section className={styles.grid}>
                    <h1>Areas of Work - Services</h1>

                    <Grid container spacing={5} className={styles.row} id="design">
                        <Grid item md={6}>
                            <div className={styles.image}>
                                <NextImage
                                    src="/images/pages/services/design.jpg"
                                    alt="BHR Service - Design"
                                />
                            </div>
                        </Grid>
                        <Grid item md={6}>
                            <div className={styles.text}>
                                <img src="/images/icons/services/design.svg" alt="" />
                                <h2>Design</h2>
                                <p>We are an approach driven company breaking down large projects to suit and adapt to the client’s needs.</p>
                            </div>
                        </Grid>
                    </Grid>

                    <Grid container spacing={5} className={styles.row} id="mechanical">
                        <Grid item md={6}>
                            <div className={styles.text}>
                                <img src="/images/icons/services/mechanical.svg" alt="" />
                                <h2>Mechanical</h2>
                                <ul>
                                    <li>AC</li>
                                    <li>Ventilation</li>
                                    <li>Refrigeration</li>
                                </ul>
                            </div>
                        </Grid>
                        <Grid item md={6}>
                            <div className={styles.image}>
                                <NextImage
                                    src="/images/pages/services/mechanical.jpg"
                                    alt="BHR Service - Mechanical"
                                />
                            </div>
                        </Grid>
                    </Grid>

                    <Grid container spacing={5} className={styles.row} id="electrical">
                        <Grid item md={6}>
                            <div className={styles.image}>
                                <NextImage
                                    src="/images/pages/services/electrical.jpg"
                                    alt="BHR Service - Electrical"
                                />
                            </div>
                        </Grid>
                        <Grid item md={6}>
                            <div className={styles.text}>
                                <img src="/images/icons/services/electrical.svg" alt="" />
                                <h2>Electrical</h2>
                                <ul>
                                    <li>Single phase</li>
                                    <li>Three phase</li>
                                    <li>Commercial</li>
                                    <li>Residential</li>
                                </ul>
                            </div>
                        </Grid>
                    </Grid>

                    <Grid container spacing={5} className={styles.row} id="fire">
                        <Grid item md={6}>
                            <div className={styles.text}>
                                <img src="/images/icons/services/fire-safety.svg" alt="" />
                                <h2>Fire and Safety</h2>
                                <p>Fire safety and protection systems</p>
                            </div>
                        </Grid>
                        <Grid item md={6}>
                            <div className={styles.image}>
                                <NextImage
                                    src="/images/pages/services/fire-safety.jpg"
                                    alt="BHR Service - Fire and Safety"
                                />
                            </div>
                        </Grid>
                    </Grid>

                    <Grid container spacing={5} className={styles.row} id="plumbing">
                        <Grid item md={6}>
                            <div className={styles.image}>
                                <NextImage
                                    src="/images/pages/services/plumbing.jpg"
                                    alt="BHR Service - Plumbing"
                                />
                            </div>
                        </Grid>
                        <Grid item md={6}>
                            <div className={styles.text}>
                                <img src="/images/icons/services/plumbing.svg" alt="" />
                                <h2>Plumbing</h2>
                                <ul>
                                    <li>Heat pumps</li>
                                    <li>Plumbing systems that conveys fluids</li>
                                </ul>
                            </div>
                        </Grid>
                    </Grid>


                    <Grid container spacing={5} className={styles.row} id="sanitisation">
                        <Grid item md={6}>
                            <div className={styles.text}>
                                <img src="/images/icons/services/sanitisation.svg" alt="" />
                                <h2>Sanitisation</h2>
                                <p>Reducing the number of bacteria to safe levels without compromising the safety of the customer.</p>
                            </div>
                        </Grid>
                        <Grid item md={6}>
                            <div className={styles.image}>
                                <NextImage
                                    src="/images/pages/services/sanitisation.jpg"
                                    alt="BHR Service - Sanitisation"
                                />
                            </div>
                        </Grid>
                    </Grid>

                </section>

            </Container>

        </Page>
    )
}

export default services
