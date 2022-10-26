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
        <ul className={styles.nav}>
            <li className={styles.listItem}>
            <div className={styles.img}>
                    <Image
                    src={LMarker} />
                </div>
                <h2 className={styles.navText}>На карте</h2>
            </li>
            <li className={styles.listItem}>
                <div className={styles.imgWMarker}>
                <div>
                     <Image
                    src={Mmarker} />
                </div>
                <div className={styles.marker}>
                    <Image
                    src={Marker} />
                </div>
                </div>
                <h2 className={styles.navText}>Сообщения</h2>
            </li>
            <li className={styles.listItem}>
                <div className={styles.img}>
                    <Image
                    src={heart} />
                </div>
                <h2 className={styles.navText}>Избранное</h2>
            </li>
            <li className={styles.listItem}>
                <div className={styles.img}>
                    <Image
                    src={user} />
                </div>
                <h2 className={styles.navText}>Профиль</h2>
            </li>
        </ul>
    </nav>
    </>
);

export default Navbar;