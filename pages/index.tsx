import { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive'

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
import styles from '../styles/pages/home.module.scss';

export default function Home() {
  const isMobile = useMediaQuery({ query: '(max-width: 760px)' });


  // Content Block Heights
  const [blockHeight, setBlockHeight] = useState(undefined);


  useEffect(() => {
    let height = 0;
    const element = document.getElementById('servicesBlock') as HTMLElement;
    if (!isMobile && element) {
      setBlockHeight(element.offsetHeight)
    }
  }, [])

  return (
    <Page
      className={styles.home}
      head={{
        title: "BHR Solutions",
        description: "FIX THIS",
        canonical: "/"
      }}
    >
      <Hero
        title="Building. Hospitality. Retail"
        subtitle="solutions"
        alt="BHR Home Hero"
        src="/images/pages/home/hero.webp"
      />

      <Container >


        <section className={styles.meet}>
          <div className="heading">
            <h1>Meet <span>BHR Solutions</span></h1>
            <h2>We pride ourselves on being a one-stop shop that is able to meet our client’s needs. Our goal is to privide a high quality customer service. We understand that time and cost are crucial so we strive to go above and beyond our client’s expectations.</h2>
          </div>
          <Grid container spacing={5}>
            <Grid item sm={12} md={6} >
              <div className={`${styles.contentBlock} ${styles.solutions}`}>
                <div className={styles.text}>
                  <h2>Industry Solutions</h2>
                  <p>A solution based approached for the MEFP industries.</p>
                  <a href="/solutions" className="button">Discover</a>
                </div>
                <BHRIcons />
              </div>
            </Grid>
            <Grid item sm={12} md={6} >
              <div className={`${styles.contentBlock} ${styles.services}`} id="servicesBlock">
                <div className={styles.image}>
                  <NextImage
                    src="/images/pages/home/services.jpg"
                    alt="Picture of BHR HVC Service"
                    intrinsic
                    width={600}
                    background
                  />
                </div>
                <div className={styles.text}>
                  <h2>Services</h2>
                  <p>MEFP services for every Solution.</p>
                  <a href="/services" className="button button--hover-white">Discover</a>
                </div>
                <div className={styles.overlay}></div>
              </div>
            </Grid>
          </Grid>
        </section>

        <section className={styles.choose}>
          <div className={styles.intro}>
            <h1>Why Choose Us</h1>
            <p>
              BHR Solutions is located in Cape Town, South Africa and is a provider of high quality mechanical services and installations to the residential, commercial and industrial markets of Africa.</p>
            <p>We administrate all projects from design through to completion, <span>following on with
          maintenance programs</span>.</p>
            <p>Above all we are a trusted advocate to our clients in the HVAC and Mechanical Industry.</p>
          </div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4} >
              <div className={styles.value}>
                <h5>Sustainability</h5>
                <p>
                  To ensure your needs have long-term cost-effectiveness and environmental sustainability
                </p>
              </div>
            </Grid>
            <Grid item xs={12} md={4} >
              <div className={styles.value}>
                <h5>Compliance</h5>
                <p>
                  We only provide high quality workmanship and professionalism to ensure legal compliance
              </p>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={styles.value}>
                <h5>Support</h5>
                <p>
                  We offer fast, reliable service with guaranteed after sale support.
              </p>
              </div>
            </Grid>
          </Grid>

        </section>

        <section className={styles.areas}>

          <AreasOfWork />

          <Grid container spacing={5}>
            <Grid item md={6}
              style={{ minHeight: blockHeight }}
            >
              <div className={`${styles.contentBlock} ${styles.sanitisation}`}>
                <div className={styles.text}>
                  <h2>Sanitisation</h2>
                  <p>Our air care is beyond compare, the core for efficiency and safety</p>
                  <a href="/services#sanitisation" className="button button--hover-white">Discover</a>
                </div>
                <div className={styles.overlay}></div>
                <div className={styles.image}>
                  <NextImage
                    src="/images/pages/home/sanitisation.jpg"
                    alt="Picture of BHR HVC sanitisation"
                    intrinsic
                    width={600}
                    background
                  />
                </div>
              </div>
            </Grid>
            <Grid item md={6}
              style={{ minHeight: blockHeight }}
            >
              <div className={`${styles.contentBlock} ${styles.team}`}>
                <div className={styles.text}>
                  <h2>Our Team</h2>
                  <p>We invest in our people. Growing skills, delivering on our promise.</p>
                  <a href="/team" className="button button--hover-white">Discover</a>
                </div>
                <div className={styles.overlay}></div>
                <div className={styles.image}>
                  <NextImage
                    src="/images/pages/home/team.jpg"
                    alt="Picture of BHR Team"
                    intrinsic
                    width={600}
                    background
                  />
                </div>
              </div>
            </Grid>
          </Grid>

          <Grid container className={styles.projects}>
            <Grid item xs={12} md={6}
            >
              <div className={styles.contentBlock}>
                <div className={styles.text}>
                  <h2>Projects</h2>
                  <p>
                    We deliver on what we say. You will be comfortable choosing BHR Solutions.
                  </p>
                  <a href="/projects" className="button button--dark">Discover</a>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} className={styles.contentBlock}
              style={{ minHeight: blockHeight }}
            >
              <div className={styles.image}>
                <NextImage
                  src="/images/pages/home/projects.jpg"
                  alt="Picture of BHR Projects"
                  intrinsic
                  width={600}
                  background
                />
              </div>
            </Grid>
          </Grid>
        </section>
      </Container>

    </Page >
  )
}
