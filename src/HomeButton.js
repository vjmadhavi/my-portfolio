import React from 'react';
import { Link } from 'react-router-dom';
import './HomeButton.css';

const HomeButton = () => {
  return (
    <div className="home-button">
      <Link to="/">Home</Link>
    </div>
  );
};

export default HomeButton;
