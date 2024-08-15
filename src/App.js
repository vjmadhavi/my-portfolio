import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import About from './About';
import SkillsProjects from './SkillsProjects';
import Experience from './Experience';
import Education from './Education';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills-projects" element={<SkillsProjects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} /> {/* New Route */}
      </Routes>
    </Router>
  );
}

export default App;
