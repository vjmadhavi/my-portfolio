import React from 'react';
import { Link } from 'react-router-dom';
import './NextButton.css';

const NextButton = ({ to }) => {
  return (
    <div className="next-button">
      <Link to={to}>Next</Link>
    </div>
  );
};

export default NextButton;
