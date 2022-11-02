import Image from "next/image";
import styles from "../../styles/Main.module.scss";
import keys from "../../public/Keys.svg";
import bed from "../../public/Bed.svg";
import newBuilding from "../../public/Newbuilding.svg";
import house from "../../public/House.svg";
import commercial from "../../public/Commercial.svg";
import calendar from "../../public/Calendar.svg";
import housePlus from "../../public/HousePlus.svg";

const SecondComp = () => (
  <>
    <section className={styles.secondContainer}>
      <div className={styles.Container}>
        <div className={styles.img}>
          <Image src={keys} />
        </div>
        <p className={styles.ContainerText}>Купить</p>
      </div>
      <div className={styles.Container}>
        <div className={styles.img}>
          <Image src={bed} />
        </div>
        <p className={styles.ContainerText}>Снять</p>
      </div>
      <div className={styles.Container}>
        <div className={styles.img}>
          <Image src={newBuilding} />
        </div>
        <p className={styles.ContainerText}>Новостройки</p>
      </div>
      <div className={styles.Container}>
        <div className={styles.img}>
          <Image src={house} />
        </div>
        <p className={styles.ContainerText}>Дома и участки</p>
      </div>
      <div className={styles.Container}>
        <div className={styles.img}>
          <Image src={commercial} />
        </div>
        <p className={styles.ContainerText}>Коммерческая</p>
      </div>
      <div className={styles.Container}>
        <div className={styles.img}>
          <Image src={calendar} />
        </div>
        <p className={styles.ContainerText}>Посуточно</p>
      </div>
      <div className={styles.Container}>
        <div className={styles.img}>
          <Image src={housePlus} />
        </div>
      </div>
    </section>
  </>
);

export default SecondComp;
