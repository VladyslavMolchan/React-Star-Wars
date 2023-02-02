import styles from './PeoplePage.module.css';
import { getApiResours } from "../../utils/network";
import { useState, useEffect} from "react";
import { API_PEOPLE } from "../../constants/api";
import { getPeopleId, getPeopleImage } from "../../services/getPeopleData";
import PeopleList from "../../components/PeoplePage/PeopleList";
const PeoplePage = () => {
    const [people, setPeople] = useState(null);


    const getResource = async (url) => {
        const res = await getApiResours(url);

        const peopleList = res.results.map(({ name, url }) => {
            const id = getPeopleId(url);
            const img = getPeopleImage(id)

            console.log(img)

            return {
                id,
                name,
                img
            }
            })

        setPeople(peopleList);
    }

    useEffect(() => {
        getResource(API_PEOPLE)
    }, [])

    return (
        <>
            {people && <PeopleList people={people}/>}
        </>
    )
}

export default PeoplePage;