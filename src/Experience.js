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
          Developed automation scripts in Python and Bash to streamline infrastructure management in AWS, 
          cutting operational costs by 30%. Expert in orchestrating Kubernetes environments, implementing
          CI/CD pipelines with Jenkins and GitHub Actions, and configuring secure network architectures.
          Proficient in using tools like Terraform, Ansible, and ArgoCD for efficient and reliable deployment processes.
        </p>
        <p>
          <strong>Software Developer at Tata Consultancy Services Limited</strong> (Jan 2020 - Aug 2021):
          <br />
          Migrated on-premises applications to AWS, leveraging EC2, S3, and RDS to cut infrastructure costs
           by 40% and boost performance by 50%. Established a secure CI/CD pipeline with Jenkins, Docker,
            and Ansible, reducing deployment time from 2 days to 2 hours. Enhanced system visibility and
             uptime using CloudWatch and Prometheus, and implemented IaC with Terraform, increasing infrastructure
              management efficiency by 60%.
        </p>
        <NextButton to="/Education" />
      </div>
      <Footer /> {/* Add Footer */}
    </div>
  );
};

export default Experience;
