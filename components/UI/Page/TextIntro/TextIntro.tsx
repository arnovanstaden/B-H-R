// MUI
import Container from "@material-ui/core/Container";

// Styles
import styles from "./text-intro.module.scss";

interface IProps {
    title: string;
}

const TextIntro = ({ title }: IProps) => {
    return (
        <div className={styles.intro}>
            <Container>
                <div className={styles.content}>
                    <h1>{title}</h1>
                    <img src="/images/icons/logomark-light-blue.svg" alt="" />
                </div>
            </Container>
        </div>
    )
}

export default TextIntro
