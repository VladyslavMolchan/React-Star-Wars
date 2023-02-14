import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { setPersonToFavorite, removePersonFromFavorite } from '@store/actions'

import styles from './PersonPhoto.module.css';



const PersonPhoto = ({
         personId,
         personPhoto,
         personName,
         personFavorite,
         setPersonFavorite

}) => {
    const dispatch = useDispatch();


    const dispatchFavoritepiople = () => {
        if(personFavorite) {
            dispatch(removePersonFromFavorite(personId));
            setPersonFavorite(false);
        } else {
            dispatch(setPersonToFavorite({
                [personId]: {
                    name: personName,
                    img: personPhoto
                },
            }));
            setPersonFavorite(true);
        }
    }

    return (
        <>
            <div className={styles.container}>
                <img className={styles.photo} src={personPhoto} alt={personName} />
            </div>

            <button onClick={dispatchFavoritepiople}>
                {personFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
            </button>
            Удалить из избранного
            Добавить в избранное
        </>
    )
}

PersonPhoto.propTypes = {
    personId: PropTypes.string,
    personPhoto: PropTypes.string,
    personName: PropTypes.string,
    personFavorite: PropTypes.bool,
    setPersonFavorite: PropTypes.func,

}

export default PersonPhoto;