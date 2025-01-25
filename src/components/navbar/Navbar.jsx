// import React from 'react';
// import DesktopNav from './desktop/DesktopNav';
// import MobileNavbar from './mobile/MobileNav';

// const Navbar = () => {
//   return (
//     <div>
//       <div className="hidden md:block">
//         <DesktopNav />
//       </div>
//       <div className="block md:hidden">
//         <MobileNavbar />
//       </div>
//     </div>
//   );
// };

// export default Navbar;
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
