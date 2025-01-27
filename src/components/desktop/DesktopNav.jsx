// import React from 'react';
// import { Link } from 'react-router-dom';
// import "./desktop.css"
// const DesktopNav = () => {
 
//   return (
//     <nav className="flex items-center justify-between px-6 py-2">
//       <div className="items-center text-[#020E7C] font-bold text-3xl">
//         <h1>My Portfolio</h1>
//       </div>

//       <ul className="md:flex space-x-6 text-gray-800 font-medium">
//         <li><Link to="/" className="text-[#020E7C] font-bold text-[24px]">Home</Link></li>
//         <li><Link to="/stacks" className="text-[#50555C] font-bold text-[24px] hover:text-blue-500">Stack</Link></li>
//         <li><Link to="/projects" className="text-[#50555C] font-bold text-[24px] hover:text-blue-500">Projects</Link></li>
//         <li><Link to="/experience" className="text-[#50555C] font-bold text-[24px] hover:text-blue-500">Experience</Link></li>
//       </ul>

//       <Link to="/contact" className="text-[#50555C] font-bold text-[24px] hover:text-blue-500">
//         Contact me
//       </Link>
//     </nav>
//   );
// };

// export default DesktopNav;


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
