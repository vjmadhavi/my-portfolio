import React from 'react';
import HomeButton from './HomeButton';
import NextButton from './NextButton';
import './Card.css';
import './Page.css'; // Using a common style

const About = () => {
  return (
    <div className="page-container">
        <HomeButton />
      <h2>About Me</h2>
        <p>
        I’m a seasoned tech enthusiast with a knack for turning complex problems into elegant solutions.,
        With a background in Python, SQL, and DevOps, and a budding love affair with AI technologies, I’m on a
        mission to bring a dash of innovation to every project I tackle.When I’m not immersed in code or
        optimizing pipelines, you might find me indulging in my favorite hobby—debating whether to use Pandas
        or NumPy for data manipulation (spoiler: it’s usually both). I believe in the power of collaboration, 
        so I’m always eager to team up and share a laugh while solving tech puzzles.
        With hands-on experience in Django, MongoDB, and a variety of cloud and containerization tools,
        I’m here to turn your ideas into reality, one line of code at a time. Let’s build something amazing
        together and maybe, just maybe, make the tech world a bit more fun!
        </p>
      <NextButton to="/skills-projects" />
    </div>
  );
};

export default About;
