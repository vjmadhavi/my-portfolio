import React from 'react';
import NextButton from './NextButton';
import NavBar from './NavBar';
import './Card.css';
import './Page.css';

const About = () => {
  return (
    <div className="page-container">
        <NavBar />  {/* Add NavBar */}
      <div className="card">
        <h2>About Me</h2>
        <p>
          I am a passionate software developer with a strong background in creating efficient and scalable web applications. 
          I enjoy tackling complex problems and finding innovative solutions to enhance user experience.
          With a degree in Computer Science and experience in both front-end and back-end technologies, 
          I strive to build products that are not only functional but also provide a delightful user experience.
        </p>
        <NextButton to="/skills-projects" />
      </div>
    </div>
  );
};

export default About;
