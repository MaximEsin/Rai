import Image from "next/image";
import styles from "../../styles/Main.module.scss";
import Photo from "../../public/FirstComp.svg";

const FirstComp = () => (
    <>
    <section className={styles.container}>
        <div className={styles.firstPhoto}>
            <Image
            src={Photo}/>
            <h1 className={styles.firstText}>Достаточная информация по объектам в понятном формате</h1>
            <h2 className={styles.secondText}>Смотри предложения по недвижимости в регионе с фильтрацией по твоим предпочтениям</h2>
            <button className={styles.button}><p className={styles.buttonText}>Разместить объявление</p></button>
        </div>
    </section>
    </>
);

export default FirstComp;