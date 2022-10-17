import Image from "next/image";
import LMarker from "../../public/location-marker.svg";
import styles from "../../styles/Header.module.scss";
import Mmarker from "../../public/mail.svg";
import Marker from "../../public/marker.svg";
import heart from "../../public/heart.svg";
import user from "../../public/user-circle.svg";

const Navbar = () => (
    <>
    <nav>
        <ul>
            <li className={styles.listItem}>
                <div className={styles.IOne}>
                    <Image
                    src={LMarker} />
                </div>
                <h2 className={styles.TOne}>На карте</h2>
            </li>
            <li className={styles.listItem}>
                <div className={styles.ITwo}>
                     <Image
                    src={Mmarker} />
                </div>
                <div className={styles.marker}>
                    <Image
                    src={Marker} />
                </div>
                <h2 className={styles.TTwo}>Сообщения</h2>
            </li>
            <li className={styles.listItem}>
                <div className={styles.IThree}>
                    <Image
                    src={heart} />
                </div>
                <h2 className={styles.TThree}>Избранное</h2>
            </li>
            <li className={styles.listItem}>
                <div className={styles.IFour}>
                    <Image
                    src={user} />
                </div>
                <h2 className={styles.TFour}>Профиль</h2>
            </li>
        </ul>
    </nav>
    </>
);

export default Navbar;