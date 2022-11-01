import Image from "next/image";
import styles from "../../styles/Main.module.scss";
import LineIcon from "../../public/Line.svg";
import LeadLine from "../../public/LeadLine.svg";

const Line = () => (
  <>
    <section className={styles.lineContainer}>
      <div className={styles.line}>
        <Image src={LineIcon} />
        <div className={styles.leadLine}>
          <Image src={LeadLine} />
        </div>
      </div>
    </section>
  </>
);

export default Line;
