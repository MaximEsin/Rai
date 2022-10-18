import Image from "next/image";
import styles from "../../styles/Footer.module.scss";
import glass from "../../public/magnifyingglass.svg";

const Finput = () => (
    <>
    <section>
    <input className={styles.fInput} placeholder="Поиск"></input>
    <div className={styles.inputIcon}>
        <Image
        src={glass}/>
        </div>
        </section>
        </>
);

export default Finput;