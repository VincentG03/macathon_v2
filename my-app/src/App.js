// filepath: d:\uni\macathon\macathon_v2\my-app\src\App.js
import React, { useState } from 'react';
import Explore from './Explore';

function App() {
  const [showExplore, setShowExplore] = useState(false);

  return (
    <div>
      <button onClick={() => setShowExplore(!showExplore)}>
        {showExplore ? 'Go to Home' : 'Go to Explore'}
      </button>
      {showExplore ? <Explore /> : (
        <div>
          <h1>Sales Data</h1>
          <ul>
            {/* Example sales data rendering */}
            <li>Sale ID: 1, Total Amount: $100</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;