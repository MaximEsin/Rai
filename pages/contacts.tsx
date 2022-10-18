import Header from "../modules/Header";
import Footer from "../modules/Footer";
import styles from "../styles/Footer.module.scss";
import BigLogo from "../components/contacts/BigLogo";
import MainText from "../components/contacts/MainText";
import LowerText from "../components/contacts/LowerText";
import Phone from "../components/contacts/Phone";
import JurText from "../components/contacts/JurText";
import JurElements from "../components/contacts/JurElements";

const Contacts = () => (
    <>
    <Header />
    <main>
        <BigLogo/>
        <MainText/>
        <LowerText/>
        <Phone/>
        <JurText/>
        <JurElements/>
    </main>
    <footer className={styles.footerCont}>
    <Footer />
    </footer>

    </>
);

export default Contacts;