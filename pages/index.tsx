import Image from 'next/image';
import { useEffect, useState } from "react";

// Components
import Page from "../components/UI/Page/Page";
import Hero from "../components/UI/Page/Hero/Hero";
import AreasOfWork from "../components/Content/AreasOfWork/AreasOfWork"
import BHRIcons from "../components/Content/BHRIcons/BHRIcons"

// MUI
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

// Styles
import styles from '../styles/pages/home.module.scss';

export default function Home() {

  // Content Block Heights
  const [blockHeight, setBlockHeight] = useState(undefined);

  useEffect(() => {
    let height = 0;
    const element = document.getElementById('servicesBlock') as HTMLElement;
    if (element) {
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
        title="HVAC dolor sit amet, consectetur adipiscing elit."
        subtitle="maintenance"
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
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque felis convallis.</p>
                  <a href="/solutions" className="button">Discover</a>
                </div>
                <BHRIcons />
              </div>
            </Grid>
            <Grid item sm={12} md={6} >
              <div className={`${styles.contentBlock} ${styles.services}`} id="#servicesBlock">
                <div className={styles.text}>
                  <h2>Services</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque felis convallis.</p>
                  <a href="/services" className="button button--hover-white">Discover</a>
                </div>
                <div className={styles.overlay}></div>
                <div className={styles.image}>
                  <div className="next-image-container">
                    <Image
                      src="/images/pages/home/services.jpg"
                      alt="Picture of BHR HVC Maintenance"
                      layout="fill"
                      className="next-image"
                    />
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </section>

        <section className={styles.choose}>
          <div className={styles.intro}>
            <h1>Why Choose Us</h1>
            <p>BHR Solutions is located in Cape Town, South Africa and is a provider of high quality mechanical services and installations to the residential, commercial and industrial markets of Africa.</p>
            <p>We administrate all projects from design through to completion, <span>following on with
          maintenance programs</span>.</p>
            <p>Above all we are a trusted advocate to our clients in the HVAC and Mechanical Industry.</p>
          </div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4} >
              <div className={styles.value}>
                <h5>Sustainabilty</h5>
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
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque felis convallis.</p>
                  <a href="/solutions" className="button button--hover-white">Discover</a>
                </div>
                <div className={styles.overlay}></div>
                <div className={styles.image}>
                  <div className="next-image-container">
                    <Image
                      src="/images/pages/home/sanitisation.jpg"
                      alt="Picture of BHR HVC Maintenance"
                      layout="fill"
                      className="next-image"
                    />
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item md={6}
              style={{ minHeight: blockHeight }}
            >
              <div className={`${styles.contentBlock} ${styles.team}`}>
                <div className={styles.text}>
                  <h2>Our Team</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque felis convallis.</p>
                  <a href="/services" className="button button--hover-white">Discover</a>
                </div>
                <div className={styles.image}>
                  <div className="next-image-container">
                    <Image
                      src="/images/pages/home/team.jpg"
                      alt="Picture of BHR HVC Maintenance"
                      layout="fill"
                      className="next-image"
                    />
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>

          <Grid container className={styles.projects}>
            <Grid item md={6}
              style={{ minHeight: blockHeight }}
            >
              <div className={styles.contentBlock}>
                <div className={styles.text}>
                  <h2>Projects</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque felis convallis.</p>
                  <a href="/solutions" className="button button--dark">Discover</a>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} className={styles.contentBlock}
              style={{ minHeight: blockHeight }}
            >
              <div className={styles.image}>
                <div className="next-image-container">
                  <Image
                    src="/images/pages/home/projects.jpg"
                    alt="Picture of BHR HVC Maintenance"
                    layout="fill"
                    className="next-image"
                  />
                </div>
              </div>
            </Grid>
          </Grid>
        </section>
      </Container>

    </Page >
  )
}
