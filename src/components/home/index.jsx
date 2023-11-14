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
import About from '../about'
import Skills from '../skills'
import me from '../../assets/me.png'
import { Link } from 'react-router-dom'
import Contact from '../../pages/contact'

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
                        <Link to='/resume'><button className={styles.btn1}>My Resume</button></Link> 
                        <Link to='/contact'><button className={styles.btn2}>Contact me</button></Link>
                    </div>
                    
                    <div className={styles.circles}>
                        <div className={styles.socials}><a href='https://github.com/SandraBosibori'><FontAwesomeIcon icon={faGithub} size='xl'  /></a></div>
                        <div className={styles.socials}><a href='https://www.linkedin.com/in/sandra-bosibori-a07634286/'><FontAwesomeIcon icon={faLinkedin} size='xl' /></a></div>
                        <div className={styles.socials}><a href="mailto:sandrahbosibori@gmail.com"><FontAwesomeIcon icon={faEnvelope} size='xl'  /></a></div>
                       

                    </div>
                </div>

                <div className={styles.two} data-aos="fade-left">
                    <div className={styles.photo}><img className={styles.me} src= {me} alt='me' /></div>
                </div>
      
              
            </section> 
           
        </>
     );
}
 
export default Home;