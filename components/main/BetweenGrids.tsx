import Image from "next/image";
import styles from "../../styles/Main.module.scss";
import down from "../../public/Down.svg";

const BetweenGrids = () => (
  <>
    <section className={styles.BGContainer}>
      <section className={styles.BGfirst}>
        <h1 className={styles.BGTextOne}>Все предложения</h1>
        <h2 className={styles.BGTextTwo}>смотреть все</h2>
      </section>
      <section className={styles.BGsecond}>
        <div className={styles.BGRentContainer}>
          <h2 className={styles.BGRentText}>Аренда</h2>
        </div>
        <div className={styles.BGBuyContainer}>
          <h2 className={styles.BGBuyText}>Покупка</h2>
        </div>
        <div className={styles.BGImg}>
          <div className={styles.BGimg}>
            <Image src={down} />
          </div>
        </div>
      </section>
    </section>
  </>
);

export default BetweenGrids;
