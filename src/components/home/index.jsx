import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faSquareXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { useEffect } from 'react'
import { motion as m } from 'framer-motion'
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from "./home.module.css"
import About from '../../pages/about'
import Skills from '../../pages/skills'

const Home = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return ( 
        <>
            <section className={styles.page1} >
        
                <div className={styles.one} data-aos="fade-right">
                    <div className={styles.word}>
                        <h1>I'm <strong>Sandra Bosibori,</strong> <br /> a <strong>Full-Stack Web Developer</strong></h1>
                        
                    </div>

                    <div className={styles.btns}>
                        <button className={styles.btn1}><a href=''>My Resume</a></button>
                        <button className={styles.btn2}>Contact me</button>
                    </div>
                    
                    <div className={styles.circles}>
                        <div className={styles.socials}><a href='https://github.com/SandraBosibori'><FontAwesomeIcon icon={faGithub} size='xl'  /></a></div>
                        <div className={styles.socials}><a href='https://www.linkedin.com/in/sandra-bosibori-a07634286/'><FontAwesomeIcon icon={faLinkedin} size='xl' /></a></div>
                        <div className={styles.socials}><FontAwesomeIcon icon={faEnvelope} size='xl'  /></div>
                       

                    </div>
                </div>

                <div className={styles.two} data-aos="fade-left">
                    <div className={styles.photo}></div>
                </div>
      
              
            </section> 
           
        </>
     );
}
 
export default Home;