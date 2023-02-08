import styles from './PersonPage.module.css';
import { useEffect} from "react";
import { useParams } from "react-router";

import { getApiResours } from "@utils/network";
import { API_PERSON } from "@constants/api";

const PersonPage = ({match}) => {
    const { id } = useParams();

    useEffect(() => {
        (async () => {
            const res = await getApiResours(`${API_PERSON}/${id}/`);
            console.log(`${API_PERSON}/${id}/`, res)
        })();
    }, []);

    return (
        <>

        </>
    )
}

export default PersonPage;