import React, { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer, Brush
} from 'recharts';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const RocketSimulator = () => {
    const navigate = useNavigate();
    
    const [thrust, setThrust] = useState(1000);
    const [burnTime, setBurnTime] = useState(10);
    const [mass, setMass] = useState(50);
    const [dragCoefficient, setDragCoefficient] = useState(0.5);
    const [area, setArea] = useState(0.1);
    const [parachuteArea, setParachuteArea] = useState(20);
    const [parachuteCd, setParachuteCd] = useState(1.5);
    const [parachuteDeployHeight, setParachuteDeployHeight] = useState(500);
    const [altitudes, setAltitudes] = useState([]);
  
    const g = 9.81;
    const timeStep = 0.25;
  
    const simulateFlight = () => {
      let velocity = 0;
      let altitude = 0;
      let time = 0;
      const trajectory = [];
    
      let isParachuteDeployed = false;
    
      // Powered flight (while burning fuel)
      while (time <= burnTime) {
        const dragForce = 0.5 * dragCoefficient * area * velocity ** 2;
        const thrustForce = thrust;
        const gravityForce = mass * g;
        const netForce = thrustForce - gravityForce - dragForce;
        const acceleration = netForce / mass;
    
        velocity += acceleration * timeStep;
        altitude += velocity * timeStep;
    
        if (altitude < 0) {
          altitude = 0;
          trajectory.push({ time, altitude });
          break;
        }
    
        trajectory.push({ time, altitude });
        time += timeStep;
      }
    
      // Coasting & falling flight
      while (altitude > 0) {
        // Check for apogee — if velocity has just become negative
        if (!isParachuteDeployed && velocity < 0) {
          isParachuteDeployed = true;
        }
    
        const isUsingParachute = isParachuteDeployed;
    
        const dragArea = isUsingParachute ? parachuteArea : area;
        const dragCd = isUsingParachute ? parachuteCd : dragCoefficient;
    
        const dragForce = 0.5 * dragCd * dragArea * velocity ** 2;
        const gravityForce = mass * g;
        const netForce = isUsingParachute ? -gravityForce + dragForce : -gravityForce - dragForce;
        const acceleration = netForce / mass;
    
        velocity += acceleration * timeStep;
        altitude += velocity * timeStep;
    
        if (altitude < 0) {
          altitude = 0;
          trajectory.push({ time, altitude });
          break;
        }
    
        trajectory.push({ time, altitude });
        time += timeStep;
      }
    
      setAltitudes(trajectory);
    };
  
    return (
      <div style={styles.container}>
        {/* Back Button */}
        <button style={styles.backButton} onClick={() => navigate(-1)}>
                ← Back
            </button>
        <div style={styles.description}>
          <h2 style={{ fontSize: '32px'}}>🚀 Rocket Flight Simulator</h2>
          <p style={{ textAlign: "left"}}>
          The goal of this simulator is to provide a deeper understanding of how our rocket is expected to behave on launch day. As members of Monash High Powered Rocketry (HPR), we have access to detailed data on individual component masses, motor performance, and can even factor in environmental conditions like wind to closely approximate real-world flight behavior.

Some of our recent advancements include the integration of airbrakes and the development of our own in-house hybrid engine. However, for simplicity, this simulator uses a one-degree-of-freedom (1DOF) model to estimate rocket performance.

This tool offers a basic but insightful look into the kind of work our simulation engineers do at HPR.
          </p>
          <h3 style={{ paddingTop: '30px', fontSize: '32px'}}>💭Assumptions:</h3>
          <ul style={{ listStylePosition: "inside", paddingLeft: "15%", margin: "0", textAlign: "left" }}>
            <li>The rocket's thrust is constant during the burn phase.</li>
            <li>Drag force is calculated using the drag equation: F_drag = 0.5 * Cd * A * v².</li>
            <li>Gravity is constant at 9.81 m/s² and does not vary with altitude.</li>
            <li>The parachute deploys automatically at apogee (when velocity becomes negative).</li>
            <li>The parachute's drag coefficient (Cd) and area are user-defined.</li>
            <li>The simulation uses a fixed time step of 0.25 seconds for numerical integration.</li>
            <li>The rocket's mass remains constant (fuel mass is not considered separately).</li>
            <li>The rocket's altitude cannot go below 0 (ground level).</li>
          </ul>
        </div>
  
        <div style={styles.content}>
          <div style={styles.sidebar}>
            <div style={styles.inputGroup}>
              <label>Thrust (N)</label>
              <input type="number" value={thrust} onChange={(e) => setThrust(Number(e.target.value))} style={styles.input}/>
            </div>
            <div style={styles.inputGroup}>
              <label>Burn Time (s)</label>
              <input type="number" value={burnTime} onChange={(e) => setBurnTime(Number(e.target.value))} style={styles.input}/>
            </div>
            <div style={styles.inputGroup}>
              <label>Mass (kg)</label>
              <input type="number" value={mass} onChange={(e) => setMass(Number(e.target.value))} style={styles.input}/>
            </div>
            <div style={styles.inputGroup}>
              <label>Drag Coefficient</label>
              <input type="number" value={dragCoefficient} onChange={(e) => setDragCoefficient(Number(e.target.value))} style={styles.input}/>
            </div>
            <div style={styles.inputGroup}>
              <label>Cross Sectional Area (m²)</label>
              <input type="number" value={area} onChange={(e) => setArea(Number(e.target.value))} style={styles.input}/>
            </div>
            <div style={styles.inputGroup}>
              <label>Parachute Area (m²)</label>
              <input type="number" value={parachuteArea} onChange={(e) => setParachuteArea(Number(e.target.value))} style={styles.input}/>
            </div>
            <div style={styles.inputGroup}>
              <label>Parachute Cd</label>
              <input type="number" value={parachuteCd} onChange={(e) => setParachuteCd(Number(e.target.value))} style={styles.input}/>
            </div>
            <button style={styles.button} onClick={simulateFlight}>Simulate</button>
          </div>
  
          <div style={styles.chartArea}>
            <h3>📈 Altitude vs Time</h3>
            <ResponsiveContainer width="100%" height={400}>
  <LineChart data={altitudes}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis 
      dataKey="time" 
      label={{ value: 'Time (s)', position: 'insideBottom', offset: -5 }} 
    />
    <YAxis 
      label={{ value: 'Altitude (m)', angle: -90, position: 'insideLeft' }} 
    />
    <Tooltip />
    <Legend layout="vertical" align="center" verticalAlign="top" />
    <Line 
      type="monotone" 
      dataKey="altitude" 
      stroke="#8884d8" 
      strokeWidth={2} 
      dot={false} 
    />
    {/* Adjust Brush to be thinner and shifted down */}
    <Brush
      dataKey="time" 
      height={10} // Make the brush thinner
      y={390} // Shift the brush down to avoid overlapping with the x-axis
      stroke="#8884d8" 
      
    />
  </LineChart>
</ResponsiveContainer>
          </div>
        </div>
        <div style={styles.footer}>
  <p>
    {/* <strong> */}
      What variables do you think are missing or have not been considered in this 1DOF simulation? Consider factors like wind, air density variations, or other real-world complexities that could affect rocket performance.
    {/* </strong> */}
  </p>
</div>
      </div>
    );
  };
  
  // Inline styles
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center', // Center content horizontally
      maxWidth: '800px', // Set a fixed width for the content
      margin: '0 auto', // Center the container on the page
      padding: '50px', // Add padding for spacing
      paddingBottom: '80px', // Add extra padding to ensure scrollbar visibility
      fontFamily: 'Arial, sans-serif',
      gap: '30px',
      textAlign: 'center', // Center-align all text
      boxShadow: '0 4px 18px rgba(0, 0, 0, 0.1)', // Adding shadow instead of border
      borderRadius: '5px',
      fontSize: '18px'
    },
      backButton: {
        position: 'absolute', // Position it at the top left
        top: '20px',
        left: '20px',
        padding: '10px 15px',
        backgroundColor: 'transparent', // Transparent background
        color: '#807e7e', // Light gray text color
        fontWeight: 'bold',
        border: 'none', // No border
        cursor: 'pointer',
        fontSize: "1.2rem",
      },

      content: {
        display: 'flex',
        flexDirection: 'row', // Arrange inputs and graph side by side
        gap: '10px',
        width: '100%', // Ensure content takes up full width
        justifyContent: 'space-between', // Add spacing between inputs and graph
        paddingBottom: '20px', // Add padding to the bottom of the content area
      },
      sidebar: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        width: '25%', // Set width to 25% for a 1:3 ratio
        paddingTop: '50px',
        fontSize: '16px'
      },
      chartArea: {
        width: '75%', // Set width to 75% for a 1:3 ratio
      },
      inputGroup: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '0px',
        
      },
      input: {
        height: '26px',
        textAlign: 'center',           // ⬅️ Horizontally center the text
        padding: '0',                  // ⬅️ Remove side padding if needed
        fontSize: '14px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
        lineHeight: '36px',            // ⬅️ Helps vertical alignment if needed
      },      
      
    footer: {
      marginTop: '20px',
      padding: '10px',
      backgroundColor: '#f9f9f9',
      border: '1px solid #ddd',
      borderRadius: '5px',
      textAlign: 'center',
    },
    button: {
      marginTop: '5px',
      padding: '10px',
      backgroundColor: '#4CAF50',
      color: 'white',
      fontWeight: 'bold',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '17px'
    },
  };
  
  export default RocketSimulator;