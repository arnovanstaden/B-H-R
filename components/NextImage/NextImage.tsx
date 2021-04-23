import Image from 'next/image';

import styles from "./next-image.module.scss";

interface IProps {
    src: string;
    alt: string;
}

const NextImage = ({ src, alt }: IProps) => {
    return (
        <div >
            <div className={styles.container}>
                <Image
                    src={src}
                    alt={alt}
                    layout="fill"
                    className={`Picture of ${styles.image}`}
                />
            </div>
        </div>
    )
}

export default NextImage
