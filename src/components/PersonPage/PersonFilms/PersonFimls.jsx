import { useState, useEffect } from "react";
import { makeConcurrentRequest, changeHTTP } from '@utils/network';
import PropTypes from "prop-types";
import styles from './PersonFilms.module.css';


const PersonFimls = ({personFilms}) => {
    const [fimlsName, setFilmsName] = useState([]);

    useEffect(() => {
        (async() => {
            const filmsHTTPS = personFilms.map(url => changeHTTP(url));
            const response = await makeConcurrentRequest(filmsHTTPS);
            setFilmsName(response);
        })();
    },[]);

    return (
        <div className={styles.wrapper}>
            <ul className={styles.list__container}>
                {fimlsName
                    .sort((a, z) => a.episode_id-z.episode_id)
                    .map(({title, episode_id}) =>
                        <li className={styles.list__item} key={episode_id}>
                            <span className={styles.item__episode}>episode { episode_id }</span>
                            <span className={styles.item__colon}> : </span>
                            <span className={styles.item__title}>{title}</span>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

PersonFimls.propTypes = {
    personFilms: PropTypes.array
}
export default PersonFimls;