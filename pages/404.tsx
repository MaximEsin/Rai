import Header from "../modules/Header";
import Footer from "../modules/Footer";
import ErrorText from "../components/404/ErrorText";
import ErrorLogo from "../components/404/ErrorLogo";
import ErrorCode from "../components/404/ErrorCode";
import PageNotFound from "../components/404/PageNotFound";
import NoPage from "../components/404/NoPage";
import Button from "../components/404/Button";
import styles from "../styles/404.module.scss";

const Error = () => (
  <>
    <Header />
    <section className={styles.mainWrap}>
      <main className={styles.grid}>
        <section>
          <ErrorText />
          <ErrorLogo />
          <ErrorCode />
          <PageNotFound />
        </section>
        <section>
          <NoPage />
          <Button />
        </section>
      </main>
    </section>
    <Footer />
  </>
);

export default Error;
