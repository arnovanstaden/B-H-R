// Components
import Page from "../components/UI/Page/Page";
import Hero from "../components/UI/Page/Hero/Hero";
import NextImage from "../components/NextImage/NextImage"
import PageNav from "../components/UI/Page/PageNav/PageNav"

// MUI
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

// Styles
import styles from '../styles/pages/services.module.scss';

const services = () => {
    return (
        <Page
            className={styles.services}
            head={{
                title: "Services | BHR Solutions",
                description: "FIX THIS",
                canonical: "/services"
            }}
        >

            <Hero
                title="Services"
                alt="BHR Services Hero"
                src="/images/pages/services/hero.webp"
            />

            <PageNav
                links={{
                    design: "Design",
                    mechanical: "Mechanical",
                    electrical: "Electrical",
                    fire: "Fire",
                    plumbing: "Plumbing",
                    sanitisation: "Sanitisation"
                }}
                page="services"
            />



            <Container >
                <section className={styles.intro}>
                    <div className="heading">
                        <h1>Integrated service capabilities. <br />
                            <span>Our service – part of your business.</span>
                        </h1>
                        <h2>BHR Solutions provides sales and support of all maintenance, construction and infrastructure requirements to the building, hospitality and retail industries. Every project is approached with a delivery mindset.</h2>
                    </div>
                </section>

                <section className={styles.grid}>
                    <h1>Areas of Work - Services</h1>

                    <div className={styles.row} id="design">
                        <Grid container spacing={5}>
                            <Grid item xs={12} md={6}>
                                <div className={styles.image}>
                                    <NextImage
                                        src="/images/pages/services/design.jpg"
                                        alt="BHR Service - Design"
                                        intrinsic
                                        width={600}
                                    />
                                </div>
                            </Grid>
                            <Grid item md={6}>
                                <div className={styles.text}>
                                    <img src="/images/icons/services/design.svg" alt="" />
                                    <h2>Design</h2>
                                    <p>We are an approach driven company breaking down large projects to suit and adapt to the client’s needs.</p>
                                    <br />
                                    <ul>
                                        <li>
                                            <i className="icon-bullet"></i>
                                            Architectural
                                        </li>
                                        <li>
                                            <i className="icon-bullet"></i>
                                            Interior
                                        </li>
                                        <li>
                                            <i className="icon-bullet"></i>
                                            Exterior
                                        </li>
                                        <li>
                                            <i className="icon-bullet"></i>
                                            MEFP
                                        </li>
                                    </ul>
                                </div>
                            </Grid>
                        </Grid>
                    </div>

                    <div className={styles.row} id="mechanical">
                        <Grid container spacing={5} >
                            <Grid item md={6}>
                                <div className={styles.text}>
                                    <img src="/images/icons/services/mechanical.svg" alt="" />
                                    <h2>Mechanical</h2>
                                    <ul>
                                        <li>
                                            <i className="icon-bullet"></i>
                                            Commercial Air-Conditioning (CAC). Chillers (Aermec, Trane, York, Carrier) Pumps, Cooling Towers, AHU’s, FCU’s, Piping &amp; valves &amp; water flow balancing, plate heat exchanger (Heat recovery system).
                                            </li>
                                        <li>
                                            <i className="icon-bullet"></i>
                                            VRF (DVM) systems. Daikin, LG, Samsung, Alliance. Diagnostics (LATS program), FCU, Outdoor units, BMS (Building management systems)
                                            </li>
                                        <li>
                                            <i className="icon-bullet"></i>
                                            Residential Air-Conditioning – Midwall, Cassette and Ducted Hide Away Units
                                            </li>
                                        <li>
                                            <i className="icon-bullet"></i>
                                            Duct cleaning &amp; air balancing.
                                            </li>
                                        <li>
                                            <i className="icon-bullet"></i>
                                            Extract systems
                                            </li>
                                        <li>
                                            <i className="icon-bullet"></i>
                                            Fresh air systems
                                            </li>
                                        <li>
                                            <i className="icon-bullet"></i>
                                            Fire &amp; life safety- extract systems, make-up air systems, motorized &amp; fusible link dampers.
                                            </li>
                                        <li>
                                            <i className="icon-bullet"></i>
                                            VSD (Variable speed drives)
                                            </li>
                                        <li>
                                            <i className="icon-bullet"></i>
                                            Air curtains.
                                            </li>

                                    </ul>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <div className={styles.image}>
                                    <NextImage
                                        src="/images/pages/services/mechanical.jpg"
                                        alt="BHR Service - Mechanical"
                                        intrinsic
                                        width={600}
                                    />
                                </div>
                            </Grid>
                        </Grid>
                    </div>

                    <div className={styles.row} id="electrical">

                        <Grid container spacing={5}>
                            <Grid item xs={12} md={6}>
                                <div className={styles.image}>
                                    <NextImage
                                        src="/images/pages/services/electrical.jpg"
                                        alt="BHR Service - Electrical"
                                        intrinsic
                                        width={600}
                                    />
                                </div>
                            </Grid>
                            <Grid item md={6}>
                                <div className={styles.text}>
                                    <img src="/images/icons/services/electrical.svg" alt="" />
                                    <h2>Electrical</h2>
                                    <ul>
                                        <li>
                                            <i className="icon-bullet"></i>
                                            Risk assessment - Thermographic, energy management analyser.
                                        </li>
                                        <li>
                                            <i className="icon-bullet"></i>
                                            Load analyse &amp; testing
                                        </li>
                                        <li>
                                            <i className="icon-bullet"></i>
                                            Phase balancing
                                        </li>
                                        <li>
                                            <i className="icon-bullet"></i>
                                            Earthing analyse &amp; testing (lightning protection)
                                        </li>
                                        <li>
                                            <i className="icon-bullet"></i>
                                            Switch room &amp; switchgear. monitor, testing, programming.
                                        </li>
                                        <li>
                                            <i className="icon-bullet"></i>
                                            Transformers
                                        </li>
                                    </ul>
                                </div>
                            </Grid>
                        </Grid>
                    </div>

                    <div className={styles.row} id="fire">
                        <Grid container spacing={5}>
                            <Grid item md={6}>
                                <div className={styles.text}>
                                    <img src="/images/icons/services/fire-safety.svg" alt="" />
                                    <h2>Fire and Safety</h2>
                                    <ul>
                                        <li>
                                            <i className="icon-bullet"></i>
                                            Smoke sensor systems
                                        </li>
                                        <li>
                                            <i className="icon-bullet"></i>
                                            Sprinkler systems
                                        </li>
                                        <li>
                                            <i className="icon-bullet"></i>
                                            Carbon monoxide sensor systems
                                        </li>
                                    </ul>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <div className={styles.image}>
                                    <NextImage
                                        src="/images/pages/services/fire-safety.jpg"
                                        alt="BHR Service - Fire and Safety"
                                        intrinsic
                                        width={600}
                                    />
                                </div>
                            </Grid>
                        </Grid>
                    </div>

                    <div className={styles.row} id="plumbing">
                        <Grid container spacing={5} >
                            <Grid item xs={12} md={6}>
                                <div className={styles.image}>
                                    <NextImage
                                        src="/images/pages/services/plumbing.jpg"
                                        alt="BHR Service - Plumbing"
                                        intrinsic
                                        width={600}
                                    />
                                </div>
                            </Grid>
                            <Grid item md={6}>
                                <div className={styles.text}>
                                    <img src="/images/icons/services/plumbing.svg" alt="" />
                                    <h2>Plumbing</h2>
                                    <ul>
                                        <li>
                                            <i className="icon-bullet"></i>
                                            Hot water reservoirs - Insulation, anodes, valves, piping
                                        </li>
                                        <li>
                                            <i className="icon-bullet"></i>
                                            Hot water articulation pump systems
                                        </li>
                                        <li>
                                            <i className="icon-bullet"></i>
                                            Plate heat exchanger
                                        </li>
                                        <li>
                                            <i className="icon-bullet"></i>
                                            Heat pump systems
                                        </li>
                                        <li>
                                            <i className="icon-bullet"></i>
                                            Fresh water reservoirs
                                        </li>
                                        <li>
                                            <i className="icon-bullet"></i>
                                            Fresh water pump articulation systems
                                        </li>
                                        <li>
                                            <i className="icon-bullet"></i>
                                            Water purification &amp; treatment plants
                                        </li>
                                        <li>
                                            <i className="icon-bullet"></i>
                                            Sewerage treatment plant pumps
                                        </li>
                                        <li>
                                            <i className="icon-bullet"></i>
                                            Drainage inspections
                                        </li>
                                    </ul>
                                </div>
                            </Grid>
                        </Grid>
                    </div>

                    <div className={styles.row} id="sanitisation">
                        <Grid container spacing={5} >
                            <Grid item md={6}>
                                <div className={styles.text}>
                                    <img src="/images/icons/services/sanitisation.svg" alt="" />
                                    <h2>Sanitisation</h2>
                                    <p>We use EPA registered water-based disinfectants and alcohol-based sanitisers and disinfects.</p>
                                    <p>Surface sanitation solutions for all industries and full HVAC networks to help meet compliance requirements</p>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <div className={styles.image}>
                                    <NextImage
                                        src="/images/pages/services/sanitisation.jpg"
                                        alt="BHR Service - Sanitisation"
                                        intrinsic
                                        width={600}
                                    />
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </section>

            </Container>

        </Page>
    )
}

export default services
