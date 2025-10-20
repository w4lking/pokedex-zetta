import Image from "next/image";
import styles from "./NavBar.module.css";

export default function NavBar() {
    return (
        <nav className={styles.navbar}>
            <Image
                src="/images/Pokemon_logo.png"
                alt="Pokemon"
                className={styles.logo}
                width={180}
                height={60}
            />
        </nav>
    );
}
