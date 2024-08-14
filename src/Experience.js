import React from 'react';
import HomeButton from './HomeButton';
import NextButton from './NextButton';
import './Card.css';
import './Page.css';

const Experience = () => {
  return (
    <div className="page-container">
      <HomeButton />
      <h2>Experience</h2>
      <p>
        <strong>Software Developer at XYZ Corp</strong> (2021 - Present):
        <br />
        - Led the development of a full-stack web application that improved user engagement by 30%.
        <br />
        - Implemented CI/CD pipelines to automate the deployment process, reducing deployment time by 50%.
      </p>
      <p>
        <strong>DevOps Engineer at ABC Ltd</strong> (2018 - 2021):
        <br />
        - Managed cloud infrastructure on AWS, optimizing resource usage and reducing costs by 20%.
        <br />
        - Automated server provisioning and scaling using Terraform and Ansible.
      </p>
      <NextButton to="/Education" />
    </div>
  );
};

export default Experience;
