import { Link } from "react-router-dom";
import styles from "../Header/styles.module.css"

export default function Header() {
    return (
        <div 
            className={styles.wrapper}
        >
            <Link 
                className={styles.logo}
                to="/"
            >
                GERENCIADOR DE STOCK
            </Link>
            <nav 
                className={styles.navBar}
            >
                <Link to="/">inicio</Link>
                <Link to="items">Items</Link>
            </nav>
        </div>
    )
}