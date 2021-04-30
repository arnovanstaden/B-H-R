// Components
import Page from "../components/UI/Page/Page";
import Hero from "../components/UI/Page/Hero/Hero";
import NextImage from "../components/NextImage/NextImage"
import PageNav from "../components/UI/Page/PageNav/PageNav"

// MUI
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";


// Styles
import styles from '../styles/pages/team.module.scss';

const team = () => {
    return (
        <Page
            className={styles.team}
            head={{
                title: "Our Team | BHR Solutions",
                description: "FIX THIS",
                canonical: "/team"
            }}
        >

            <Hero
                title="Our Team"
                alt="BHR Team Hero"
                src="/images/pages/team/hero.webp"
            />

            <PageNav
                links={{
                    training: "Training and Development",
                    inclusion: "Inclusion and Diversity",
                    expertise: "BHR Team Expertise",
                    structure: "Operational Structure",
                }}
                page="team"
            />


            <Container >
                <section className={styles.intro}>
                    <div className="heading">
                        <h1>A people-oriented approach, based on trust,                     openness and collaboration. <br />
                            <span> Including everyone for the best solution.</span>
                        </h1>
                    </div>
                </section>

                <section className={styles.training} id="training">
                    <h1>Training and Development</h1>
                    <p>Through training and development we equip our personnel to make the right decisions for the long-term success of our clients and our business.</p>
                    <NextImage src="/images/pages/team/training1.jpg"
                        alt="BHR Training and Development"
                        intrinsic
                        width={1280}
                    />
                    <small>
                        Providing individuals with equal access to opportunities valuing individual goals and skills and develop our people.
                    </small>

                    <Grid container className={styles.grid}>
                        <Grid item md={6}>
                            <div className={styles.initiatives}>
                                <h3>Training and Development Initiatives</h3>
                                <p>We create an environment where people of all backgrounds can come together and achieve success. We believe in equality and inclusion, while we are recognising the value of diversity</p>
                            </div>
                        </Grid>
                        <Grid item md={6}>
                            <div className={styles.image}>
                                <NextImage src="/images/pages/team/training2.jpg"
                                    alt="BHR Training and Development"
                                    intrinsic
                                    width={600}
                                />
                            </div>
                        </Grid>
                    </Grid>
                </section>

                <section className={styles.inclusion} id="inclusion">
                    <h1>Inclusion and Diversity</h1>
                    <p>
                        At BHR Solutions we have a remarkably diverse environment and a very inclusive culture, and those characteristics got us through the tough times. Diversity generated a better strategy, better risk management and better outcomes. We all are included, and this makes us a winning team for everyone.
                    </p>

                    <h5>
                        BHR SOLUTIONS is a Level two B-BBEE contributor.
                    </h5>

                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={6} >
                            <div className={styles.contentBlock}>
                                <div className={styles.image}>
                                    <NextImage src="/images/pages/team/inclusion1.jpg"
                                        alt="BHR Inclusion and Diversity"
                                        intrinsic
                                        width={600}
                                    />
                                </div>
                                <div className={styles.text}>
                                    <p>
                                        Diversity is the mix. Inclusion is making the mix work. <span>~ Andres Tapia</span>
                                    </p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} >
                            <div className={styles.contentBlock}>
                                <div className={styles.image}>
                                    <NextImage src="/images/pages/team/inclusion2.jpg"
                                        alt="BHR Inclusion and Diversity"
                                        intrinsic
                                        width={600}
                                    />
                                </div>
                                <div className={styles.text}>
                                    <p>
                                        Strength lies in differences, not in similarities. <span>~ Stephen R. Covey</span>
                                    </p>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </section>

                <section className={styles.expertise} id="expertise">
                    <h1>BHR Team Expertise</h1>

                    <Grid container className={styles.quoteGrid} spacing={5}>
                        <Grid item md={6}>
                            <div className={styles.quote}>
                                <p>“Good solutions make the company look smart, Great solutions make the client feel smart.”</p>
                                <h6>Hennie</h6>
                                <small>Director</small>
                            </div>
                        </Grid>
                        <Grid item md={6}>
                            <div className={styles.image}>
                                <NextImage src="/images/pages/team/hennie.jpg"
                                    alt="BHR Team Expertise"
                                    intrinsic
                                    width={600}
                                />
                            </div>
                        </Grid>
                    </Grid>


                </section>

                <section className={styles.structure} id="structure">
                    <h1>Operational Structure</h1>

                    <Grid container className={styles.grid}>
                        <Grid item md={6}>
                            <a href="/documents/BHR_ Profile.pdf" download target="blank">
                                Download PDF
                            </a>
                        </Grid>
                        <Grid item md={6}>
                            <div className={styles.image}>
                                <img src="/images/pages/team/structure.svg" alt="" />
                            </div>
                        </Grid>
                    </Grid>
                </section>

            </Container>




        </Page>
    )
}

export default team
