import Header from "../modules/Header";
import Footer from "../modules/Footer";
import FirstComp from "../components/main/FirstComp";
import SecondComp from "../components/main/SecondComp";
import TitleOfDashboard from "../components/main/TitleOfDashboard";
import HeadOfDashboard from "../components/main/HeadOfDashboard";
import Line from "../components/main/Line";
import Grid from "../components/main/Grid";
import BetweenGrids from "../components/main/BetweenGrids";
import styles from "../styles/Main.module.scss";
import LastComponent from "../components/main/LastComponent";

const MainPage = () => (
  <>
    <Header />
    <main className={styles.mainWrap}>
      <FirstComp />
      <SecondComp />
      <TitleOfDashboard />
      <HeadOfDashboard />
      <Line />
      <Grid />
      <BetweenGrids />
      <section className={styles.gridRedaction}>
        <Grid />
      </section>
      <LastComponent />
    </main>
    <Footer />
  </>
);

export default MainPage;
