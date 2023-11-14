import styles from './education.module.css'

const Education=()=>{
    return(
        <section id="education" className={styles.full} data-aos="fade-left">
        <div className={styles.cover}>
            <div className={styles.head}>
                <h1>Education</h1>
            </div>
            <div className={styles.bod}>
            <p>
               Zindua School: I attended a four month bootcamp at Zindua School
            </p>
            <p>
                Jomo Kenyatta University of Agriculture and Technology (JKUAT): I am currently
                pursuing a degree in Bachelor of Business Information Technology (BBIT).
            </p>
        </div>
        </div>
    
   

    </section>
    )
}
export default Education