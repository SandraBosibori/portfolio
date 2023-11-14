import { Link } from 'react-router-dom'
import styles from './contact.module.css'

const Contact=()=>{
    return(
    <section className={styles.full}>
        <div className={styles.top}>
            <h1>How to contact me</h1>
        </div>
        <div className={styles.bottom}>
            <p>Email: sandrahbosibori@gmail.com</p>
            <p>Phone: +254 741 415 010</p>
            <Link to='/'><button className={styles.btn}>Home</button></Link>
        </div>

    </section>

    )
}
export default Contact