// filepath: src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Explore from './Explore';
import RocketSimulator from "./HPR_VE";

function App() {
  return (
    <Routes>
      {/* Landing at “/” shows Home */}
      <Route path="/" element={<Home />} />
      {/* “/explore” shows the Explore page */}
      <Route path="/explore" element={<Explore />} />
    </Routes>
  );
}

export default App;