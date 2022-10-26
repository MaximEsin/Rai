import Image from "next/image";
import styles from "../../styles/Header.module.scss";
import flag from "../../public/flag.svg";

const Language = () => (
    <>
    <section className={styles.language}>
        <h1 className={styles.langText}>Таиланд</h1>
        <div className={styles.langImg}>
        <Image
            src={flag}/>
        </div>
        </section>
        </>
);

export default Language;