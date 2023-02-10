import styles from './PersonPage.module.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { getApiResours } from "@utils/network";

import PersonInfo from '@components/PersonPage/PersonInfo'
import PersonPhoto from '@components/PersonPage/PersonPhoto'
import PersonLinkBack from '@components/PersonPage/PersonLinkBack'


import { API_PERSON } from "@constants/api";
import { getPeopleImage } from '@services/getPeopleData'

import { withErrorApi } from "@hoc-helpers/withErrorApi";
import PropTypes from "prop-types";

const PersonPage = ({ match, setErrorApi }) => {
    const { id } = useParams();
    const [personInfo, setPersonInfo] = useState(null);
    const [personName, setPersonName] = useState(null);
    const [personPhoto, setPersonPhoto] = useState(null);

    useEffect(() => {
        (async () => {
            const res = await getApiResours(`${API_PERSON}/${id}/`);

            if(res) {
                setPersonInfo([
                    { title: 'Height', data: res.height },
                    { title: 'Mass', data: res.mass},
                    { title: 'Hair color', data: res.hair_color },
                    { title: 'Skin color', data: res.skin_color },
                    { title: 'Eye color', data: res.eye_color },
                    { title: 'Birth Year', data: res.birth_year },
                    { title: 'Gender', data: res.gender }
                ]);

                setPersonName(res.name);
                setPersonPhoto(getPeopleImage(id))

                //res.films

                setErrorApi(false);
            } else {
                setErrorApi(true);
            }
        })();
    }, []);

    return (
        <>
            <PersonLinkBack />

            <div className={styles.wrapper}>
                <span className={styles.person__name}>{personName}</span>

                <div className={styles.container}>
                    <PersonPhoto
                        personPhoto={personPhoto}
                        personName={personName}
                    />

                    {personInfo && <PersonInfo personInfo={personInfo}/> };
                </div>
            </div>
        </>
    )
}

PersonPage.propTypes = {
    setErrorApi: PropTypes.func,
    match: PropTypes.object,
}

export default withErrorApi(PersonPage);