// Nav.js
import React from 'react';
import './App.css'

function Nav() {
  return (
    <nav>
        <img className='logo' src={require('./logo.png')}/>
        <h2>Aidan Mara</h2>

        <ul>
            <li><button>About</button></li>
            <li><button>Projects</button></li>
            <li><button>Contact</button></li>
        </ul>


    </nav>
  );
}

export default Nav;
