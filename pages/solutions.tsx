// Components
import Page from "../components/UI/Page/Page";
import Hero from "../components/UI/Page/Hero/Hero";
import AreasOfWork from "../components/Content/AreasOfWork/AreasOfWork"
import BHRIcons from "../components/Content/BHRIcons/BHRIcons"
import NextImage from "../components/NextImage/NextImage"

// MUI
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

// Styles
import styles from '../styles/pages/solutions.module.scss';

const solutions = () => {
    return (
        <Page
            className={styles.solutions}
            head={{
                title: "Industry Solutions | BHR Solutions",
                description: "FIX THIS",
                canonical: "/solutions"
            }}
        >

            <Hero
                title="Industry Solutions"
            />

            <Container >
                <section className={styles.intro}>
                    <div className="heading">
                        <h1>Industries</h1>
                        <h2>Our solutions across the building, hospitality and retail industries helps to save energy, reduce costs, improve operational longevity and increase our client’s operator and customer comfort.</h2>
                    </div>
                    <BHRIcons />
                </section>

            </Container>

            <section className={styles.approach}>
                <Container>

                    <Grid container>
                        <Grid item sm={6} className={styles.text}>
                            <h1>Our Approach</h1>
                            <p>Our products and services live in public
                            locations, where people engage with it
                            every day.
                            </p>
                            <p>
                                BHR understands that our clients, rely on
                                various software, hardware and operational
                                systems to answer challenges in daily
                                operations. We provide these answers by
                                implementing a best solution practise on
                                all our projects.
                            </p>
                        </Grid>
                        <Grid item sm={6} className={styles.image}>
                            <img src="/images/pages/solutions/approach-diagram.svg" alt="" />
                        </Grid>
                    </Grid>
                </Container>
            </section>

            <Container>

                <section className={styles.structure}>
                    <div className="heading">
                        <h1>Operations Structure</h1>
                        <h2>BHR’s operations is built upon a broad portfolio of focus areas for a complete solution.</h2>
                    </div>

                    <Grid container spacing={5}>
                        <Grid item className={styles.block} sm={6}>
                            <NextImage
                                src="/images/pages/solutions/solutions4.jpg"
                                alt="AMC (Annual Maintenance Contract)"
                            />
                            <div className={styles.text}>
                                <h3>AMC (Annual Maintenance Contract)</h3>
                                <p><span>MEFP
                                (Mechanical, Electrical, Fire, Plumbing)</span>
                                Service
                                Maintenance
                                Diagnostics
                                Repair
                                </p>
                            </div>
                        </Grid>
                        <Grid item className={styles.block} sm={6}>
                            <NextImage
                                src="/images/pages/solutions/solutions4.jpg"
                                alt="AMC (Annual Maintenance Contract)"
                            />
                            <div className={styles.text}>
                                <h3>Trouble Shooting</h3>
                                <p><span>MEFP
                                (Mechanical, Electrical, Fire, Plumbing)</span>
                                Service
                                Maintenance
                                Diagnostics
                                Repair
                                </p>
                            </div>
                        </Grid>
                        <Grid item className={styles.block} sm={6}>
                            <NextImage
                                src="/images/pages/solutions/solutions4.jpg"
                                alt="AMC (Annual Maintenance Contract)"
                            />
                            <div className={styles.text}>
                                <h3>Project Execution</h3>
                                <p><span>MEFP
                                (Mechanical, Electrical, Fire, Plumbing)</span>
                                Service
                                Maintenance
                                Diagnostics
                                Repair
                                </p>
                            </div>
                        </Grid>
                        <Grid item className={styles.block} sm={6}>
                            <NextImage
                                src="/images/pages/solutions/solutions4.jpg"
                                alt="AMC (Annual Maintenance Contract)"
                            />
                            <div className={styles.text}>
                                <h3>Santisation (Life and Safety)</h3>
                                <p><span>MEFP
                                (Mechanical, Electrical, Fire, Plumbing)</span>
                                Service
                                Maintenance
                                Diagnostics
                                Repair
                                </p>
                            </div>
                        </Grid>
                    </Grid>
                </section>


                <section className={styles.areas}>
                    <AreasOfWork />
                </section>

            </Container>

        </Page >
    )
}

export default solutions
