import React from "react";
import { useSelector } from "react-redux";
import Loader from "./Loader/Loader";

const WordDetails = () => {
  const { history, wordDetails, isLoading, error } = useSelector((state) => state);
  // console.log(wordDetails);

  if (isLoading) {
    return <Loader />;
  }
  
  if (!wordDetails) {
    return <Loader />;
  }
  if (error) {
    return <h3 className="text-center mt-5 text-danger">No Definitions Found!</h3>;
  }
  return (
    <div className="meaningDiv">
      <h3 className="text-center mt-3 text-success">Result for : {wordDetails[0].word}</h3>
      {/* <p>Phonetic: {wordDetails[0].phonetic}</p> */}
      {wordDetails[0].phonetics && (
        <div>
          <h4>Phonetics:</h4>
          {wordDetails[0].phonetics.map((phonetic, index) => (
            <div key={index}>
              {/* <p>Text: {phonetic.text}</p> */}
              <audio controls>
                <source src={phonetic.audio} type="audio/mpeg" />
              </audio>
            </div>
          ))}
        </div>
      )}
      <h4>Meanings:</h4>
      {wordDetails[0].meanings.map((meaning, index) => (
        <div key={index}>
          <h5>Part of Speech: {meaning.partOfSpeech}</h5>
          <ul>
            {meaning.definitions.map((definition, i) => (
              <li key={i}>
                <b> Definition:</b> {definition.definition}
                {definition.synonyms && (
                  <p>
                    <b>Synonyms:</b> {definition.synonyms.join(", ")}
                  </p>
                )}
                {definition.antonyms && (
                  <p>
                    <b>Antonyms:</b> {definition.antonyms.join(", ")}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default WordDetails;
