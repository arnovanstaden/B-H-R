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
                    <NextImage src="/images/pages/team/training1.jpg" alt="BHR Training and Development" />

                    <small>
                        Image caption and description. Phasellus sagittis vel mauris nec pretium. n elementum nibh scelerisque sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </small>

                    <Grid container className={styles.grid}>
                        <Grid item md={6}>
                            <div className={styles.initiatives}>
                                <h3>Training and Development Initiatives</h3>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                                </ul>
                            </div>
                        </Grid>
                        <Grid item md={6}>
                            <div className={styles.image}>
                                <NextImage src="/images/pages/team/training2.jpg" alt="BHR Training and Development" />
                            </div>
                        </Grid>
                    </Grid>
                </section>

                <section className={styles.inclusion} id="inclusion">
                    <h1>Inclusion and Diversity</h1>
                    <p>
                        At BHR we create an environment where people of all backgrounds can come
                        together and achieve success.
                       
                    </p>

                    <h5>
                        BHR SOLUTIONS is a Level two B-BBEE contributor
                    </h5>

                    <Grid container spacing={5}>
                        <Grid item md={6}>
                            <div className={styles.contentBlock}>
                                <div className={styles.image}>
                                    <NextImage src="/images/pages/team/inclusion1.jpg" alt="BHR Inclusion and Diversity" />
                                    <div className={styles.member}>
                                        <h6>Dieu-Merci</h6>
                                        <p>Electrician</p>
                                    </div>
                                </div>
                                <div className={styles.text}>
                                    <p>
                                    “Donec quis ante ut justo pharetra rhoncus sed id velit. Etiam vitae erat luctus, scelerisque leo eu, faucibus ligula.”
                                    </p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item md={6}>
                            <div className={styles.contentBlock}>
                                <div className={styles.image}>
                                    <NextImage src="/images/pages/team/inclusion2.jpg" alt="BHR Inclusion and Diversity" />
                                    <div className={styles.member}>
                                        <h6>Raymond</h6>
                                        <p>Project Manager</p>
                                    </div>
                                </div>
                                <div className={styles.text}>
                                    <p>
                                    “Donec quis ante ut justo pharetra rhoncus sed id velit. Etiam vitae erat luctus, scelerisque leo eu, faucibus ligula.”
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
                                <p>“Etiam vitae erat luctus,
                                scelerisque leo eu, faucibus
                                ligula. Donec quis ante ut
                                justo pharetra rhoncus
                                sed id velit.”</p>
                                <h6>Hennie</h6>
                                <small>Director</small>
                            </div>
                        </Grid>
                        <Grid item md={6}>
                            <div className={styles.image}>
                            <NextImage src="/images/pages/team/hennie.jpg" alt="BHR Team Expertise" />
                            </div>
                        </Grid>
                    </Grid>

                    <Grid container className={styles.textGrid} spacing={5}>
                        <Grid item md={4}>
                            <div className={styles.text}>
                                <h5>Management</h5>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                </ul>
                            </div>
                        </Grid>
                        <Grid item md={4}>
                            <div className={styles.text}>
                                <h5>Administrative</h5>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                </ul>
                            </div>
                        </Grid>
                        <Grid item md={4}>
                            <div className={styles.text}>
                                <h5>Operational</h5>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                </ul>
                            </div>
                        </Grid>
                    </Grid>
                </section>

                <section className={styles.structure} id="structure">
                    <h1>Operational Structure</h1>

                    <Grid container className={styles.grid}>
                        <Grid item md={6}>
                            <a href="">
                                Download PDF
                            </a>
                        </Grid>
                        <Grid item md={6}>
                            <div className={styles.image}>
                                <img src="/images/pages/team/structure.svg" alt=""/>
                            </div>
                        </Grid>
                    </Grid>
                </section>

            </Container>




        </Page>
    )
}

export default team
