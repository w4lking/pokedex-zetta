import styles from "./Footer.module.css";

const getYear = () => {
    return new Date().getFullYear();
}

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>© {getYear()} Pokedex App. All rights reserved.</p>
        </footer>
    );
}