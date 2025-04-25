import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Explore from "./Explore";
import RocketSimulator from "./HPR_VE";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/explore" element={<Explore />} /> {/* Explore route */}
        <Route path="/rocket-simulator" element={<RocketSimulator />} /> {/* Rocket Simulator route */}
      </Routes>
    </Router>
  );
}

export default App;