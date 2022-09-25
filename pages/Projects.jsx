import React from "react";
import styles from "../styles/Projects.module.css";

const Projects = () => {
    return (
        <section className={styles.section}>
            <h3 className={styles.title}>Projects</h3>
            <div className={styles.card}>
                <img src="/assets/169.png" alt="" />
                <h4 className={styles.subtitle}>Portfolio Website</h4>
                <p className={styles.desc}>
                    Portfolio website to share my experience with the world
                </p>
                <a href="https://tanshaochong.dev" className={styles.link}>
                    Check it out
                </a>
                <div className={styles.stack}>
                    <p>Next.js</p>
                </div>
            </div>
            <div className={styles.card}>
                <img src="/assets/169.png" alt="" />
                <h4 className={styles.subtitle}>one-word-captures</h4>
                <p className={styles.desc}>
                    An image-sharing social media application
                </p>
                <a href="" className={styles.link}>
                    Check it out
                </a>
                <div className={styles.stack}>
                    <p>React.js</p>
                    <p>Node.js</p>
                    <p>Express.js</p>
                    <p>MongoDB</p>
                    <p>Passport.js</p>
                    <p>REST</p>
                </div>
            </div>
            <div className={styles.card}>
                <img src="/assets/169.png" alt="" />
                <h4 className={styles.subtitle}>toDoList</h4>
                <p className={styles.desc}>
                    A productivity-focused mobile application to track personal
                    tasks
                </p>
                <a
                    href="https://play.google.com/store/apps/details?id=com.toDoList"
                    className={styles.link}
                >
                    Check it out
                </a>
                <div className={styles.stack}>
                    <p>React Native</p>
                    <p>Expo</p>
                    <p>AsyncStorage</p>
                </div>
            </div>
        </section>
    );
};

export default Projects;
