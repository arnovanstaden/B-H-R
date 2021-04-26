// Components
import Page from "../components/UI/Page/Page";
import Hero from "../components/UI/Page/Hero/Hero";
import NextImage from "../components/NextImage/NextImage"

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
                title: "Our Team| BHR Solutions",
                description: "FIX THIS",
                canonical: "/team"
            }}
        >

            <Hero
                title="Our Team"
            />

            <Container >
                <section className={styles.intro}>
                    <div className="heading">
                        <h1>Industries</h1>
                        <h2>Our solutions across the building, hospitality and retail industries helps to save energy, reduce costs, improve operational longevity and increase our client’s operator and customer comfort.</h2>
                    </div>
                </section>

            </Container>

        </Page>
    )
}

export default team
