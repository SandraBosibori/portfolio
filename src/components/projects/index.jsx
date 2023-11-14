import styles from './projects.module.css'
import workforce from '../../assets/workforce.png'
import everybuy from '../../assets/everybuy.png'
import assign from '../../assets/assign.png'

const Projects=()=>{
    return(
        <section className={styles.full} id='projects'>
            <div className={styles.top} data-aos="fade-left"><h1>Projects</h1></div>
            <div className={styles.bottom} data-aos="fade-right">
                <div className={styles.one}>
                    <img className={styles.workforce} src={workforce} alt='workforce' />
                    <div className={styles.inner}>
                        <div className={styles.up}><strong><p>Workforce Africa</p></strong></div>
                        <div className={styles.middle}>
                            <p>This is a single page react application where users are able to search
                            for jobs from a provided catalogue. It was created using react.
                            </p>
                        </div>
                        <div className={styles.down}>
                            <button className={styles.btn}><a href='https://workforce-chi.vercel.app/'>view project</a></button>
                        </div>
                    </div>
                </div>
                <div className={styles.two}>
                    <img className={styles.assign} src={assign} alt='assign' />
                    <div className={styles.inner}>
                        <div className={styles.up}><strong><p>Assign</p></strong></div>
                        <div className={styles.middle}>
                            <p>This is a web application where users are able to sing in and find people to run errands for them.
                                People can also apply to run errands for other people. It was created using react and uses mongo.db
                                and firebase as databases.
                            </p>
                        </div>
                        <div className={styles.down}>
                            <button className={styles.btn}><a href='https://github.com/SandraBosibori/assign3'>view project</a></button>
                        </div>
                    </div>
                </div>
                <div className={styles.three}>
                    <img className={styles.everybuy} src={everybuy} alt='everybuy' />
                    <div className={styles.inner}>
                        <div className={styles.up}><strong><p>Everybuy</p></strong></div>
                        <div className={styles.middle}>
                            <p>
                                This is an ecommerce website that enables users to search for products, add to cart and remove from cart.
                                I used HTML, CSS and JavaScript for this project.
                            </p>
                        </div>
                        <div className={styles.down}>
                            <button className={styles.btn}><a href='https://everybuy.vercel.app/'>view project</a></button>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}
export default Projects