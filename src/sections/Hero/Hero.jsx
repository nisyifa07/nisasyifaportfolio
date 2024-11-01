<<<<<<< HEAD
import heroImg from "../../assets/image.png";
import styles from "../Hero/HeroStyles.module.css";
import light from "../../assets/icons-light.png";
import dark from "../../assets/icon-dark-moon.png";
import linkedinLight from "../../assets/icon-linkedin.png";
import linkedinDark from "../../assets/icons-linkedin-dark.png";
import githubLight from "../../assets/icons-github-light.png";
import githubDark from "../../assets/icons-github-dark.png";
import instagramLight from "../../assets/icons-instagram-light.png";
import instagramDark from "../../assets/icons-instagram-dark.png";
import CV from "../../assets/CV - Nisa Syifa M - Programmer.pdf";
import {useTheme} from "../../common/ThemeContext";

function Hero() {
    const {theme, toggleTheme } = useTheme();
    const themeIcon = theme === 'light' ? light : dark;
    const linkedin = theme === 'light' ? linkedinLight : linkedinDark;
    const github = theme === 'light' ? githubLight : githubDark;
    const instagram = theme === 'light' ? instagramLight : instagramDark;

  return (
    <section id='hero' className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroImg} alt="ini foto nisa" />
            <img className={styles.colorMode} src={themeIcon} alt="Color mode" onClick={toggleTheme} />
        </div>
        <div className={styles.info}>
            <h1>Nisa Syifa <br />Muzahidah</h1>
            <h2>Frontend Developer</h2>
            <span>
                <a href="www.linkedin/in/nisyifa-mzhdh" target="_blank"><img src={linkedin} alt="linkedin" /></a>
                <a href="https://github.com/nisyifa07" target="_blank"><img src={github} alt="linkedin" /></a>
                <a href="https://www.instagram.com/nisasyifaad?igsh=N2x6Z2Y5Z3dhd2M0" target="_blank"><img src={instagram} alt="linkedin" /></a>
            </span>
            <p className={styles.description} style={{margin: "auto"}}>I have a strong interest in front-end development. My resume is available for download below.</p>
            <a href={CV} download>
                <button className="hover">Resume</button>
            </a>
        </div>
    </section>
  )
}

=======
import heroImg from "../../assets/image.png";
import styles from "../Hero/HeroStyles.module.css";
import light from "../../assets/icons-light.png";
import dark from "../../assets/icon-dark-moon.png";
import linkedinLight from "../../assets/icon-linkedin.png";
import linkedinDark from "../../assets/icons-linkedin-dark.png";
import githubLight from "../../assets/icons-github-light.png";
import githubDark from "../../assets/icons-github-dark.png";
import instagramLight from "../../assets/icons-instagram-light.png";
import instagramDark from "../../assets/icons-instagram-dark.png";
import CV from "../../assets/CV - Nisa Syifa M - Programmer.pdf";
import {useTheme} from "../../common/ThemeContext";

function Hero() {
    const {theme, toggleTheme } = useTheme();
    const themeIcon = theme === 'light' ? light : dark;
    const linkedin = theme === 'light' ? linkedinLight : linkedinDark;
    const github = theme === 'light' ? githubLight : githubDark;
    const instagram = theme === 'light' ? instagramLight : instagramDark;

  return (
    <section id='hero' className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroImg} alt="ini foto nisa" />
            <img className={styles.colorMode} src={themeIcon} alt="Color mode" onClick={toggleTheme} />
        </div>
        <div className={styles.info}>
            <h1>Nisa Syifa <br />Muzahidah</h1>
            <h2>Frontend Developer</h2>
            <span>
                <a href="www.linkedin/in/nisyifa-mzhdh" target="_blank"><img src={linkedin} alt="linkedin" /></a>
                <a href="https://github.com/nisyifa07" target="_blank"><img src={github} alt="linkedin" /></a>
                <a href="https://www.instagram.com/nisasyifaad?igsh=N2x6Z2Y5Z3dhd2M0" target="_blank"><img src={instagram} alt="linkedin" /></a>
            </span>
            <p className={styles.description} style={{margin: "auto"}}>I have a strong interest in front-end development. My resume is available for download below.</p>
            <a href={CV} download>
                <button className="hover">Resume</button>
            </a>
        </div>
    </section>
  )
}

>>>>>>> 67ff116ac0dd547a970971dabd59ad2a8a45f33b
export default Hero