


import React from 'react';
import { Link } from 'react-router-dom';
import './desktop.css'; // Import the desktop.css file

const DesktopNav = () => {
  return (
    <nav className="desktop-nav">
    <div className='desktop-navbar-links'>
    <div className="logo">
        <h1 className=''>My Portfolio</h1>
      </div>

      <ul className="nav-items">
        <li><Link to="/" className="nav-item nav-item-home">Home</Link></li>
        <li><Link to="/stacks" className="nav-item">Stack</Link></li>
        <li><Link to="/projects" className="nav-item">Projects</Link></li>
        <li><Link to="/experience" className="nav-item">Experience</Link></li>
      </ul>

      <Link to="/contact" className="contact-link">
        Contact me
      </Link>
    </div>
      
    </nav>
  );
};

export default DesktopNav;
