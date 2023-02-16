import  styles from './Favorites.page.module.css';
import { useSelector } from "react-redux";
import {useEffect, useState} from "react";

import PeopleList from "@components/PeoplePage/PeopleList";

const FavoritesPage = () => {
    const [people, setPeople] = useState([]);

    const storeData = useSelector(state => state.favoriteReducer);


    useEffect(() => {
        const arr = Object.entries(storeData);

        if (arr.length) {
            const res = arr.map(item => {
                return {
                    id: item[0],
                    ...item[1]
                }
            })
            setPeople(res);
        }
    },[storeData]);

    return (
        <>
            <h1 className='header__text'> FavoritesPage</h1>
            {people.length
            ?<PeopleList people={people} />
            : <h2 className={styles.comment}>No data</h2>
            }

        </>
    )
}

export default FavoritesPage;

