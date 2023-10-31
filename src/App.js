import Hero from './Hero';
import About from './About'
import './App.css';
import Nav from './Nav';
import React, { useRef } from 'react';
import ProjectsHome from './ProjectsHome';
import Contact from './Contact';

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);


  return (
    <div className="App">
      <Nav/>
      <div className='light' />
      <Hero />
      <div className='content_container'>
      <About/>
      <ProjectsHome/>
      <Contact/>
      </div>
    </div>
  );
}

export default App;
