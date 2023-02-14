import  styles from './Favorites.page.module.css';
import { useSelector } from "react-redux";

const FavoritesPage = () => {
    const storeData = useSelector(state => state.favoriteReducer);
    console.log(storeData)

    return (
        <>
            FavoritesPage
        </>
    )
}

export default FavoritesPage;

