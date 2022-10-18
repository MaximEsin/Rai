import Header from "../modules/Header";
import Footer from "../modules/Footer";
import styles from "../styles/Footer.module.scss";

const Contacts = () => (
    <>
    <Header />
    <footer className={styles.footerCont}>
    <Footer />
    </footer>

    </>
);

export default Contacts;