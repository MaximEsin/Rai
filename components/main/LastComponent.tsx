import Image from "next/image";
import styles from "../../styles/Main.module.scss";
import Clock from "../../public/Clock.svg";
import Papers from "../../public/Papers.svg";
import Thing from "../../public/Thing.svg";
import Humans from "../../public/Humans.svg";
import NoCash from "../../public/NoCash.svg";

const LastComponent = () => (
  <>
    <h1 className={styles.OurAdvantages}>Наши преимущества</h1>
    <section className={styles.bottomSection}>
      <section className={styles.bottomFirstItem}>
        <div className={styles.bottomImg}>
          <Image src={Clock} />
        </div>
        <h2 className={styles.bottomText}>Быстрое размещение недвижимости</h2>
      </section>
      <section className={styles.bottomSection}>
        <div className={styles.bottomImg}>
          <Image src={Papers} />
        </div>
        <h2 className={styles.bottomText}>Минимальный пакет документов</h2>
      </section>
      <section className={styles.bottomLastItem}>
        <div className={styles.bottomImg}>
          <Image src={Thing} />
        </div>
        <h2 className={styles.bottomText}>Аналитика по конкурентам</h2>
      </section>
    </section>
    <section className={styles.bottomSection}>
      <section className={styles.bottomFirstItem}>
        <div className={styles.bottomImg}>
          <Image src={Humans} />
        </div>
        <h2 className={styles.bottomText}>Все покупатели уже здесь!</h2>
      </section>
      <section className={styles.bottomSectionLast}>
        <div className={styles.bottomImg}>
          <Image src={NoCash} />
        </div>
        <h2 className={styles.bottomText}>Бесплатное размещение объявлений</h2>
      </section>
      <button className={styles.bottomButton}>
        <h2 className={styles.bottomButtonText}>Начать пользоваться</h2>
      </button>
    </section>
  </>
);

export default LastComponent;
