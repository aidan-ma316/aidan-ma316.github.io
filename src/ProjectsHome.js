// ProjectsHome.js
import React from 'react';
import './App.css'


function ProjectsHome() {
  return (
    <div className='projects_home'>
        <h1>PROJECTS</h1>
        <div className='projects_home_grid_outer'>
          <a href='https://github.com/aidan-ma316/AndroidPlannerApp' title="_tab" className='project_showcase'>
              <div className='project_showcase_textbox'>
                <h2>CALENDAR APP FOR ANDROID</h2>
                <h3>MOBILE DEV - KOTLIN</h3>
              </div>
            </a>
        <div className='projects_home_grid_sidebar'>
              <a href='https://drive.google.com/file/d/16wUaghqfARuIHuXodY6F35msV62H2B9Y/view?usp=drive_link' className='project_sidebar1'><div className='project_sidebar_cover'><div className='project_sidebar_text'><h2>THE CONSERVATORY</h2><h3>GAME DEV - C#</h3></div><div className='p_img'/></div></a>
              <div className='project_sidebar2'><div className='project_sidebar_cover'><div className='project_sidebar_text'><h2>HANGOGO</h2><h3>MACHINE LEARNING ETC. - PYTHON<br/>IN PROGRESS</h3></div><div className='p_img'/></div></div>
              <div className='project_sidebar3'><div className='project_sidebar_cover'><div className='project_sidebar_text'><h2>MORE ON THE WAY...</h2><h3></h3></div></div></div>
        </div>
        
        </div>
    </div>
  );
}

export default ProjectsHome;