const initialState = {
  isSelected: false,
  selection: [],
  cityPopUp: true,
  locationDetails: [],
  selectedRestaurant: [{name: null}],
  restaurantDetails: []
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
        
      default:
        return state;
    }
  }
  