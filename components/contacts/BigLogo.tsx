import Image from "next/image";
import logo from "../../public/BigLogo.svg";
import styles from "../../styles/Contacts.module.scss";

const BigLogo = () => (
    <>
    <section className={styles.BigLogo}>
        <Image
        src={logo}/>
        </section></>
);

export default BigLogo;