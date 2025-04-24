import React, { useEffect, useState } from 'react';

function App() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/sales')
      .then(res => res.json())
      .then(data => setSales(data))
      .catch(err => console.error('Error fetching sales:', err));
  }, []);

  return (
    <div>
      <h1>Sales Data</h1>
      <ul>
        {sales.map(sale => (
          <li key={sale._id}>
            Sale ID: {sale._id}, Total Amount: {sale.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;