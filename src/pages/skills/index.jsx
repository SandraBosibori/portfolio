import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'

import styles from './skills.module.css'

const Skills=()=>{
    return(
        <>
            <div className={styles.zero}><h1>Skills</h1></div>
            <div className={styles.full}>
                
                <div className={styles.one}><FontAwesomeIcon icon={faHtml5} size="2xl" /></div>
                <div className={styles.one}></div>
                <div className={styles.one}></div>
                <div className={styles.one}></div>
            </div>
        
        </>
    )
}
export default Skills