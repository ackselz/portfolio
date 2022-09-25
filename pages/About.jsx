import React from "react";
import styles from "../styles/About.module.css";

const About = () => {
    return (
        <>
            <section className={styles.section}>
                <h3 className={styles.title}>About Me</h3>
                <p className={styles.desc}>
                    I am a first-year Computer Science student based in
                    Singapore. I have a penchant for learning and problem
                    solving - to solve modern problems to better the lives of
                    the people around me.
                </p>
                <p className={styles.desc}>
                    I have experience in{" "}
                    <span className={styles.highlight}>web development</span>{" "}
                    and <span className={styles.highlight}>robotics</span>.
                </p>
                <p className={styles.desc}>
                    My current hobbies include bouldering and badminton, but I
                    am always looking for new and exciting sports to try.
                </p>
            </section>
        </>
    );
};

export default About;
