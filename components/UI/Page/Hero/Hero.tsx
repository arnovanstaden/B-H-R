import { Parallax } from "react-parallax";

// MUI
import Container from "@material-ui/core/Container";

// Styles
import styles from "./hero.module.scss";

interface IProps {
    title: string;
    subtitle?: string;
    src: string;
    alt: string;
}

const Hero = ({ title, subtitle, src, alt }: IProps) => {
    return (
        <Parallax strength={250} bgImage={src} bgImageAlt={alt}>
            <section className={styles.hero}>
                <div className={styles.overlay}>
                    <div className={styles.gradient}></div>
                </div>
                <div className={styles.text}>
                    <Container>
                        {subtitle ? <h4>{subtitle}</h4> : null}
                        <h1>{title}</h1>
                    </Container>
                </div>
            </section>
        </Parallax>
    )
}

export default Hero
