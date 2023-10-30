// Content.js
import React from 'react';
import './App.css'
import About from './About';
import ProjectsHome from './ProjectsHome';


function Content() {
  return (
    <div className='content_container'>
      <div className='light'></div>
      <About/>
      <ProjectsHome/>
    </div>
  );
}

export default Content;