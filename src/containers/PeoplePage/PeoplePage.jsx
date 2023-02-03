import styles from './PeoplePage.module.css';
import { getApiResours } from "@utils/network";
import { useState, useEffect} from "react";
import { API_PEOPLE } from "@constants/api";
import { getPeopleId, getPeopleImage } from "@services/getPeopleData";
import PeopleList from "@components/PeoplePage/PeopleList";
import { withErrorApi } from "@hoc-helpers/withErrorApi";

const PeoplePage = ( { setErrorApi }) => {
    const [people, setPeople] = useState(null);

    const getResource = async (url) => {
        const res = await getApiResours(url);

        if(res) {
            const peopleList = res.results.map(({ name, url }) => {
                const id = getPeopleId(url);
                const img = getPeopleImage(id)

                return {
                    id,
                    name,
                    img
                }
            })

            setPeople(peopleList);
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }
    }

    useEffect(() => {
        getResource(API_PEOPLE)
    }, [])

    return (
        <>
            <h2>Navigation</h2>
            {people && <PeopleList people={people}/>}

        </>
    )
}

export default withErrorApi(PeoplePage);