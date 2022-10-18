import Image from "next/image";
import icon from "../../public/docs.svg";
import styles from "../../styles/Contacts.module.scss";

const JurElements = () => (
    <>
    <section>
        <ul className={styles.jurList}>
            <li>
                <div className={styles.iconOne}>
            <Image
            src={icon}/>
            </div>
            <h2 className={styles.textOne}>Буклет №1</h2>
            </li>
            <li>
                <div className={styles.iconTwo}>
            <Image
            src={icon}/>
            </div>
            <h2 className={styles.textTwo}>Буклет №2</h2>
            </li>
            <li>
                <div className={styles.iconThree}>
            <Image
            src={icon}/>
            </div>
            <h2 className={styles.textThree}>Буклет №3</h2>
            </li>
            <li>
                <div className={styles.iconFour}>
            <Image
            src={icon}/>
            </div>
            <h2 className={styles.textFour}>Буклет №4</h2>
            </li>
            <li>
                <div className={styles.iconFive}>
            <Image
            src={icon}/>
            </div>
            <h2 className={styles.textFive}>Буклет №5</h2>
            </li>
            <li>
                <div className={styles.iconSix}>
            <Image
            src={icon}/>
            </div>
            <h2 className={styles.textSix}>Буклет №6</h2>
            </li>
            </ul>
            </section>
            </>
);

export default JurElements;