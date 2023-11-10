import styles from './about.module.css'

const About=()=>{
    return(
        <section className={styles.full} data-aos="fade-left">
            <div className={styles.cover}>
                <div className={styles.head}>
                    <h1>About me...</h1>
                </div>
                <div className={styles.bod}>
                <p>
                    I am a full-stack software developer
                </p>
            </div>
            </div>
        
       

        </section>
    )
}
export default About