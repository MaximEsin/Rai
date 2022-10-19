import Header from "../modules/Header";
import Footer from "../modules/Footer";
import styles from "../styles/404.module.scss";
import ErrorText from "../components/404/ErrorText";
import ErrorLogo from "../components/404/ErrorLogo";
import ErrorCode from "../components/404/ErrorCode";
import PageNotFound from "../components/404/PageNotFound";
import NoPage from "../components/404/NoPage";
import Button from "../components/Button";

const Error = () => (
    <>
    <Header/>
    <main>
        <ErrorText/>
        <ErrorLogo/>
        <ErrorCode/>
        <PageNotFound/>
        <NoPage/>
        <Button/>
    </main>
    <footer className={styles.footer}>
        <Footer/>
    </footer>
            </>
)

export default Error;