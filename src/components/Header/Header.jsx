import { NavLink } from "react-router-dom";
import Favorite from "@components/favorite";
import styles from './Header.module.css';

const Header = () => {
    return (
        <div>

            <ul className={styles.container}>
                <li className={styles.list__container}><NavLink  to="/" >Home</NavLink></li>
                <li className={styles.list__container}> <NavLink  to="/people/?page=1" >People</NavLink></li>
                <li className={styles.list__container}> <NavLink  to="/not-found" >Not found</NavLink></li>
                <Favorite />
            </ul>

        </div>
    )
}

export default Header;
