import styles from './projects.module.css'
import workforce from '../../assets/workforce.png'
import everybuy from '../../assets/everybuy.png'
import netflix from '../../assets/netflix.png'

const Projects=()=>{
    return(
        <section className={styles.full}>
            <div className={styles.top} data-aos="fade-left"><h1>Projects</h1></div>
            <div className={styles.bottom} data-aos="fade-right">
                <div className={styles.one}>
                    <img className={styles.workforce} src={workforce} alt='workforce' />
                    <div className={styles.inner}>
                        <div className={styles.up}><strong><p>Workforce Africa</p></strong></div>
                        <div className={styles.middle}>
                            <p>This is a single page react application where users are able to search
                            for jobs from a provided catalogue.
                            </p>
                        </div>
                        <div className={styles.down}>
                            <button className={styles.btn}>view project</button>
                        </div>
                    </div>
                </div>
                <div className={styles.two}><img className={styles.netflix} src={netflix} alt='netflix' /></div>
                <div className={styles.three}><img className={styles.everybuy} src={everybuy} alt='everybuy' /></div>
            </div>
            
        </section>
    )
}
export default Projects