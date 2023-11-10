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
                    I am a full-stack software developer passionate about creating robust and innovative web applications.
                    With a solid background in HTML, CSS, JavaScript and React.js, 
                    I thrive on turning innovative ideas into responsive and user-friendly web solutions.
                    I am also a Bachelor of Business Information Technology student.
                    My interest in software development led me to attend a bootcamp which enabled me to build
                    and sharpen my skills.
                    I am eager about learning in the ever-evolving world of web development and I embrace a continuous
                    learning mindset
                    My journey in web development has equipped me with a keen eye for detail, a problem-solving mindset,
                    and a commitment to writing efficient and maintainable code.
                </p>
            </div>
            </div>
        
       

        </section>
    )
}
export default About