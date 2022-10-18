import Image from "next/image";
import styles from "../../styles/Footer.module.scss";
import phone from "../../public/phone.svg";

const FPhone = () => (
    <>
    <section>
    <div className={styles.phoneIcon}>
        <Image
        src={phone}/>
        </div>
        <h1 className={styles.phoneNum}>+66 12-345-6789</h1>
        </section>
        </>
);

export default FPhone;