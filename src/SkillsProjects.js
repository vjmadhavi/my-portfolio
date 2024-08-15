import React from 'react';
import NextButton from './NextButton';
import NavBar from './NavBar';
import Footer from './Footer'; 
import './Card.css';
import './Page.css';

const SkillsProjects = () => {
  return (
    <div className="page-container">
      <NavBar />  {/* Add NavBar */}
      <div className="card">
        <h2>Top Skills </h2>
        <p>
          <strong>Skills:</strong> 
          <br />
          <li> Python, JavaScript, SQL, C</li>
          <li>Machine Learning, AI, Data Analysis</li>
          <li>MySQL, Postgre SQL, Oracle, NoSQL, MongoDB </li>
          <li>DevOps, CI/CD, Cloud Computing (AWS, Azure, GCP)</li>
          <li>Tableau, PowerBI</li>
        </p>
        <NextButton to="/experience" />
      </div>
      <Footer /> {/* Add Footer */}
    </div>
  );
};

export default SkillsProjects;
