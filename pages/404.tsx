import Header from "../modules/Header";
import Footer from "../modules/Footer";
import ErrorText from "../components/404/ErrorText";
import ErrorLogo from "../components/404/ErrorLogo";
import ErrorCode from "../components/404/ErrorCode";
import PageNotFound from "../components/404/PageNotFound";
import NoPage from "../components/404/NoPage";
import Button from "../components/404/Button";

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
        <Footer/>
            </>
)

export default Error;