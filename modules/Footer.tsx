import Flogo from "../components/footer/Flogo";
import Ftext from "../components/footer/Ftext";
import FPhone from "../components/footer/FPhone";
import AppStore from "../components/footer/AppStore";
import PlayMarket from "../components/footer/PlayMarket";
import TradeMark from "../components/footer/TradeMark";
import Finput from "../components/footer/Finput";
import LanguageF from "../components/footer/Language";
import Info from "../components/footer/Info";
import styles from "../styles/Footer.module.scss";

const Footer = () => (
  <>
    <section className={styles.footerWrap}>
      <footer className={styles.footer}>
        <section>
          <section className={styles.box}>
            <Flogo />
            <Ftext />
          </section>
          <FPhone />
          <section className={styles.box}>
            <AppStore />
            <PlayMarket />
          </section>
          <TradeMark />
        </section>

        <section>
          <section className={styles.footerBox}>
            <Finput />
            <LanguageF />
          </section>
          <Info />
        </section>
      </footer>
    </section>
  </>
);

export default Footer;
