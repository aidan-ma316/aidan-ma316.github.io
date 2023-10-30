// ProjectsHome.js
import React from 'react';
import './App.css'


function ProjectsHome() {
  return (
    <div className='projects_home'>
        <h1>PROJECTS</h1>
        <div className='projects_home_grid_outer'>
            <div className='project_showcase'>
              
              <div className='project_showcase_textbox'>
                <h2>CALENDAR APP FOR ANDROID</h2>
              </div>
            </div>
        <div className='projects_home_grid_sidebar'>
              <div className='project_sidebar1'><div className='project_sidebar_cover'><div className='project_sidebar_text'><h2>THE CONSERVATORY</h2><h3>GAME DEV</h3></div></div></div>
              <div className='project_sidebar2'><div className='project_sidebar_cover'><div className='project_sidebar_text'><h2>THE CONSERVATORY</h2><h3>GAME DEV</h3></div></div></div>
              <div className='project_sidebar3'><div className='project_sidebar_cover'><div className='project_sidebar_text'><h2>THE CONSERVATORY</h2><h3>GAME DEV</h3></div></div></div>
        </div>
        
        </div>
    </div>
  );
}

export default ProjectsHome;