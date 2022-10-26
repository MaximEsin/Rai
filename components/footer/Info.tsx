import styles from "../../styles/Footer.module.scss";

const Info = () => (
    <>
    <nav className={styles.footerNav}>
        <ul className={styles.infoUl}>
            <div>
            <li>На карте</li>
            <li>Сообщения</li>
            <li>Избранное</li>
            <li>Профиль</li>
            </div>

            <div className={styles.infoSecondBlock}>
            <li>Пользовательское соглашение</li>
            <li>Политика обработки данных</li>
            <li>Юридическая документация</li>
            <li>Обратная связь</li>
            </div>
            </ul>
            </nav>
            </>
);

export default Info;