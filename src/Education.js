import React from 'react';
import NextButton from './NextButton';
import NavBar from './NavBar';
import Footer from './Footer'; 
import './Card.css';
import './Page.css';

const Education = () => {
  return (
    <div className="page-container">
      <NavBar />  {/* Add NavBar */}
      <div className="card">
        <h2>Education</h2>
        <p>
          <strong>Master of Science in Computer Science</strong>
          <br />
          University of South Dakota, Vermillion, South Dakota (Aug 2021 - Dec 2022)
          <br />
          - Course work focused on Design and Analysis of Computer Algorithms, Machine Learning, Artificial Intelligence.
        </p>
        <p>
          <strong>Bachelor of Engineering in Electrical and Elctronics Engineering</strong>
          <br />
          Matrusri Engineering College, Hyderabad, India 
        </p>
        <NextButton to="/about" />
      </div>
      <Footer /> {/* Add Footer */}
    </div>
  );
};

export default Education;
