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

export const fetchLocation = queryParam => {
    return async function(dispatch) {
        try {
            dispatch(fetchLocationInprogress(true))
            let data = await callLocationApi(queryParam);
            var json = await data.json();
            dispatch(fetchLocationSuccess(json.location_suggestions));
            return json.location_suggestions
        } catch (error) {
            console.log(error)
            return dispatch(fetchLocationFailure());
        } finally {
            dispatch(fetchLocationInprogress(false))
        }
    }
}; 

const fetchLocationInprogress = (flag) => {
    return {
        type: 'FETCH_LOCATION_INPROGRESS',
        payload: flag
    }
}

const fetchLocationSuccess = (response) => {
    return {
        type: 'FETCH_LOCATION_SUCCESS',
        payload: response
    }
}

const fetchLocationFailure = (response) => {
    return {
        type: 'FETCH_LOCATION_FAILURE',
    }
}

export const resetLocationDetails = () => {
    return {
        type: 'RESET_LOCATION'
    }
}

const callLocationApi = (queryParam) => {
    const url = `https://developers.zomato.com/api/v2.1/locations?query=${queryParam}`
    const method = 'get'
    const userKey = 'a61b26646d1403aee60d8421452ba63c'
    return fetch(url, {
        method: method,
        headers: new Headers({
            'user-key': userKey
        })
    })
}

export const fetchRestaurantDetails = queryParam => {
    return async function(dispatch) {
        try {
            dispatch(fetchRestaurantDetailsInprogress(true))
            const resId = queryParam[0].R.res_id
            let data = await callRestaurantDetailsApi(resId);
            var json = await data.json();
            dispatch(fetchRestaurantDetailsSuccess(json));
            return json
        } catch (error) {
            console.log(error)
            return dispatch(fetchRestaurantDetailsFailure());
        } finally {
            dispatch(fetchRestaurantDetailsInprogress(false))
        }
    }
}; 

const fetchRestaurantDetailsInprogress = (flag) => {
    return {
        type: 'FETCH_RESTAURANT_DETAILS_INPROGRESS',
        payload: flag
    }
}

const fetchRestaurantDetailsSuccess = (response) => {
    return {
        type: 'FETCH_RESTAURANT_DETAILS_SUCCESS',
        payload: response
    }
}

const fetchRestaurantDetailsFailure = (response) => {
    return {
        type: 'FETCH_LOCATION_FAILURE',
    }
}

export const resetRestaurantDetails = () => {
    return {
        type: 'RESET_RESTAURANT_DETAILS'
    }
}

const callRestaurantDetailsApi = (queryParam) => {
    const url = `https://developers.zomato.com/api/v2.1/restaurant?res_id=${queryParam}`
    const method = 'get'
    const userKey = 'a61b26646d1403aee60d8421452ba63c'
    return fetch(url, {
        method: method,
        headers: new Headers({
            'user-key': userKey
        })
    })
}

export const fetchRestaurant = queryParam => {
    return async function(dispatch, getState) {
        try {
            const { search } = getState()
            let data = await callSearchRestaurantApi(queryParam, search.locationDetails[0].entity_id);
            var json = await data.json();
            return getRestaurant(json.restaurants)
        } catch (error) {
            console.log(error)
        }
    }
};


const callSearchRestaurantApi = (queryParam, entityId) => {
    const url = `https://developers.zomato.com/api/v2.1/search?entity_id=${entityId}&q=${queryParam}`
    const method = 'get'
    const userKey = 'a61b26646d1403aee60d8421452ba63c'
    return fetch(url, {
        method: method,
        headers: new Headers({
            'user-key': userKey
        })
    })
}

const getRestaurant = (restaurants) => {
    const updatedObject = []
    restaurants.forEach((obj) => {
        updatedObject.push(obj.restaurant)
    })
    return updatedObject
}

export const selectedRestaurant = (selection) => {
    return {
        type: 'SELECTED_RESTAURANT',
        payload: selection,
    }
}