const initialState = {
  isSelected: false,
  selection: [],
  cityPopUp: true
}
export default function(state = initialState, action) {
    switch (action.type) {
      case "SELECTED_CITY":
        return { ...state, isSelected: action.isSelected, selection: action.payload }
      default:
        return state;
    }
  }
  