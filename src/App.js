import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./composents/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Nav1 from "./pages/Nav1/Nav1";
import Nav2 from "./pages/Nav2/Nav2";
import Nav3 from "./pages/Nav3/Nav3";
import Nav4 from "./pages/Nav4/Nav4";
import Nav5 from "./pages/Nav5/Nav5";
import Nav6 from "./pages/Nav6/Nav6";
import Nav7 from "./pages/Nav7/Nav7";
import Nav8 from "./pages/Nav8/Nav8";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nav1" element={<Nav1 />} />
          <Route path="/nav2" element={<Nav2 />} />
          <Route path="/nav3" element={<Nav3 />} />
          <Route path="/nav4" element={<Nav4 />} />
          <Route path="/nav5" element={<Nav5 />} />
          <Route path="/nav6" element={<Nav6 />} />
          <Route path="/nav7" element={<Nav7 />} />
          <Route path="/nav8" element={<Nav8 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
