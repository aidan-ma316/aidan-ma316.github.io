import React from 'react';
import './App.css';
import About from './About';
import ProjectsHome from './ProjectsHome';
import Nav from './Nav';

function Content() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      console.log(`Scrolling to section: ${sectionId}`);
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  return (
    <div className='content_container'>
      <Nav scrollToSection={scrollToSection} />
      <About id="about"/>
      <ProjectsHome id="projects"/>
    </div>
  );
}

export default Content;
