import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './mobilenav.css'; // Import the new CSS file

const MobileNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-title">
        <h1 className='text-[14px]'>My Portfolio</h1>
      </div>
      <button
        className="menu-button"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? '✖' : '☰'}
      </button>

      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-header">
            <div className="mobile-menu-title">
              <h1 className='text-sm'>My Portfolio</h1>
            </div>

            <button
              className="close-button"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ✖
            </button>
          </div>

          <ul className="mobile-menu-list">
            <li>
              <Link to="/" className="mobile-menu-item">Home</Link>
            </li>
            <li>
              <Link to="/stacks" className="mobile-menu-item hover:text-blue-300">Stack</Link>
            </li>
            <li>
              <Link to="/projects" className="mobile-menu-item hover:text-blue-300">Projects</Link>
            </li>
            <li>
              <Link to="/experience" className="mobile-menu-item hover:text-blue-500">Experience</Link>
            </li>
            <li>
              <Link to="/contact" className="mobile-menu-item">Contact Me</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default MobileNavbar;
