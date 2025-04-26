import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Explore from "./Explore";
import RocketSimulator from "./HPR_VE";
import TrainYourOwnModel from "./MDN_VE";
import MSMFExperience from './MSMF_VE';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/explore" element={<Explore />} /> {/* Explore route */}
        <Route path="/rocket-simulator" element={<RocketSimulator />} /> {/* Rocket Simulator route */}
        <Route path="/ai-virtual-experience" element={<TrainYourOwnModel />} />
        <Route path="/finance-virtual-experience" element={<MSMFExperience />} />
      </Routes>
    </Router>
  );
}

export default App;