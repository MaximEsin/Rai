import Image from "next/image";
import styles from "../../styles/Footer.module.scss";
import logo from "../../public/footerLogo.svg";

const Flogo = () => (
    <>
    <section className={styles.flogo}>
        <Image
        src={logo}/>
        </section>
        </>
);

export default Flogo;