// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import ContactModal from './ContactModal';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/skills-projects">Skills & Projects</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><ContactModal /></li> {/* The ContactModal will handle the pop-up */}
      </ul>
    </nav>
  );
};

export default NavBar;
