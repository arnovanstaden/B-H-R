import styles from "./bhr-icons.module.scss"

const BHRIcons = () => {
    return (
        <div className={styles.icons}>
            <div>
                <img src="/images/icons/building.svg" alt="" />
                <h6>Building</h6>
            </div>
            <div>
                <img src="/images/icons/hospitality.svg" alt="" />
                <h6>Hospitality</h6>
            </div>
            <div>
                <img src="/images/icons/retail.svg" alt="" />
                <h6>Retail</h6>
            </div>
        </div>
    )
}

export default BHRIcons
