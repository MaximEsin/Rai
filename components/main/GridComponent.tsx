import Image from "next/image";
import styles from "../../styles/Main.module.scss";
import FirstGridPic from "../../public/FirstGridPic.svg";
import SecondGridPic from "../../public/SecondGridPic.svg";
import ThirdGridPic from "../../public/ThirdGridPic.svg";
import MakeBigger from "../../public/MakeBigger.svg";
import Swimming from "../../public/Swimming.svg";
import Bedroom from "../../public/Bedroom.svg";
import Washing from "../../public/Washing.svg";

const GridComponent = () => (
  <>
    <section className={styles.gridSection}>
      <section className={styles.gridPiece}>
        <section className={styles.gridPicContainer}>
          <Image src={FirstGridPic} />
          <div className={styles.gridPicTextContainer}>
            <h2 className={styles.gridPicText}>Продажа</h2>
          </div>
        </section>
        <h1 className={styles.bathPrice}>฿ 8.000.000</h1>
        <h2 className={styles.rublePrice}>₽ 16.000.000</h2>
        <h1 className={styles.villaInfo}>Вилла от застройщика Tropic Villas</h1>
        <h2 className={styles.villaInfoAdds}>Пхукет, Равайи, пляж, сауна...</h2>
        <section className={styles.adds}>
          <section className={styles.addsContainer}>
            <div className={styles.addsImg}>
              <Image src={MakeBigger} />
            </div>
            <h2 className={styles.addsText}>450 м2</h2>
          </section>
          <section className={styles.addsSecondContainer}>
            <div className={styles.addsImg}>
              <Image src={Swimming} />
            </div>
            <h2 className={styles.addsText}>бассейн</h2>
          </section>
        </section>
        <section className={styles.adds}>
          <section className={styles.addsContainer}>
            <div className={styles.addsImg}>
              <Image src={Bedroom} />
            </div>
            <h2 className={styles.addsText}>3 спальни</h2>
          </section>
          <section className={styles.addsSecondContainer}>
            <div className={styles.addsImg}>
              <Image src={Washing} />
            </div>
            <h2 className={styles.addsText}>2 уборные</h2>
          </section>
        </section>
      </section>
      <section className={styles.gridPiece}>
        <section className={styles.gridPicContainer}>
          <Image src={SecondGridPic} />
          <div className={styles.gridPicTextContainer}>
            <h2 className={styles.gridPicText}>Продажа</h2>
          </div>
        </section>
        <h1 className={styles.bathPrice}>฿ 8.000.000</h1>
        <h2 className={styles.rublePrice}>₽ 16.000.000</h2>
        <h1 className={styles.villaInfo}>Вилла от застройщика Tropic Villas</h1>
        <h2 className={styles.villaInfoAdds}>Пхукет, Равайи, пляж, сауна...</h2>
        <section className={styles.adds}>
          <section className={styles.addsContainer}>
            <div className={styles.addsImg}>
              <Image src={MakeBigger} />
            </div>
            <h2 className={styles.addsText}>450 м2</h2>
          </section>
          <section className={styles.addsSecondContainer}>
            <div className={styles.addsImg}>
              <Image src={Swimming} />
            </div>
            <h2 className={styles.addsText}>бассейн</h2>
          </section>
        </section>
        <section className={styles.adds}>
          <section className={styles.addsContainer}>
            <div className={styles.addsImg}>
              <Image src={Bedroom} />
            </div>
            <h2 className={styles.addsText}>3 спальни</h2>
          </section>
          <section className={styles.addsSecondContainer}>
            <div className={styles.addsImg}>
              <Image src={Washing} />
            </div>
            <h2 className={styles.addsText}>2 уборные</h2>
          </section>
        </section>
      </section>
      <section>
        <section className={styles.gridPicContainer}>
          <Image src={ThirdGridPic} />
          <div className={styles.gridPicTextContainer}>
            <h2 className={styles.gridPicText}>Продажа</h2>
          </div>
        </section>
        <h1 className={styles.bathPrice}>฿ 8.000.000</h1>
        <h2 className={styles.rublePrice}>₽ 16.000.000</h2>
        <h1 className={styles.villaInfo}>Вилла от застройщика Tropic Villas</h1>
        <h2 className={styles.villaInfoAdds}>Пхукет, Равайи, пляж, сауна...</h2>
        <section className={styles.adds}>
          <section className={styles.addsContainer}>
            <div className={styles.addsImg}>
              <Image src={MakeBigger} />
            </div>
            <h2 className={styles.addsText}>450 м2</h2>
          </section>
          <section className={styles.addsSecondContainer}>
            <div className={styles.addsImg}>
              <Image src={Swimming} />
            </div>
            <h2 className={styles.addsText}>бассейн</h2>
          </section>
        </section>
        <section className={styles.adds}>
          <section className={styles.addsContainer}>
            <div className={styles.addsImg}>
              <Image src={Bedroom} />
            </div>
            <h2 className={styles.addsText}>3 спальни</h2>
          </section>
          <section className={styles.addsSecondContainer}>
            <div className={styles.addsImg}>
              <Image src={Washing} />
            </div>
            <h2 className={styles.addsText}>2 уборные</h2>
          </section>
        </section>
      </section>
    </section>
  </>
);

export default GridComponent;
