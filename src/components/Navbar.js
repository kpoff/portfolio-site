import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <nav className="nav-style">
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/resume'>Resume</Link></li>
        <li><Link to='/projects'>Projects</Link></li>
      </ul>
    </nav>
  )
}

export default navbar;