import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const History = () => {
  const history = useSelector((state) => state.history);

  return (
    <div>
      <h2 className="text-center mt-3">Search History</h2>
      <ul className="p5">
        {history.map((word, index) => (
          <li key={index}>
            <h3>{word}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
