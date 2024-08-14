import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Optional: Create and use for styling

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Hi there! I am Madhavi</h1>
      <div className="box-container">
        <Link to="/about" className="box">About</Link>
        <Link to="/skills-projects" className="box">Skills&Projects</Link>
        <Link to="/experience" className="box">Experience</Link>
        <Link to="/education" className="box">Education</Link>
      </div>
    </div>
  );
}

export default LandingPage;
