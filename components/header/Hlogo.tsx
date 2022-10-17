import Image from "next/image";
import logo from "../../public/headerLogo.svg";
import styles from "../../styles/Header.module.scss";

const hLogo = () => (
    <>
    <div className={styles.hLogo}>
        <Image
        src={logo} />
    </div>
    </>
);

export default hLogo;