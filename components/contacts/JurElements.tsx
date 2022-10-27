import Image from "next/image";
import icon from "../../public/docs.svg";
import styles from "../../styles/Contacts.module.scss";

const JurElements = () => (
    <>
    <section className={styles.jurList}>
            <section className={styles.firstComp}>
            <Image
            src={icon}/>
            <h2 className={styles.compText}>Буклет №1</h2>
            </section>
            <section className={styles.comp}>
            <Image
            src={icon}/>
            <h2 className={styles.compText}>Буклет №2</h2>
            </section>
            <section className={styles.comp}>
            <Image
            src={icon}/>
            <h2 className={styles.compText}>Буклет №3</h2>
            </section>
            <section className={styles.comp}>
            <Image
            src={icon}/>
            <h2 className={styles.compText}>Буклет №4</h2>
            </section>
            <section className={styles.comp}>
            <Image
            src={icon}/>
            <h2 className={styles.compText}>Буклет №5</h2>
            </section>
            <section className={styles.lastComp}>
            <Image
            src={icon}/>
            <h2 className={styles.compText}>Буклет №6</h2>
            </section>
            </section>
            </>
);

export default JurElements;