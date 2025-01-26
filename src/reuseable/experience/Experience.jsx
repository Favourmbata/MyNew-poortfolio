import React from 'react';
import Navbar from '../../components/navbar/Navbar';

import semicolonImage from '../../assets/semicolonafrica_logo.jpeg';  
import medfairImage from '../../assets/Frame 1171275572.png';  
import henleyCertImage from '../../assets/henley_business_school_logo.jpeg';  
import './Experience.css';  

const Experience = () => {
  return (
    <div>
      <Navbar />
      <div className="experience-container">
        <h3 className="experience-heading">Work Experience</h3>

        <div className="experience-item">
          <div className="experience-item-content">
            <img src={semicolonImage} alt="Semicolon Africa" />
            <div className="experience-item-details">
              <h4 className="experience-item-title">Software Engineering Trainee at Semicolon Africa</h4>
            </div>
            <div className="experience-dates experience-dates-md">
              <span className="italic">April 2023</span>
              <span>-</span>
              <span className="italic">July 2024</span>
            </div>
          </div>
        </div>


        <div className="experience-item">
  <div className="experience-item-content">
    <div className="relative w-24 md:w-32 lg:w-40 h-24 md:h-32 lg:h-40 border border-gray-400 bg-white flex items-center justify-center rounded-full">
      <div className="absolute w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-[#A2B9D1] rounded-full top-0 left-4"></div> 
      <div className="absolute w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-[#123d61] rounded-full top-8 left-10"></div> 
    </div>
    <div className="experience-item-details">
      <h4 className="experience-item-title">Internship at Innovaldeas</h4>
    </div>
    <div className="experience-dates experience-dates-md">
      <span className="italic">June 2024</span>
      <span>-</span>
      <span className="italic">October 2024</span>
    </div>
  </div>
</div>




        <div className="experience-item">
          <div className="experience-item-content">
            <img src={medfairImage} alt="Medfair Technology" />
            <div className="experience-item-details">
              <h4 className="experience-item-title">Currently working at Medfair Technology</h4>
            </div>
            <div className="experience-dates experience-dates-md">
              <span className="italic">October 2024</span>
              <span>-</span>
              <span className="italic">Present</span>
            </div>
          </div>
        </div>

        <h3 className="certifications-heading">Certifications</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          <div className="certification-card">
            <img src={semicolonImage} alt="Semicolon Africa Certification" />
            <h4 className="certification-card-title">Certification in Software Engineering</h4>
            <p className="certification-card-description">Semicolon Africa</p>
          </div>

          <div className="certification-card">
            <img src={henleyCertImage} alt="Henley Business School Certification" />
            <h4 className="certification-card-title">Business Administration and Entrepreneurship</h4>
            <p className="certification-card-description">Henley Business School</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
