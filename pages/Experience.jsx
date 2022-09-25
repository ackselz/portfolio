import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../styles/Experience.module.css";

const Experience = () => {
    const [a, setA] = useState(true);
    const toggleA = () => {
        setA(!a);
        setB(false);
        setC(false);
    };
    const [b, setB] = useState(false);
    const toggleB = () => {
        setB(!b);
        setA(false);
        setC(false);
    };
    const [c, setC] = useState(false);
    const toggleC = () => {
        setC(!c);
        setA(false);
        setB(false);
    };

    return (
        <section className={styles.section}>
            <h3 className={styles.title}>Experience</h3>
            <div className={styles.card}>
                <div className={styles.header}>
                    <h4 className={styles.subtitle}>
                        Defence Science &amp; Technology Agency
                    </h4>
                    <h5 className={styles.role}>Software Engineer Intern</h5>
                    <p className={styles.date}>February 2022 - July 2022</p>
                    <div className={styles.toggle}>
                        <Image
                            width="48"
                            height="48"
                            layout="fixed"
                            src={
                                a
                                    ? "/assets/collapse.svg"
                                    : "/assets/expand.svg"
                            }
                            alt=""
                            onClick={toggleA}
                        />
                    </div>
                </div>
                <ul
                    className={styles.list}
                    style={{ display: a ? "flex" : "none" }}
                >
                    <li>
                        Worked under the Fleet Management System team to provide
                        data-driven solutions to improve maintenance efficiency
                        and operational readiness
                    </li>
                    <li>
                        Extensive use of Qlik Sense for data visualisation and
                        analytics, as well as JavaScript frameworks to extend
                        the capabilities of Qlik Sense beyond its out-of-the-box
                        features
                    </li>
                    <li>
                        Built web applications integrated with Qlik Sense
                        dashboards, using{" "}
                        <span className={styles.highlight}>React.js</span>,{" "}
                        <span className={styles.highlight}>nebula.js</span> and{" "}
                        <span className={styles.highlight}>enigma.js</span>
                    </li>
                    <li>
                        Developed custom visualisation extensions in Qlik Sense,
                        using{" "}
                        <span className={styles.highlight}>nebula.js</span> and
                        the <span className={styles.highlight}>D3.js</span>{" "}
                        visualisation library
                    </li>
                    <li>
                        Designed custom themes in Qlik Sense to streamline UI
                        for their analytical dashboards, using{" "}
                        <span className={styles.highlight}>CSS</span> and{" "}
                        <span className={styles.highlight}>JSON</span>
                    </li>
                </ul>
            </div>
            <div className={styles.card}>
                <div className={styles.header}>
                    <h4 className={styles.subtitle}>
                        REACH, building platforms for social good
                    </h4>
                    <h5 className={styles.role}>Software Developer</h5>
                    <p className={styles.date}>August 2022 - Present</p>
                    <div className={styles.toggle}>
                        <Image
                            width="48"
                            height="48"
                            src={
                                b
                                    ? "/assets/collapse.svg"
                                    : "/assets/expand.svg"
                            }
                            alt=""
                            onClick={toggleB}
                        />
                    </div>
                </div>
                <ul
                    className={styles.list}
                    style={{ display: b ? "flex" : "none" }}
                >
                    <li>
                        Contributing to{" "}
                        <a href="https://play.google.com/store/apps/details?id=com.keepfitmobile">
                            Keep Fit - Challenge Tasks
                        </a>{" "}
                        , an integrated application built in collaboration with
                        Fuchun Primary School, Singapore.
                    </li>
                    <li>
                        The app aims to encourage students to adopt healthy
                        living habits, as part of their Physical Education
                        curriculum.
                    </li>
                    <li>
                        Developing a habit tracker app for students, using{" "}
                        <span className={styles.highlight}>React Native</span>,{" "}
                        <span className={styles.highlight}>Redux</span> and{" "}
                        <span className={styles.highlight}>Firebase</span>
                    </li>
                    <li>
                        Developing an admin website for teachers, using{" "}
                        <span className={styles.highlight}>Next.js</span> and{" "}
                        <span className={styles.highlight}>Firebase</span>
                    </li>
                </ul>
            </div>
            <div className={styles.card}>
                <div className={styles.header}>
                    <h4 className={styles.subtitle}>Makers&apos; Lab</h4>
                    <h5 className={styles.role}>Maker</h5>
                    <p className={styles.date}>August 2022 - Present</p>
                    <div className={styles.toggle}>
                        <Image
                            width="48"
                            height="48"
                            src={
                                c
                                    ? "/assets/collapse.svg"
                                    : "/assets/expand.svg"
                            }
                            alt=""
                            onClick={toggleC}
                        />
                    </div>
                </div>
                <ul
                    className={styles.list}
                    style={{ display: c ? "flex" : "none" }}
                >
                    <li>
                        Currently working on building a drone from scratch, stay
                        tuned for updates!
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Experience;
