import Image from "next/image";
import styles from "../../styles/Footer.module.scss";
import flag from "../../public/flag.svg";

const LanguageF = () => (
    <>
    <section>
        <h1 className={styles.langText}>Таиланд</h1>
        <div className={styles.langPic}>
        <Image
            src={flag}/>
        </div>
        </section>
        </>
);

export default LanguageF;