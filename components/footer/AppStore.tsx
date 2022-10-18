import Image from "next/image";
import styles from "../../styles/Footer.module.scss";
import Appstore from "../../public/AppSPic.svg";

const AppStore = () => (
    <>
    <section className={styles.appPic}>
        <Image
        src={Appstore}/>
        </section></>
);

export default AppStore;