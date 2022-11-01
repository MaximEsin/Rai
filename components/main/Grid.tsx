import GridComponent from "./GridComponent";
import styles from "../../styles/Main.module.scss";

const Grid = () => (
  <>
    <section className={styles.grid}>
      <section className={styles.gridItemLeftSide}>
        <GridComponent />
      </section>
      <section className={styles.gridItemRightSide}>
        <GridComponent />
      </section>
      <section className={styles.gridItemLeftSide}>
        <GridComponent />
      </section>
      <section className={styles.gridItemRightSide}>
        <GridComponent />
      </section>
    </section>
  </>
);

export default Grid;
