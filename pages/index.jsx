import styles from '../styles/Home.module.css';
import Header  from '../components/Header';
import MidSection from '../components/MidSection';

const Home = () => {
    return <div className={styles.container}>
        <Header />
        <MidSection />
    </div>
}

export default Home;
