import React from 'react';
import HomeButton from './HomeButton';
import NextButton from './NextButton';
import './Card.css';
import './Page.css';

const SkillsProjects = () => {
  return (
    <div className="page-container">
      <HomeButton />
      <h2>Top Skills and Projects</h2>
      <p>
        <strong>Skills:</strong> React.js, Node.js, Python, Machine Learning, Data Structures, Algorithms, DevOps, AI-driven technologies.
      </p>
      <p>
        <strong>Projects:</strong>
        <ul>
          <li>
            <strong>Project 1:</strong> Developed a real-time chat application using React.js and Node.js with WebSocket integration.
          </li>
          <li>
            <strong>Project 2:</strong> Created a machine learning model to detect brain lesions from MRI data using LSTM and VGG16.
          </li>
          <li>
            <strong>Project 3:</strong> Built a cloud-based data pipeline for processing large datasets using Python and AWS Lambda.
          </li>
        </ul>
      </p>
      <NextButton to="/Experience" />
    </div>
  );
};

export default SkillsProjects;
