import Image from "next/image";
import styles from "../../styles/Main.module.scss";
import Apartment from "../../public/Apartment.svg";
import Villa from "../../public/Villa.svg";
import ChastnyDom from "../../public/ChastnyDom.svg";

const HeadOfDashboard = () => (
  <>
    <section className={styles.HODContainer}>
      <section className={styles.HODFirstItem}>
        <div className={styles.HODImg}>
          <Image src={Apartment} />
        </div>
        <h2 className={styles.HODText}>Апартаменты</h2>
      </section>
      <section className={styles.HODItem}>
        <div className={styles.HODImg}>
          <Image src={Villa} />
        </div>
        <h2 className={styles.HODText}>Вилла</h2>
      </section>
      <section className={styles.HODItem}>
        <div className={styles.HODImg}>
          <Image src={ChastnyDom} />
        </div>
        <h2 className={styles.HODText}>Частный дом</h2>
      </section>
      <section className={styles.HODItem}>
        <div className={styles.HODImg}>
          <Image src={Apartment} />
        </div>
        <h2 className={styles.HODText}>Коворкинг</h2>
      </section>
      <section className={styles.HODItem}>
        <div className={styles.HODImg}>
          <Image src={Villa} />
        </div>
        <h2 className={styles.HODText}>Отель</h2>
      </section>
      <section className={styles.HODItem}>
        <div className={styles.HODImg}>
          <Image src={ChastnyDom} />
        </div>
        <h2 className={styles.HODText}>Гараж</h2>
      </section>
      <section className={styles.HODItem}>
        <div className={styles.HODImg}>
          <Image src={Apartment} />
        </div>
        <h2 className={styles.HODText}>Квартира</h2>
      </section>
      <section className={styles.HODItem}>
        <div className={styles.HODImg}>
          <Image src={Villa} />
        </div>
        <h2 className={styles.HODText}>Магазин</h2>
      </section>
      <section className={styles.HODItem}>
        <div className={styles.HODImg}>
          <Image src={Villa} />
        </div>
        <h2 className={styles.HODText}>Отель</h2>
      </section>
    </section>
  </>
);

export default HeadOfDashboard;
