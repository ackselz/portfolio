import React from "react";
import styles from "../styles/Nav.module.css";

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.container}>
                <p className={styles.logo}>TSC</p>
                <div className={styles.items}>
                    <div className={styles.others}>
                        <a href="#home" className={styles.item}>
                            Home
                        </a>
                        <a href="#about" className={styles.item}>
                            About
                        </a>
                        <a href="#skills" className={styles.item}>
                            Skills
                        </a>
                        <a href="#experience" className={styles.item}>
                            Experience
                        </a>
                        <a href="#projects" className={styles.item}>
                            Projects
                        </a>
                    </div>
                    <div className={styles.mobile}>
                        <a href="#contact" className={styles.item}>
                            Contact
                        </a>
                        <a href="" className={styles.cta}>
                            Resume
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
