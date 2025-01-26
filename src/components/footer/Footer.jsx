import React from 'react'; 
import linkedin from '../../assets/LinkedIn_icon.svg';
import github from '../../assets/git-icon-logo-svgrepo-com.svg';
import x from '../../assets/x-social-media-logo-icon.webp';
import './Footer.css'; 

const Footer = () => {
  return (
    <div className="footer">
      <h3 className="footer-heading">Follow me on:</h3>
      <div className="footer-icons-container">
        <a
          href="https://www.linkedin.com/in/favourmbata12626a278/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <img
            src={linkedin}
            alt="LinkedIn"
            className="footer-icon"
          />
        </a>

        <a
          href="https://github.com/Favourmbata"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <img
            src={github}
            alt="GitHub"
            className="footer-icon"
          />
        </a>

        <a
          href="https://x.com/legitimate444"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (formerly Twitter)"
        >
          <img
            src={x}
            alt="X (formerly Twitter)"
            className="footer-icon"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
