import axios from "axios";

export const fetchWordDetailsSuccess = (wordDetails) => {
  return {
    type: "FETCH_WORD_DETAILS_SUCCESS",
    payload: wordDetails,
  };
};

export const fetchWordDetailsError = (error) => {
  return {
    type: "FETCH_WORD_DETAILS_ERROR",
    payload: error,
  };
};

export const addWordToHistory = (word) => {
  return {
    type: "ADD_WORD_TO_HISTORY",
    payload: word,
  };
};

export const fetchWordDetails = (word) => {
  return (dispatch) => {
    dispatch({ type: "FETCH_WORD_DETAILS_START" });

    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((response) => {
        dispatch({ type: "FETCH_WORD_DETAILS_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_WORD_DETAILS_ERROR", payload: error.message });
      });
  };
};
