import React from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
    return (
        <section className={styles.section}>
            <h3 className={styles.title}>Get in touch</h3>
            <h4 className={styles.subtitle}>Always open to new connections!</h4>
            <div className={styles.card}>
                <a href="">
                    <img src="/assets/github-original.svg" alt="" />
                </a>
                <a href="">
                    <img src="/assets/email.svg" alt="" />
                </a>
                <a href="">
                    <img src="/assets/linkedin-plain.svg" alt="" />
                </a>
            </div>
        </section>
    );
};

export default Contact;