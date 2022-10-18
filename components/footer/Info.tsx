import styles from "../../styles/Footer.module.scss";

const Info = () => (
    <>
    <section>
        <ul className={styles.infoUl}>
            <li className={styles.liOne}>На карте</li>
            <li className={styles.liTwo}>Сообщения</li>
            <li className={styles.liThree}>Избранное</li>
            <li className={styles.liFour}>Профиль</li>
            <li className={styles.liFive}>Пользовательское соглашение</li>
            <li className={styles.liSix}>Политика обработки данных</li>
            <li className={styles.liSeven}>Юридическая документация</li>
            <li className={styles.liEight}>Обратная связь</li>
            </ul>
            </section>
            </>
);

export default Info;