import Image from "next/image"

// MUI
import Container from "@material-ui/core/Container";

// Styles
import styles from "./hero.module.scss";

interface IProps {
    title: string;
    subtitle?: string;
    image?: string;
}

const Hero = ({ title, subtitle, image }: IProps) => {
    return (
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
    )
}

export default Hero
