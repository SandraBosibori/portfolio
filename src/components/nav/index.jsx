import { Link } from "react-router-dom";
import styles from "./nav.module.css"
import { HashLink } from "react-router-hash-link";

const Nav = () => {
    return (
        <>
            <div className={styles.nav}>
                <div className={styles.inner}>
                    <HashLink to='#about' smooth>About</HashLink>
                    <HashLink to='#skills' smooth>Skills</HashLink>
                    <HashLink to='#projects' smooth>Projects</HashLink>
                    <HashLink to='#education' smooth>Education</HashLink>
                </div>
            </div>
            
        
        </>
      );
}
 
export default Nav ;