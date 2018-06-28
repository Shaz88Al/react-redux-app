export default function(state = { }, action) {
    switch (action.type) {
      case "TEST_ACTION":
        return { ...state, testData: action.payload}
      default:
        return state;
    }
  }
  