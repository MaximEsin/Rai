import Header from "../modules/Header";
import Footer from "../modules/Footer";
import BigLogo from "../components/contacts/BigLogo";
import MainText from "../components/contacts/MainText";
import LowerText from "../components/contacts/LowerText";
import Phone from "../components/contacts/Phone";
import JurText from "../components/contacts/JurText";
import JurElements from "../components/contacts/JurElements";
import HeadText from "../components/contacts/HeadText";
import styles from "../styles/Contacts.module.scss";

const Contacts = () => (
  <>
    <Header />
    <main className={styles.mainWrap}>
      <HeadText />
      <BigLogo />
      <MainText />
      <LowerText />
      <Phone />
      <JurText />
      <JurElements />
    </main>
    <Footer />
  </>
);

export default Contacts;
