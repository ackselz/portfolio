import Image from "next/image";
import React from "react";
import styles from "../styles/Hero.module.css";

const Hero = () => {
    return (
        <section className={styles.section}>
            <p className={styles.welcome}>Greetings!</p>
            <h1 className={styles.title}>
                I am <u>Shao Chong</u>.
            </h1>
            <h1 className={styles.subtitle}>I build things.</h1>
            <p className={styles.desc}>
                ... and sometimes break things unintentionally too &#x1F613;
            </p>
            <a className={styles.cta}>
                <Image height="32" width="32" src="/assets/resume.svg" alt="" />
                Resume
            </a>
        </section>
    );
};

export default Hero;
