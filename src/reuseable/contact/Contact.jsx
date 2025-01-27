import React from 'react';
import Navbar from '../../components/navbar/Navbar';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-center items-center  px-3 py-4">
    
      <div className="w-full max-w-6xl flex flex-col md:flex-row   rounded-lg p-6 md:p-8 space-y-8 md:space-y-0 md:space-x-12">
        
        {/* Left section: Collaboration Text */}
        <div className="md:w-1/2 lg:px-7">
          <h2 className="lg:text-2xl text-lg font-bold text-gray-800 mb-4 md:text-sm">Contact Me for Collaboration</h2>
          <p className="text-gray-600">
            Reach out today to discuss your project needs and start collaborating on something amazing. Whether you're looking for a website design, a responsive frontend, or assistance on a project, I'm here to help!
          </p>
        </div>
        
        {/* Right section: Contact Form */}
        <div className="md:w-[55%] lg:w-[40%] w-[100%] bg-white  rounded-md shadow-2xl py-4 px-5">
        
          <form action='https://getform.io/f/alllkkoa' method='POST' className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Full Name</label>
              <input
                type="text"
                name='name'
                autoComplete='name'
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#020E7C]"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email Address</label>
              <input
                type="email"
                className="w-full  p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#020E7C]"
                placeholder="Your email address"

              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                rows="5"
                className="w-full resize-y p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#020E7C]"
                placeholder="Your message"
              />
            </div>
            <div className='flex justify-center items-center'>
            <button className="w-[50%] bg-[#020E7C] text-white p-3  mb-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
              Submit
            </button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
