import Hero from './Hero';
import About from './About'
import './App.css';
import Nav from './Nav';
import React, { useRef } from 'react';
import ProjectsHome from './ProjectsHome';

function Contact() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);


  return (
    <div className='contact_container'>
      <h1>Contact</h1>
      <h2>Primary E-mail: aidanmara@gmail.com</h2>
      <h2>Phone: 805-535-0939</h2>
      <a href='https://drive.google.com/file/d/1AzNG1pG2lztKClJu1RWzi5HHbfSqnLkW/view?usp=sharing' target="_blank"><h2>Download My Resume</h2></a>
    </div>
  );
}

export default Contact;
