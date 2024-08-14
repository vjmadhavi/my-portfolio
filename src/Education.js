import React from 'react';
import HomeButton from './HomeButton';
import './Page.css';

const Education = () => {
  return (
    <div className="page-container">
      <HomeButton />
      <h2>Education</h2>
      <p>
        <strong>Bachelor of Science in Computer Science</strong> - XYZ University (2014 - 2018):
        <br />
        - Graduated with Honors, focusing on software development, algorithms, and AI.
        <br />
        - Completed a thesis on the application of machine learning in predictive analytics.
      </p>
      
    </div>
  );
};

export default Education;
