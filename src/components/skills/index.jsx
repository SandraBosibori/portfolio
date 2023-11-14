import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import jscript from '../../assets/jscript.png'
import react from '../../assets/react.png'

import styles from './skills.module.css'

const Skills=()=>{
    return(
        <section className={styles.full} id='skills'>
            <div className={styles.zero} data-aos="fade-down"><h1>Skills</h1></div>
            <div className={styles.bigbox} data-aos="fade-up">
                <div className={styles.one}><img className={styles.ht} src={html} alt='html' /></div>
                <div className={styles.one}><img className={styles.ht} src={css} alt='css' /></div>
                <div className={styles.one}><img className={styles.ht} src={jscript} alt='javascript' /></div>
                <div className={styles.one}><img className={styles.ht} src={react} alt='react' /></div>
            </div>
        
        </section>
    )
}
export default Skills