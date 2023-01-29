
export const getApiResours = async (url) => {
    try {
        const res = await fetch(url);

            if (!res.ok) {
                console.error('Ошибка', res.status);
                return false;
            }
        return await res.json();
    } catch (error) {
        console.error(error.message)
        return false;
    }
}

/* (async () => {
    const body = await getApiResours(SWAPI_ROOT + SWAPI_PEOPLE);
    console.log(body)
})();

 I can use promise as well
getApiResours(SWAPI_ROOT + SWAPI_PEOPLE)
    .then(body => console.log(body)) */
