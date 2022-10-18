import Image from "next/image";
import logo from "../../public/headerLogo.svg";
import styles from "../../styles/Header.module.scss";

const hLogo = () => (
    <>
    <section className={styles.hLogo}>
        <Image
        src={logo} />
    </section>
    </>
);

export default hLogo;