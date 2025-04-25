// filepath: src/Home.js
import React from 'react';
import './Home.css';
import img180DC from './assets/180DC.png';
<<<<<<< Updated upstream
import { useNavigate } from "react-router-dom"; // Import useNavigate
=======
import imgCCA from './assets/cca.png';
import imgHPR from './assets/hpr.png';
import imgMDN from './assets/mac.png';
import imgMotorsport from './assets/motorsport.png';
import group from './assets/group.jpg';
>>>>>>> Stashed changes

function Home({ goToExplore }) {
  const navigate = useNavigate();
  
  return (
    <div>
<<<<<<< Updated upstream
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

=======
      {/* Hero with banner behind */}
      <div className="hero-wrapper">
        <div className="hero-banner" />
        <section className="hero">
          <h1>
            Try before you <span className="highlight">apply</span> —<br />
            virtual experiences for student teams
          </h1>
          <p>
            Don’t just read about student clubs — try their work before
            applying.<br />
            Discover teams through real micro-projects that match your
            interests.
          </p>
          <button className="cta" onClick={goToExplore}>
            Find my next student team
          </button>
        </section>
      </div>

>>>>>>> Stashed changes
      {/* Media Preview Section */}
      <section className="media-preview">
        <div className="media-text">
          <div className="tag">EXPERIENCE PREVIEWS</div>
          <h2>Preview the Work Before You Apply</h2>
          <p>
            Tired of vague team descriptions? Now you can actually{' '}
            <strong className="highlight">try the work</strong>. Complete short, real challenges — from coding
            tasks to investment research — designed by student teams. Get clarity and confidence before you even
            apply.
          </p>
        </div>
        <div className="media-collage">
          <div className="collage-row">
            <img
              src={img180DC}
              alt="180DC"
              className="collage-img collage-img-1"
              style={{ height: '150px', width: 'auto' }}
            />
            <img
              src={imgCCA}
              alt="CCA"
              className="collage-img collage-img-2"
              style={{ height: '45px', width: 'auto' }}
            />
            <img
              src={imgHPR}
              alt="HPR"
              className="collage-img collage-img-3"
              style={{ height: '110px', width: 'auto' }}
            />
          </div>
          <div className="collage-row">
            <img
              src={imgMDN}
              alt="MDN"
              className="collage-img collage-img-4"
              style={{ height: '75px', width: 'auto' }}
            />
            <img
              src={imgMotorsport}
              alt="Motorsport"
              className="collage-img collage-img-5"
              style={{ height: '55px', width: 'auto' }}
            />
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="value-prop">
        <div className="value-text">
          <div className="tag">FIND YOUR FIT</div>
          <h2>Explore Teams That Match You</h2>
          <p>
            Not every team is right for you — and that’s okay. With so many styles — technical, creative,
            strategic — it’s hard to know where you’ll actually enjoy the work. These try-before-you-apply tasks
            give you a real look at what members actually do.
          </p>
          <p>
            Through short virtual experiences, you can explore different teams, see what fits your interests and
            time, and <strong className="highlight">apply with confidence</strong> — no guesswork needed.
          </p>
        </div>
        <div className="value-image">
          <img
            src={group}
            alt="Students collaborating"
            style={{ height: '250px', width: 'auto' }}
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
