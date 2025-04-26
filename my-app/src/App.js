import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Explore from "./Explore";
import RocketSimulator from "./HPR_VE";
import TrainYourOwnModel from "./MDN_VE";
import MSMFExperience from './MSMF_VE';

function App() {
  return (
    <Router basename="/macathon_v2">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/rocket-simulator" element={<RocketSimulator />} />
        <Route path="/ai-virtual-experience" element={<TrainYourOwnModel />} />
        <Route path="/finance-virtual-experience" element={<MSMFExperience />} />
      </Routes>
    </Router>
  );
}

export default App;
