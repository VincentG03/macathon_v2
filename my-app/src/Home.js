// filepath: src/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import img180DC from './assets/180DC.png';
import imgCCA from './assets/cca.png';
import imgHPR from './assets/hpr.png';
import imgMDN from './assets/mac.png';
import imgMotorsport from './assets/motorsport.png';
import group from './assets/group.jpg';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero with banner behind */}
      <div className="hero-wrapper">
        <div className="hero-banner" />
        <section className="hero">
          <h1>
            Try before you <span className="highlight">apply</span> —<br />
            virtual experiences for student teams
          </h1>
          <p>
            Don’t just read about student clubs — try their work before applying.
            <br />
            Discover teams through real micro-projects that match your interests.
          </p>
          <button
            className="cta"
            onClick={() => navigate('/explore')}
          >
            Find my student team
          </button>
        </section>
      </div>

      {/* Media Preview Section */}
      <section className="media-preview">
        <div className="media-text">
          <div className="tag">EXPERIENCE PREVIEWS</div>
          <h2>Preview the Work Before You Apply</h2>
          <p>
          Want to get more involved at university? The best way to do that is by surrounding 
          yourself with like-minded students who share your interests and passions. 
          Join a team where you can do <strong className="highlight"> meaningful work </strong> alongside others who are just as driven as 
          you are. Not sure if it’s the right fit? Try a virtual experience — no commitment required.
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
            With over 100 clubs and teams at university, not every one may be the perfect fit for you 
            <strong className="highlight"> — but there's definitely one that is. </strong> Explore a virtual experience to discover where your 
            interests align, connect with like-minded peers to engage in meaningful work you're 
            passionate about whilst making new friends!
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
