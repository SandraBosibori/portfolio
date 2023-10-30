import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faSquareXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

import styles from "./home.module.css"

const Home = () => {
    return ( 
        <>
            <section className={styles.page1}>
        
                <div className={styles.one}>
                    <div className={styles.word}>
                        <h1>Hi, my name is <strong>Sandra Bosibori,</strong> a <strong>Full-Stack Web Developer</strong></h1>
                        <h2>I am passionate about software engineering </h2>
                        
                    </div>

                    <div className={styles.btns}>
                        <button className={styles.btn1}>My Resume</button>
                        <button className={styles.btn2}>Contact me</button>
                    </div>
                    
                    <div className={styles.circles}>
                        <div className={styles.socials}><FontAwesomeIcon icon={faGithub} size="2xl" /></div>
                        <div className={styles.socials}><FontAwesomeIcon icon={faLinkedin} size="2xl" /></div>
                        <div className={styles.socials}><FontAwesomeIcon icon={faSquareXTwitter} size="2xl" /></div>
                        <div className={styles.socials}><FontAwesomeIcon icon={faEnvelope} size="2xl" /></div>
                        <div className={styles.socials}><FontAwesomeIcon icon={faInstagram} size="2xl" /></div>

                    </div>
                </div>

                <div className={styles.two}>
                    <div className={styles.photo}></div>
                </div>
      
              
            </section> 
        </>
     );
}
 
export default Home;