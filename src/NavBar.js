import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactMe from './ContactMe';
import './NavBar.css';

const NavBar = () => {
  const [isContactOpen, setContactOpen] = useState(false);

  const openContact = () => setContactOpen(true);
  const closeContact = () => setContactOpen(false);

  return (
    <>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/skills-projects">Top Skills & Projects</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/education">Education</Link></li>
          <li><span className="contact-link" onClick={openContact}>Contact</span></li>
        </ul>
      </nav>
      <ContactMe isOpen={isContactOpen} onClose={closeContact} />
    </>
  );
};

export default NavBar;
