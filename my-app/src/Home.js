import React from 'react';
import './Home.css';
import img180DC from './assets/180DC.png';
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Home({ goToExplore }) {
  const navigate = useNavigate();
  
  return (
    <div>
      {/* Navigation */}
      <div className="nav-buttons">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/explore")}>Explore</button> {/* Navigate to Explore */}
      </div>

      {/* Hero Section */}
      <section className="hero">
        <h1>
          Try before you <span className="highlight">apply</span> —<br />
          virtual experiences for student teams
        </h1>
        <p>
          Don’t just read about student clubs — try their work before applying.
          Discover teams through real micro-projects that match your interests.
        </p>
        <button className="cta" onClick={() => navigate("/explore")}>
          Find my next student team
        </button>
      </section>

      {/* Media Preview Section */}
      <section className="media-preview">
        <div className="media-text">
          <div className="tag">TEMPORARY</div>
          <h2>Explore challenges before applying</h2>
          <p>
            Jump into short, real-world tasks designed by student teams. From
            writing memos to coding neural nets, get a true feel of the role.
          </p>
        </div>
        <div className="media-collage">
          <div className="collage-row">
            {[1, 2, 3].map(i => (
              <img
                key={`top-${i}`}
                src={img180DC}
                alt={`Team logo ${i}`}
                className={`collage-img collage-img-${i}`}
              />
            ))}
          </div>
          <div className="collage-row">
            {[4, 5].map(i => (
              <img
                key={`bottom-${i}`}
                src={img180DC}
                alt={`Team logo ${i}`}
                className={`collage-img collage-img-${i}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="value-prop">
        <div className="value-text">
          <div className="tag">MICRO-EXPERIENCES</div>
          <h2>Communicate in countless ways from one place.</h2>
          <p>
            Our platform brings students and teams together. Dive into realistic
            challenges, connect through shared interests, and apply with confidence.
          </p>
          <p>
            80% of students say they prefer applying after seeing real project previews.
          </p>
        </div>
        <div className="value-image">
          <img src={img180DC} alt="Student platform mockup" />
        </div>
      </section>
    </div>
  );
}

export default Home;
