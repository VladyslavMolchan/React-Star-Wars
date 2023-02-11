import { HTTP, HTTPS } from "@constants/api";

/**
 * Change URL from HTTP to HTTPS
 * @param {String} url - url for change
 * @returns {String} - url from HTTPS
 */
export const changeHTTP = url => {
    const result = url ? url.replace(HTTP, HTTPS) : url;

    return result;
}

/**
 * Send a Fetch
 * @param {String} url - url for Fetch
 * @returns {Promise} - url result Fetch
 */
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
export const makeConcurrentRequest = async (url) => {
    const res = await Promise.all(url.map(res => {
        return fetch(res).then(res => res.json())
    }))

    return res;
}







