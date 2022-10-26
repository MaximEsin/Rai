import Image from "next/image";
import styles from "../../styles/Header.module.scss";
import glass from "../../public/magnifyingglass.svg";

const Input = () => (
    <>
    <section className={styles.inputBlock}>
    <input className={styles.input} placeholder="Поиск"></input>
    <div className={styles.inputPic}>
        <Image
        src={glass} />
    </div>
    </section>
    </>
);

export default Input;