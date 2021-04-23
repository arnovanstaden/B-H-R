import styles from "./areas.module.scss"


const AreasOfWork = () => {
    return (
        <div className={styles.areas}>
            <h1>Areas of Work</h1>
            <div className={styles.icons}>
                <div>
                    <img src="/images/icons/services/design.svg" alt="" />
                    <h6>Design</h6>
                </div>
                <div>
                    <img src="/images/icons/services/mechanical.svg" alt="" />
                    <h6>Mechanical</h6>
                </div>
                <div>
                    <img src="/images/icons/services/electrical.svg" alt="" />
                    <h6>Electrical</h6>
                </div>
                <div>
                    <img src="/images/icons/services/fire-safety.svg" alt="" />
                    <h6>Fire and Safety</h6>
                </div>
                <div>
                    <img src="/images/icons/services/plumbing.svg" alt="" />
                    <h6>Plumbing</h6>
                </div>
                <div>
                    <img src="/images/icons/services/sanitisation.svg" alt="" />
                    <h6>Sanitisation</h6>
                </div>
            </div>
            <a href="/services" className="button">Discover</a>
        </div>
    )
}

export default AreasOfWork
