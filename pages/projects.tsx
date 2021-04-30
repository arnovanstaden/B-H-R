import Link from "next/link";

// Data
import projectData from "../assets/data/projects.json";

// Components
import Page from "../components/UI/Page/Page";
import TextIntro from "../components/UI/Page/TextIntro/TextIntro";
import NextImage from "../components/NextImage/NextImage"

// MUI
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

// Styles
import styles from '../styles/pages/projects.module.scss';

const projects = ({ allProjects }) => {
    // Subcomponents
    const Project = (project) => {
        const dashName = project.name.replace(/ /g, "-").toLowerCase();
        const linkPath = `/projects/${dashName}`
        const imagePath = `/images/pages/projects/${dashName}`

        return (
            <Grid item sm={6} lg={4}>
                <div className={styles.project}>
                    <div className={styles.image}>
                        <NextImage
                            src={`${imagePath}/thumbnail.jpg`}
                            alt="BHR Project"
                            intrinsic
                            width={600}
                        />
                    </div>
                    <div className={styles.overlay}></div>
                    <div className={styles.text}>
                        <h3>{project.name}</h3>
                        <small>{project.focus}</small>
                    </div>
                </div>
            </Grid>
        )
    }

    return (
        <Page
            className={styles.projects}
            head={{
                title: "Projects | BHR Solutions",
                description: "FIX THIS",
                canonical: "/projects"
            }}
        >

            <TextIntro title="Projects" />

            <Container>

                <section className={styles.intro}>
                    <div className="heading">
                        <h1>We deliver on what we say. <br />
                            <span>Time is money, we save your business both.</span>
                        </h1>
                        <h2>BHR Solutions provides sales and support of all maintenance, construction and infrastructure requirements to the building, hospitality and retail industries. Every project is approached with a delivery mindset.</h2>
                    </div>
                </section>


                <section className={styles.grid}>
                    <h1>Featured Projects</h1>

                    {/* <Grid container spacing={5}>
                        {allProjects.map((project, index) => (
                            <Project key={index} {...project} />
                        ))}
                    </Grid> */}

                    <Grid container spacing={5}>
                        <Grid item lg={4} md={2} xs={12}>
                            <div className={styles.textProject}>
                                <h5>HILTON CURIO NIGERIA</h5>
                                <p>Convention Centre</p>
                                <p>Phase 3 and 4</p>
                                <p>HVAC maintenance</p>
                            </div>
                        </Grid>
                        <Grid item lg={4} md={2} xs={12}>
                            <div className={styles.textProject}>
                                <h5>QUITS AVIATION NIGERIA</h5>
                                <p>New installation</p>
                                <p>HVAC maintenance</p>
                            </div>
                        </Grid>
                        <Grid item lg={4} md={2} xs={12}>
                            <div className={styles.textProject}>
                                <h5>RADISSON LAGOS (CHELSEA)</h5>
                                <p>New project</p>
                            </div>
                        </Grid>
                        <Grid item lg={4} md={2} xs={12}>
                            <div className={styles.textProject}>
                                <h5>FOUR POINTS SHERATON</h5>
                                <p>Renovation</p>
                            </div>
                        </Grid>
                        <Grid item lg={4} md={2} xs={12}>
                            <div className={styles.textProject}>
                                <h5>RADISSON GABON</h5>
                                <p>Project and AMC</p>
                            </div>
                        </Grid>
                        <Grid item lg={4} md={2} xs={12}>
                            <div className={styles.textProject}>
                                <h5>PARK INN GABON</h5>
                                <p>Project and AMC</p>
                            </div>
                        </Grid>
                        <Grid item lg={4} md={2} xs={12}>
                            <div className={styles.textProject}>
                                <h5>HOTEL RE-NDAMA (Erstwhile LE MERIDIEN)</h5>
                                <p>Project and AMC</p>
                            </div>
                        </Grid>
                    </Grid>

                    <div className={styles.logos}>
                        <img src="/images/pages/projects/logos/1.jpg" alt="Client Logo" />
                        <img src="/images/pages/projects/logos/2.jpg" alt="Client Logo" />
                        <img src="/images/pages/projects/logos/3.jpg" alt="Client Logo" />
                        <img src="/images/pages/projects/logos/4.jpg" alt="Client Logo" />
                        <img src="/images/pages/projects/logos/5.jpg" alt="Client Logo" />
                        <img src="/images/pages/projects/logos/6.jpg" alt="Client Logo" />
                    </div>
                </section>



            </Container>

        </Page>
    )
}

export default projects

export async function getStaticProps({ params }) {

    // const imageCount = getFileCount(project);
    return {
        props: {
            allProjects: projectData,
        }
    }
}