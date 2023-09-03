// src/components/Home.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWordDetails, addWordToHistory } from "../redux/actions";
import WordDetails from "./WordDetails";
import Loader from "./Loader/Loader";

const Home = () => {
  const dispatch = useDispatch();
  const { history, wordDetails, isLoading, error } = useSelector((state) => state);
  const [word, setWord] = useState("");

  const handleSearch = () => {
    dispatch(fetchWordDetails(word));
    dispatch(addWordToHistory(word));
    setWord("");
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      // setInputValue(value);
      setWord("");
    }
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-center mt-5">
        <input className="col-md-4 px-4 py-1" type="text" placeholder="Enter a word" value={word} onChange={(e) => setWord(e.target.value)} onKeyDown={handleInputKeyDown} />
        <button className="btn btn-dark" onClick={handleSearch}>
          Search
        </button>
      </div>
      {isLoading && <Loader />}
      {wordDetails && <WordDetails />}
      <h3 className="text-center mt-5">{error && error}</h3>
    </>
  );
};

export default Home;
