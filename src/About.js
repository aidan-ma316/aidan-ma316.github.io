// About.js
import React from 'react';
import './App.css'
import { ReactComponent as GitLogo } from './bxl-github.svg';
import { ReactComponent as LinkedInLogo } from './bxl-linkedin-square.svg';

function About() {
  return (
    <div className='about'>
        <div className='about_grid'>
            <div className='about_profile_content'>
                <div className='about_profile_card'>
                        <img className='about_profile_card_picture' src={require('./profilepicture.png')} alt="Aidan Mara, A Computer Science Student based in Los Angeles attending California State University - Long Beach."/>
                    <div className='about_profile_card_socials'>
                        <div className='about_profile_card_socials_linkedin'>
                            <a href ='https://www.linkedin.com/in/aidan-mara-b57208187/'  target="_blank">
                                <LinkedInLogo width="5vw" height="5vw"/>
                            </a>
                        </div>
                        <div className='about_profile_card_socials_github'>
                            <GitLogo width="5vw" height="5vw"/>
                        </div>              
                    </div>
                </div>
            </div>
            <div className='about_text_content'>
                <div className='about_text_header'><h1>Welcome!</h1></div>
                <div className='about_text_p1'><h2>My name is Aidan. I'm a Software Developer based in Los Angeles who's experienced Object-Oriented Programming and Data Structures.</h2></div>
                <div className='about_text_p2'><h2>I am currently in my Senior year at Cal State University - Long Beach. I plan to graduate in the Spring of 2024. I am currently putting effort into increasing my knowledge on databases and software development. I am also diving into the world of machine learning with classes and projects.</h2></div>
            </div>
        </div>
    </div>
  );
}

export default About;
