import React from "react";
import styles from "../styles/Socials.module.css";

const Socials = () => {
    return (
        <div className={styles.container}>
            <img
                src="/assets/github-original.svg"
                alt=""
                className={styles.image}
            />
            <img
                src="/assets/linkedin-plain.svg"
                alt=""
                className={styles.image}
            />
            <img src="/assets/email.svg" alt="" className={styles.image} />
        </div>
    );
};

export default Socials;
