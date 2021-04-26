import Link from "next/link";

// Data
import projects from "../../assets/data/projects.json";

// Components
import Page from "../../components/UI/Page/Page";
import TextIntro from "../../components/UI/Page/TextIntro/TextIntro";
import NextImage from "../../components/NextImage/NextImage"

// MUI
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

// Styles
import styles from '../../styles/pages/projects/[name].module.scss';

const Project = ({ project }) => {

    const imagePath = `/images/pages/projects/${project.name.replace(/ /g, "-").toLowerCase()}`
    return (
        <Page
            className={styles.project}
            head={{
                title: "Projects | BHR Solutions",
                description: "FIX THIS",
                canonical: "/projects"
            }}
        >
            <TextIntro title="Projects" />

            <Container>
                <section className={styles.intro}>
                    <div className={styles.heading}>
                        <h1>Featured Project</h1>
                        <Link href="/projects">
                            <a>Back to Projects</a>
                        </Link>
                    </div>
                    <h2>{project.name}</h2>
                    <h3>{project.focus}</h3>
                    <div className={styles.coverImage}>
                        <NextImage src={`${imagePath}/cover.jpg`} alt={`${project.name} Cover Image`} />
                    </div>
                </section>

                <section className={styles.details}>
                    <h4>Project Detail</h4>
                    <p>{project.description}</p>

                    <Grid container spacing={2}>
                        <Grid item md={6}>
                            <h5>Client</h5>
                            <p>{project.client}</p>
                        </Grid>
                        <Grid item md={6}>
                            <h5>Service Provider</h5>
                            <p>{project.serviceProvider}</p>
                        </Grid>
                        <Grid item md={6}>
                            <h5>Areas of Work</h5>
                            <ul>
                                {project.workAreas.map((area, index) => (
                                    <li key={index}>{area}</li>
                                ))}
                            </ul>
                        </Grid>
                        <Grid item md={6}>
                            <h5>Areas of Service</h5>
                            <ul>
                                {project.serviceAreas.map((area, index) => (
                                    <li key={index}>{area}</li>
                                ))}
                            </ul>
                        </Grid>
                    </Grid>
                </section>
            </Container>

        </Page>
    )
}

export default Project

export async function getStaticProps({ params }) {
    const project = projects.find(project => project.name.replace(/ /g, "-").toLowerCase() === params.name);
    // const imageCount = getFileCount(project);
    return {
        props: {
            project,
        }
    }
}

export async function getStaticPaths() {
    const paths = projects.map(project => {
        return {
            params: {
                name: project.name.replace(/ /g, "-").toLowerCase()
            }
        }
    });
    return {
        paths,
        fallback: false
    }
}

