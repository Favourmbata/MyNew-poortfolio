
import React from 'react';
import DesktopNav from '../desktop/DesktopNav';
import MobileNavbar from '../mobile/MobileNav';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <div>
      <div className="desktop-nav">
        <DesktopNav />
      </div>
      <div className="mobile-nav">
        <MobileNavbar />
      </div>
    </div>
  );
};

export default Navbar;
