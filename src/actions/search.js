import { getInnerObject } from './../utils'
export const fetchCity = queryParam => {
    return async function(dispatch) {
        try {
            dispatch(fetchCityInprogress(true))
            let data = await callCityApi(queryParam);
            let json = await data.json();
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
            let json = await data.json();
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
            let json = await data.json();
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
            let json = await data.json();
            return getInnerObject(json.restaurants, 'restaurant')
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

export const fetchCuisines = queryParam => {
    return async function(dispatch, getState) {
        try {
            dispatch(fetchCuisinesInprogress(true))
            let data = await callCuisinesApi(queryParam);
            let json = await data.json();
            const updatedObject = getInnerObject(json.cuisines, 'cuisine', 'objectType')
            dispatch(fetchCuisinesSuccess(updatedObject));
            return json
        } catch (error) {
            console.log(error)
            return dispatch(fetchCuisinesFailure());
        } finally {
            dispatch(fetchCuisinesInprogress(false))
        }
    }
}; 

const fetchCuisinesInprogress = (flag) => {
    return {
        type: 'FETCH_CUISINES_INPROGRESS',
        payload: flag
    }
}

const fetchCuisinesSuccess = (response) => {
    return {
        type: 'FETCH_CUISINES_SUCCESS',
        payload: response
    }
}

const fetchCuisinesFailure = (response) => {
    return {
        type: 'FETCH_CUISINES_FAILURE',
    }
}

const callCuisinesApi = (queryParam) => {
    const url = `https://developers.zomato.com/api/v2.1/cuisines?city_id=${queryParam}`
    const method = 'get'
    const userKey = 'a61b26646d1403aee60d8421452ba63c'
    return fetch(url, {
        method: method,
        headers: new Headers({
            'user-key': userKey
        })
    })
}

export const fetchCategory = () => {
    return async function(dispatch) {
        try {
            dispatch(fetchCategoryInprogress(true))
            let data = await callCategoryApi();
            let json = await data.json();
            const updatedObject = getInnerObject(json.categories, 'categories', 'objectType')
            dispatch(fetchCategorySuccess(updatedObject));
            return json
        } catch (error) {
            console.log(error)
            return dispatch(fetchCategoryFailure());
        } finally {
            dispatch(fetchCategoryInprogress(false))
        }
    }
}; 

const fetchCategoryInprogress = (flag) => {
    return {
        type: 'FETCH_CATEGORY_INPROGRESS',
        payload: flag
    }
}

const fetchCategorySuccess = (response) => {
    return {
        type: 'FETCH_CATEGORY_SUCCESS',
        payload: response
    }
}

const fetchCategoryFailure = (response) => {
    return {
        type: 'FETCH_CATEGORY_FAILURE',
    }
}

const callCategoryApi = () => {
    const url = `https://developers.zomato.com/api/v2.1/categories`
    const method = 'get'
    const userKey = 'a61b26646d1403aee60d8421452ba63c'
    return fetch(url, {
        method: method,
        headers: new Headers({
            'user-key': userKey
        })
    })
}

export const fetchSearchResult = (selection) => {
    return async function(dispatch, getState) {
        try {
            dispatch(fetchSearchResultInprogress(true))
            const { locationDetails, sortBy, order } = getState().search
            let data = await callSearchResultApi(selection, locationDetails[0].entity_id, sortBy, order);
            let json = await data.json();
            const updatedObject = getInnerObject(json.restaurants, 'restaurant')
            dispatch(fetchSearchResultSuccess(updatedObject));
            return json
        } catch (error) {
            console.log(error)
            return dispatch(fetchSearchResultFailure());
        } finally {
            dispatch(fetchSearchResultInprogress(false))
        }
    }
}; 

const fetchSearchResultInprogress = (flag) => {
    return {
        type: 'FETCH_SEARCH_RESULT_INPROGRESS',
        payload: flag
    }
}

const fetchSearchResultSuccess = (response) => {
    return {
        type: 'FETCH_SEARCH_RESULT_SUCCESS',
        payload: response
    }
}

const fetchSearchResultFailure = (response) => {
    return {
        type: 'FETCH_SEARCH_RESULT_FAILURE',
    }
}

const callSearchResultApi = (selection, entity_id,sortBy, order) => {
    const queryParamKey = selection[0].objectType
    const queryParamValue = selection[0].id
    const url = `https://developers.zomato.com/api/v2.1/search?entity_id=${entity_id}&${queryParamKey}=${queryParamValue}&sort=${sortBy}&order=${order}`
    const method = 'get'
    const userKey = 'a61b26646d1403aee60d8421452ba63c'
    return fetch(url, {
        method: method,
        headers: new Headers({
            'user-key': userKey
        })
    })
}

export const resetSearch = () => {
    return {
        type: 'RESET_SEARCH_RESULT'
    }
}

export const searchObject = (selection) => {
    return {
        type: 'SEARCH_OBJECT',
        payload: selection
    }
}

export const updateSort = (value) => {
    return {
        type: 'UPDATE_SORT',
        payload: value
    }
}

export const updateOrder = (value) => {
    return {
        type: 'UPDATE_ORDER',
        payload: value
    }
}