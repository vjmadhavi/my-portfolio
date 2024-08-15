// ContactModal.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import emailjs from 'emailjs-com';
import './styles.css';

const ContactModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    user_email: '',
    message: ''
  });

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        closeModal();
      }, (error) => {
        console.log(error.text);
        alert('An error occurred, please try again.');
      });

    setFormData({
      user_email: '',
      message: ''
    });
  };

  return (
    <div>
      <button onClick={openModal}>Contact</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Contact Form"
        className="contact-modal"
        overlayClassName="modal-overlay"
      >
        <h2>Contact Me</h2>
        <form className="contact-form" onSubmit={sendEmail}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Send</button>
        </form>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default ContactModal;
