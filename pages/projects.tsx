import Link from "next/link"

// Components
import Page from "../components/UI/Page/Page";
import TextIntro from "../components/UI/Page/TextIntro/TextIntro";
import NextImage from "../components/NextImage/NextImage"

// MUI
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

// Styles
import styles from '../styles/pages/projects.module.scss';

const projects = () => {

    // Subcomponents
    const Project = (project) => {
        return (
            <Grid item md={6}>
                <Link href="/projects/name-of-project">
                    <a className={styles.project}>
                        <div className={styles.image}>
                            <NextImage src="/images/pages/projects/project1.jpg" alt="BHR Project" />
                        </div>
                        <div className={styles.overlay}></div>
                        <div className={styles.text}>
                            <h3>Project Name</h3>
                        </div>
                    </a>
                </Link>
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
                <section className={styles.testimonial}>
                    <h1>“BHR delivered top-class service, and provided solutions that saved our budget. Etiam vitae erat luctus, scelerisque leo eu, faucibus ligula.”</h1>
                    <p>Name Surname, Designation, Company</p>
                </section>

                <section className={styles.grid}>
                    <h1>Featured Projects</h1>

                    <Grid container spacing={5}>
                        <Project />
                        <Project />
                    </Grid>
                </section>

                <section className={styles.testimonial}>
                    <h1>“BHR delivered top-class service, and provided solutions that saved our budget. Etiam vitae erat luctus, scelerisque leo eu, faucibus ligula.”</h1>
                    <p>Name Surname, Designation, Company</p>
                </section>

            </Container>

        </Page>
    )
}

export default projects
