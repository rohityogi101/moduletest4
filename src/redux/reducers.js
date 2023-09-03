const initialState = {
  history: [],
  wordDetails: null,
  isLoading: false,
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_WORD_TO_HISTORY":
      return {
        ...state,
        history: [...state.history, action.payload],
      };
    case "FETCH_WORD_DETAILS_START":
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case "FETCH_WORD_DETAILS_SUCCESS":
      return {
        ...state,
        wordDetails: action.payload,
        isLoading: false,
        error: null,
      };
    case "FETCH_WORD_DETAILS_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
