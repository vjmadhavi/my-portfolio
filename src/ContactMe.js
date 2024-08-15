import React from 'react';
import './ContactMe.css';

const ContactMe = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Contact Me</h2>
        <p>You can reach me at:</p>
        <p><strong>venu.mjakkampudi@gmail.com</strong></p>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ContactMe;
