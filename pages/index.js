import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import Nav from "./Nav";
import Skills from "./Skills";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Tan Shao Chong</title>
                <meta name="description" content="Portfolio Website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav></Nav>
            <main className={styles.main}>
                <div className={styles.placeholder} id="home"></div>
                <Hero></Hero>
                <span id="about"></span>
                <About></About>
                <span id="skills"></span>
                <Skills></Skills>
                <span id="experience"></span>
                <Experience></Experience>
                <span id="projects"></span>
                <Projects></Projects>
                <span id="contact"></span>
                <Contact></Contact>
                <div></div>
            </main>

            <footer className={styles.footer}>
                <div>
                    <p>Developed by &nbsp;</p>
                    <a href="https://tanshaochong.dev">Tan Shao Chong</a>
                </div>
            </footer>
        </div>
    );
}
