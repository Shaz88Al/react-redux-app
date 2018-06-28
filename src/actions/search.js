export const fetchCity = queryParam => {
    return async function(dispatch) {
        try {
            dispatch(fetchCityInprogress(true))
            let data = await callCityApi(queryParam);
            var json = await data.json();
            dispatch(fetchCitySuccess(json.location_suggestions));
            return json.location_suggestions
        } catch (error) {
            console.log(error)
            return dispatch(fetchCityFailure());
        } finally {
            dispatch(fetchCityInprogress(false))
        }
    }
};

const fetchCityInprogress = (flag) => {
    return {
        type: 'FETCH_CITY_INPROGRESS',
        payload: flag
    }
}

const fetchCitySuccess = (response) => {
    return {
        type: 'FETCH_CITY_SUCCESS',
        payload: response
    }
}

const fetchCityFailure = (response) => {
    return {
        type: 'FETCH_CITY_FAILURE',
    }
}

const callCityApi = (queryParam) => {
    const url = `https://developers.zomato.com/api/v2.1/cities?q=${queryParam}`
    const method = 'get'
    const userKey = 'a61b26646d1403aee60d8421452ba63c'
    return fetch(url, {
        method: method,
        headers: new Headers({
            'user-key': userKey
        })
    })
}

export const selectedCity = (selection) => {
    return {
        type: 'SELECTED_CITY',
        isSelected: selection.length ? true : false,
        payload: selection,
        cityPopUp: false
    }
}