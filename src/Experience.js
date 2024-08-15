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
          <strong>Software Engineer at Inkling</strong> (Aug 2022 - Present):<br />
          Developed automation scripts in Python and Bash to streamline infrastructure management in AWS, <br />
          cutting operational costs by 30%. Expert in orchestrating Kubernetes environments, implementing<br />
          CI/CD pipelines with Jenkins and GitHub Actions, and configuring secure network architectures.<br />
          Proficient in using tools like Terraform, Ansible, and ArgoCD for efficient and reliable deployment processes.<br />
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
