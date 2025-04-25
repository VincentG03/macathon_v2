// filepath: src/App.js
import React, { useState } from 'react';
import Explore from './Explore';
import Home from './Home';

function App() {
  const [showExplore, setShowExplore] = useState(false);

  const goToExplore = () => setShowExplore(true);
  const goToHome = () => setShowExplore(false);
  const refreshExplore = () => setShowExplore(false) || setTimeout(() => setShowExplore(true), 0);

  return (
    <div className="App" style={{ fontFamily: 'sans-serif' }}>
      {showExplore ? (
        <Explore goToHome={goToHome} refreshExplore={refreshExplore} />
      ) : (
        <Home goToExplore={goToExplore} />
      )}
    </div>
  );
}

export default App;
