import Image from "next/image";
import styles from "../../styles/Footer.module.scss";
import playM from "../../public/playMPic.svg";

const PlayMarket = () => (
    <>
    <section className={styles.playPic}>
        <Image
        src={playM}/>
        </section>
        </>
);

export default PlayMarket;