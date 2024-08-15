import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer'; 
import './Page.css';
import './LandingPage.css'; // Optional: Create and use for styling

const LandingPage = () => {
  return (
    <div className="landing-page">
      <NavBar />  {/* Add NavBar */}
      <h1>Hello, I'm Madhavi! Welcome to my portfolio</h1>
      <div className="box-container">
        <Link to="/about" className="box">About</Link>
        <Link to="/skills-projects" className="box">Skills</Link>
        <Link to="/experience" className="box">Experience</Link>
        <Link to="/education" className="box">Education</Link>
      </div>
      <Footer /> {/* Add Footer */}
    </div>
  );
}

export default LandingPage;
