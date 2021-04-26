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
            <Grid item md={6}>
                <Link href={linkPath}>
                    <a className={styles.project}>
                        <div className={styles.image}>
                            <NextImage src={`${imagePath}/thumbnail.jpg`} alt="BHR Project" />
                        </div>
                        <div className={styles.overlay}></div>
                        <div className={styles.text}>
                            <h3>{project.name}</h3>
                            <small>{project.focus}</small>
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
                        {allProjects.map((project, index) => (
                            <Project key={index} {...project} />
                        ))}
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

export async function getStaticProps({ params }) {

    // const imageCount = getFileCount(project);
    return {
        props: {
            allProjects: projectData,
        }
    }
}