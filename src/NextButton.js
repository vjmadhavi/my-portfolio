import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NextButton.css';
import pageTurnSound from './flipcard-91468.mp3'; // Import the sound file

const NextButton = ({ to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const audio = new Audio(pageTurnSound);
    audio.play();  // Play sound on click

    document.querySelector('.page-container').classList.add('turning'); // Add turning class for the effect

    setTimeout(() => {
      navigate(to);
    }, 600); // Delay navigation to allow the sound to play and the effect to complete
  };

  return (
    <button className="next-button" onClick={handleClick}>
      Next
    </button>
  );
};

export default NextButton;
