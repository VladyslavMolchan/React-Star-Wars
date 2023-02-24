import PropTypes from "prop-types";
import styles from './SearchPage.module.css';
import {useEffect, useState} from "react";

import { getPeopleId, getPeopleImage } from "@services/getPeopleData";
import { withErrorApi } from "@hoc-helpers/withErrorApi";
import { getApiResource } from "@utils/network";
import { API_SEARCH } from "@constants/api";

import SearchPageInfo from "@components/SearchPage/SearchPageInfo";

const SearchPage = ({ setErrorApi }) => {
    const [inputSearchValue, setInputSearchValue] = useState('');
    const[people, setPeople] = useState([]);

    const getResponse = async param  => {
        const res = await getApiResource(API_SEARCH+param);

        if(res) {
            const peopleList = res.results.map(({ name, url }) => {
                const id = getPeopleId(url);
                const img = getPeopleImage(id);

                return {
                    id,
                    name,
                    img,
                }
            });
            setPeople(peopleList);

            setErrorApi(false);
        } else {
            setErrorApi(true);
        }
    }

    useEffect(() => {
        getResponse('');
    }, []);

    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputSearchValue(event.target.value);

        getResponse(value);
    }

    return (
        <>
            <h1 className='header__text' style={{color:"white"}}>Search</h1>
            <input
                type="text"
                value={inputSearchValue}
                onChange={handleInputChange}
                placeholder='Search...'
            />
            <SearchPageInfo people={people}/>
        </>
    )
}

SearchPage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(SearchPage);