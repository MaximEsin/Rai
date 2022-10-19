import Image from "next/image";
import styles from "../../styles/404.module.scss";
import logo from "../../public/errorLogo.svg";

const BigLogo = () => (
    <>
    <section className={styles.BigLogo}>
        <Image
        src={logo}/>
    </section>
    </>
);

export default BigLogo;