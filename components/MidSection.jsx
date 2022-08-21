import styles from '../styles/midsection.module.css';
import Header from './Header';

const MidSection = () => {
    return <div className={styles.container}>
       <div className={styles.welcometext}>
        <h2 className={styles.welcomeh2text}>Hi, My name is</h2>
        <h1 className={styles.welcomeh1text}>CHIBUEZE</h1>
       </div>
        <h6 className={styles.scrolltext}>SCROLL</h6>
        <div className={styles.line} />
        <div className={styles.introduction}>
            <h1 className={styles.introductionh1text}>Let's work together.</h1>
            <h2 className={styles.introductionh2text}>I am a front-end web developer from Lagos, Nigeria. Highly skilled in HTML, CSS, JavaScript and WordPress. Creative and self-starting Front-End Developer with a year experience building stable websites and apps. I enjoy building everything from small business sites to rich interactive web apps. If you are a business seeking a web presence or an employer looking to hire, You can get in touch with me here. </h2>
            <div className={styles.buttons}>
                <button className={styles.button} onClick={ ()=> document.getElementById('header').scrollIntoView({behavior : 'smooth'})} >I need a website </button>
            </div>
        </div>
    </div>
};
export default MidSection;