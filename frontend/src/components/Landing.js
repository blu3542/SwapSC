import React from 'react';
import './Landing.css'; // Import the CSS file

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-text">
        <h1>Swap. Style. Sustain.</h1>
        <p>USC's fashion hub</p>
      </div>
      <img src="landing.jpeg" alt="Landing" className="landing-image" />
    </div>
  );
};

export default Landing;
