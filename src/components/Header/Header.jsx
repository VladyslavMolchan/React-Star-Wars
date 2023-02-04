import { NavLink } from "react-router-dom";

import styles from './Header.module.css';

const Header = () => {
    return (
        <div>

            <ul className={styles.container}>
                <li className={styles.list__container}><NavLink  to="/" >Home</NavLink></li>
                <li className={styles.list__container}> <NavLink  to="/people" >People</NavLink></li>
            </ul>
        </div>
    )
}

export default Header;
