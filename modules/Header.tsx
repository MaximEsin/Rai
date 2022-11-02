import HLogo from "../components/header/Hlogo";
import HText from "../components/header/HText";
import Navbar from "../components/header/Navbar";
import Input from "../components/header/Input";
import Language from "../components/header/Language";
import styles from "../styles/Header.module.scss";

const Header = () => (
  <>
    <section className={styles.headerWrap}>
      <header className={styles.header}>
        <HLogo />
        <HText />
        <Navbar />
        <Input />
        <Language />
      </header>
    </section>
  </>
);

export default Header;
