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
      <div className="px-4 md:px-8 lg:px-12 py-8">
        <h3 className="text-2xl font-semibold mb-6">Work Experience</h3>

       
        <div className="py-4 border-b border-gray-300 hover:bg-gray-100 transition-all duration-300 px-2 md:px-8 mb-6">
          <div className="flex items-center gap-4 md:gap-8">
            <img src={semicolonImage} alt="Semicolon Africa" className="w-12 h-12 md:w-16 md:h-16 rounded-full" />
            
            <div className="flex-1">
              <h4 className="text-xl font-medium">Software Engineering Trainee at Semicolon Africa</h4>
            </div>
           
            <div className="text-sm hidden md:flex text-gray-500 gap-2">
              <span className="italic">April 2023</span>
              <span>-</span>
              <span className="italic">July 2024</span>
            </div>
          </div>
        </div>

      
        <div className="py-2 border-b border-gray-300 hover:bg-gray-100 transition-all duration-300 px-2 md:px-8 mb-4">
          <div className="flex items-center gap-4 md:gap-8">
          
           
            <svg width="80" height="80" viewBox="0 0 100 100">
              <circle cx="60" cy="40" r="30" fill="#9DB2C6" />
              <circle cx="40" cy="60" r="20" fill="#5C7183" />
              <circle cx="40" cy="60" r="15" fill="#4F6775" />
            </svg>
         

            <div className="flex-1">
              <h4 className="text-xl font-medium mr-[24%]">Internship at Innovaldeas</h4>
            </div>

            <div className="text-sm hidden md:flex text-gray-500 gap-2">
              <span className="italic">June 2024</span>
              <span>-</span>
              <span className="italic">October 2024</span>
            </div>

          </div>
        </div>

        
        <div className="py-4 border-b border-gray-300 hover:bg-gray-100 transition-all duration-300 px-2 md:px-8 mb-6">
          <div className="flex items-center gap-4 md:gap-8">
            <img src={medfairImage} alt="Medfair Technology" className="w-10 h-12 md:w-16 md:h-16 rounded-full" />
            <div className="flex-1">
              <h4 className="text-xl font-medium mr-[8%]">Currently working at Medfair Technology</h4>
            </div>
            <div className="text-sm hidden md:flex text-gray-500 gap-2">
              <span className="italic">October 2024</span>
              <span>-</span>
              <span className="italic">Present</span>
            </div>
          </div>
        </div>

       
        <h3 className="text-2xl font-semibold mt-10 mb-6">Certifications</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          <div className="bg-white shadow-md rounded-lg p-6 h-64">
            <img src={semicolonImage} alt="Semicolon Africa Certification" className="w-12 h-12 mx-auto mb-4" />
            <h4 className="text-lg font-medium text-center">Certification in Software Engineering</h4>
            <p className="text-center text-sm text-gray-500">Semicolon Africa</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4 h-64">
            <img src={henleyCertImage} alt="Henley Business School Certification" className="w-12 h-12 mx-auto mb-4" />
            <h4 className="text-lg font-medium text-center">Business Administration and Entrepreneurship</h4>
            <p className="text-center text-sm text-gray-500">Henley Business School</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
