const initialState = {
  isSelected: false,
  selection: [],
  cityPopUp: true,
  locationDetails: [],
  selectedRestaurant: []
}
export default function(state = initialState, action) {
    switch (action.type) {
      case 'SELECTED_CITY':
        return { ...state, isSelected: action.isSelected, selection: action.payload }

      case 'FETCH_LOCATION_SUCCESS':
        return { ...state, locationDetails: action.payload}

      case 'RESET_LOCATION':
        return { ...state, locationDetails: []}
      
      case 'SELECTED_RESTAURANT':
        return { ...state, selectedRestaurant: action.payload}
      default:
        return state;
    }
  }
  