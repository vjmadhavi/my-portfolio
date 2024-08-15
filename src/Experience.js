import React from 'react';
import NextButton from './NextButton';
import NavBar from './NavBar';
import Footer from './Footer'; 
import './Card.css';
import './Page.css';

const Experience = () => {
  return (
    <div className="page-container">
        <NavBar />  {/* Add NavBar */}
      <div className="card">
        <h2>Experience</h2>
        <p>
          <strong>Software Developer at Qualcomm</strong> (Aug 2022 - Present):
          <br />The project focuses on implementing and optimizing vision processing pipelines and algorithms<br />
           on Qualcomm platforms, where I utilized Python to develop high-performance web applications with Django.<br />
            I also designed RESTful APIs for seamless communication between software systems and applied<br />
            multi-threading and asynchronous programming to efficiently manage concurrent tasks, enhancing the<br />
            overall responsiveness and reliability of the applications.
        </p>
        <p>
          <strong>Software Developer at Tata Consultancy Services Limited</strong> (Jan 2017 - Aug 2021):
          <br />
          The project was developed on an Oracle-based platform, focusing on financial reporting tools and data management
          systems for a banking client.
          <br />
          This platform supports a range of applications, including transaction processing systems and risk management tools.
          <br />
          The primary business requirement was to develop and optimize data-driven banking applications to enhance overall
          business efficiency and customer experience.
          <br />
          This involved improving data accuracy and reporting efficiency to support regulatory compliance and internal decision-making,
          while also optimizing customer data processing and transaction management for better operational performance.
        </p>
        <NextButton to="/Education" />
      </div>
      <Footer /> {/* Add Footer */}
    </div>
  );
};

export default Experience;
