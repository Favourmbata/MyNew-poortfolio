
import React, { useState } from 'react';
import favourImage from "../../assets/favur.png"
import './Hero.css';
import CV from '../../assets/Favour-Mbata_Frontend-Engineer_Resumè.pdf';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <section className="hero-section">
      <div className="hero-text">
        <div>
          <div className="hero-title">
            <span>Hello, I'm Favour Mbata</span>
          </div>
          <h1 className="hero-subtitle">Software Developer</h1>
        </div>

        <div className="hero-description">
          <span>I Build Scalable Modern Websites For the Future</span>
        </div>

        <div>
          <a href={CV} download>
            <button className="hero-button ">Resume</button>
          </a>
        </div>

        <div className="hero-more-info" onMouseMove={toggleVisibility}>
          {/* <p className="text-foreground/50" style={{fontSize:"20px"}}>See more</p> */}
          <div className='border bottom-4 border-[#707070]' />
          <div onMouseMove={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
            <p >
              I am a Full Stack Engineer specializing in building highly scalable, responsive, and user-friendly
              web applications. These days, I primarily work with Next.js, React, and TypeScript. I am
              well-versed and experienced in a variety of technology stacks, including JavaScript, Python, Django, and Bash.
            </p>
            <div className='border bottom-4 border-[#707070]'/>
          </div>
        </div>
      </div>

      <div className='hero-image-container'>
        <img src={favourImage} alt="favour" className="hero-image" />
      </div>
    </section>
  );
};

export default Hero;
