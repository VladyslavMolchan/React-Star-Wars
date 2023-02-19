import icon from './img/fav.png'
import styles from './favorite.module.css';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {useEffect, useState} from "react";

const Favorite = () => {
    const [count, setCount] = useState(0);

    const storeData = useSelector(state => state.favoriteReducer);

    useEffect(() => {
        const length = Object.keys(storeData).length;
        length.toString().length > 2 ? setCount('...') : setCount(length);
    },[setCount,storeData]);

    return (
        <div className={styles.container}>
            <Link to="/favorites">
                <span className={styles.counter}>{count}</span>
                <img className={styles.icon} src={icon} alt="Favorites"/>
            </Link>
        </div>
    )
}

export default Favorite;