import "./App.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import History from "./components/History";
import WordDetails from "./components/WordDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        {/* <Route path="/word/:word" element={<WordDetails />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
