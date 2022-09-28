import React from "react";
import styles from "../styles/Skills.module.css";

const Skills = () => {
    return (
        <section className={styles.section}>
            <h3 className={styles.title}>Skills</h3>
            <h4 className={styles.subtitle}>
                Technologies that I am familiar with:
            </h4>
            <div className={styles.container}>
                <p className={styles.language}>HTML</p>
                <p className={styles.language}>CSS</p>
                <p className={styles.language}>JavaScript</p>
                <p className={styles.language}>MySQL</p>
                <p className={styles.skill}>MongoDB</p>
                <p className={styles.skill}>Express.js</p>
                <p className={styles.skill}>React.js</p>
                <p className={styles.skill}>Node.js</p>
            </div>
        </section>
    );
};

export default Skills;
