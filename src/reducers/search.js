const initialState = {
  isSelected: false,
  selection: [],
  cityPopUp: true,
  locationDetails: [],
  selectedRestaurant: [{name: null}],
  restaurantDetails: [],
  cuisinesTypes: [],
  categoryTypes: [],
  searchResult: [],
  sortBy: 'cost',
  order: 'asc',
  searchObject: {}
}
export default function(state = initialState, action) {
    switch (action.type) {
      case 'SELECTED_CITY':
        return { 
          ...state, 
          isSelected: action.isSelected, 
          selection: action.payload, 
          cityPopUp: action.cityPopUp 
        }

      case 'FETCH_LOCATION_SUCCESS':
        return { ...state, locationDetails: action.payload }

      case 'RESET_LOCATION':
        return { ...state, locationDetails: [] }
      
      case 'SELECTED_RESTAURANT':
        return { ...state, selectedRestaurant: action.payload }
      
      case 'FETCH_RESTAURANT_DETAILS_SUCCESS':
        return { ...state, restaurantDetails: action.payload }
      
      case 'FETCH_CUISINES_SUCCESS':
        return { ...state, cuisinesTypes: action.payload}

      case 'FETCH_CATEGORY_SUCCESS':
        return { ...state, categoryTypes: action.payload}
      
      case 'FETCH_SEARCH_RESULT_SUCCESS':
        return { ...state, searchResult: action.payload }

      case 'RESET_SEARCH_RESULT':
        return { ...state, searchResult: [] }
      
      case 'UPDATE_ORDER':
        return { ...state, order: action.payload}
      
      case 'UPDATE_SORT':
        return { ...state, sortBy: action.payload}

      case 'SEARCH_OBJECT':
        return { ...state, searchObject: action.payload}

      default:
        return state;
    }
  }
  