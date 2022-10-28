import styles from "../../styles/404.module.scss";

const NoPage = () => (
    <>
    <section className={styles.NoPageSection}>
    <h2 className={styles.NoPageOne}>Такой страницы у нас нет, но есть</h2>
    <h2 className={styles.NoPageTwo}> много интересных предложений по</h2>
    <h2 className={styles.NoPageThree}>недвижимости</h2>
    </section>
    </>
);

export default NoPage;