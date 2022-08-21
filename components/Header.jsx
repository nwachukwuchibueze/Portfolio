import styles from '../styles/Header.module.css'
import Image from 'next/image';
const Header = () => {
    return <div className={styles.Header} id='header'>
        <div className = {styles.headerleft}>
            <Image width='110px' height='70px' src='/img/mylogo.jpg' alt='my Logo' className={styles.logo} />
            <div className={styles.name}>
                <h5 className={styles.lefttext}>CHIBUEZE</h5>
                <h6 className={styles.h6text}>WEB DESIGNER AND DEVELOPER</h6>
            </div>
        </div>
        <div className = {styles.headerright}>
            <a href='mailto:nwachukwuchibueze99@gmail.com?subject=Hi Chibueze, I would like to hire you' className={styles.rightlink}>HIRE ME</a>
        </div>
    </div>
};
export default Header;