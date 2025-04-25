// filepath: src/App.js
import React, { useState } from 'react';
import Explore from './Explore';
import Home from './Home';

function App() {
  const [showExplore, setShowExplore] = useState(false);

  return (
    <div className="App" style={{ fontFamily: 'sans-serif' }}>
      {showExplore ? (
        <Explore />
      ) : (
        <Home goToExplore={() => setShowExplore(true)} />
      )}
    </div>
  );
}

export default App;
