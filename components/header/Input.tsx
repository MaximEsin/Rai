import Image from "next/image";
import styles from "../../styles/Header.module.scss";
import glass from "../../public/magnifyingglass.svg";

const Input = () => (
    <>
    <input className={styles.input} placeholder="Поиск"></input>
    <div className={styles.inputPic}>
        <Image
        src={glass} />
    </div>
    </>
);

export default Input;