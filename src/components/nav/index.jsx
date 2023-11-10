import { Link } from "react-router-dom";
import styles from "./nav.module.css"

const Nav = () => {
    return (
        <>
            <div className={styles.nav}>
                <div className={styles.inner}>
                    <a href="#about">About</a>
                    <a href="skills">Skills</a>
                    <a href="projects">Projects</a>
                    <a href="education">Education</a>
                    {/* <div className={styles.about}><Link to='/about'>About</Link></div>
                    <div className={styles.skills}><Link to='/skills'>Skills</Link></div>
                    <div className={styles.experience}><Link to='/experience'>Experience</Link></div>
                    <div className={styles.projects}><Link to='/projects'>Projects</Link></div>
                    <div className={styles.education}><Link to='/education'>Education</Link></div> */}
                </div>
            </div>
            
        
        </>
      );
}
 
export default Nav ;