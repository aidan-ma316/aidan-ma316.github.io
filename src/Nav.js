import React from 'react';
import './App.css';

function Nav({ scrollToSection }) {
  return (
    <nav>
      <img className='logo' src={require('./logo.png')} alt="Logo" />
      <h2>Aidan Mara</h2>
      <ul>
      <li>
          <button onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}>About</button>
        </li>
        <li>
          <button onClick={() => window.scrollTo({ top: 1500, behavior: 'smooth' })}>Projects</button>
        </li>
        <li>
          <button onClick={() => window.scrollTo({ top: 2200, behavior: 'smooth' })}>Contact</button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
