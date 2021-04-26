// Components
import Page from "../components/UI/Page/Page";
import Hero from "../components/UI/Page/Hero/Hero";
import AreasOfWork from "../components/Content/AreasOfWork/AreasOfWork"
import BHRIcons from "../components/Content/BHRIcons/BHRIcons"
import NextImage from "../components/NextImage/NextImage"
import PageNav from "../components/UI/Page/PageNav/PageNav"

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
                alt="BHR Solutions Hero"
                src="/images/pages/solutions/hero.webp"
            />

            <PageNav
                links={{
                    industries: "Industries",
                    approach: "Our Approach",
                    structure: "Operations Structure",
                    areas: "Areas of Work"
                }}
                page="solutions"
            />

            <Container >
                <section className={styles.intro} id="industries">
                    <div className="heading">
                        <h1>Industries</h1>
                        <h2>Our solutions across the building, hospitality and retail industries helps to save energy, reduce costs, improve operational longevity and increase our client’s operator and customer comfort.</h2>
                    </div>
                    <BHRIcons left />
                </section>

            </Container>

            <section className={styles.approach} id="approach">
                <Container>

                    <Grid container spacing={5}>
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

                <section className={styles.structure} id="structure">
                    <div className="heading">
                        <h1>Operations Structure</h1>
                        <h2>BHR’s operations is built upon a broad portfolio of focus areas for a complete solution.</h2>
                    </div>

                    <Grid container spacing={5}>
                        <Grid item className={styles.block} sm={6}>
                            <NextImage
                                src="/images/pages/solutions/solutions1.jpg"
                                alt="AMC (Annual Maintenance Contract)"
                            />
                            <div className={styles.text}>
                                <h3>AMC (Annual Maintenance Contract)</h3>
                                <ul>
                                    <li><span>MEFP
                                (Mechanical, Electrical, Fire, Plumbing)</span></li>
                                    <li>Service</li>
                                    <li>Maintenance</li>
                                    <li>Diagnostics</li>
                                    <li>Repair</li>
                                </ul>
                            </div>
                        </Grid>
                        <Grid item className={styles.block} sm={6}>
                            <NextImage
                                src="/images/pages/solutions/solutions2.jpg"
                                alt="AMC (Annual Maintenance Contract)"
                            />
                            <div className={styles.text}>
                                <h3>Trouble Shooting</h3>
                                <ul>
                                    <li>Sanitation solutions for all HVAC industries and full HVAC networks to meet and exceed compliance requirements</li>
                                </ul>
                            </div>
                        </Grid>
                        <Grid item className={styles.block} sm={6}>
                            <NextImage
                                src="/images/pages/solutions/solutions3.jpg"
                                alt="AMC (Annual Maintenance Contract)"
                            />
                            <div className={styles.text}>
                                <h3>Project Execution</h3>
                                <ul>
                                    <li>Architectural incl interior and exterior design</li>
                                    <li>MEFP consulting service</li>
                                    <li>Procurement</li>
                                    <li>Supply</li>
                                    <li>Submission</li>
                                </ul>
                            </div>
                        </Grid>
                        <Grid item className={styles.block} sm={6}>
                            <NextImage
                                src="/images/pages/solutions/solutions4.jpg"
                                alt="AMC (Annual Maintenance Contract)"
                            />
                            <div className={styles.text}>
                                <h3>Santisation (Life and Safety)</h3>
                                <ul>
                                    <li>Sanitation solutions for all HVAC industries and full HVAC networks to meet and exceed compliance requirements</li>
                                </ul>
                            </div>
                        </Grid>
                    </Grid>
                </section>


                <section className={styles.areas} id="areas">
                    <AreasOfWork />
                </section>

            </Container>

        </Page >
    )
}

export default solutions
