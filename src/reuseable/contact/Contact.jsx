import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import './Contact.css'; // Import the CSS file

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="contact-container">
        <div className="contact-wrapper">
          {/* Left section: Collaboration Text */}
          <div className="contact-left">
            <h2 className="contact-title">Contact Me for Collaboration</h2>
            <p className="contact-description">
              Reach out today to discuss your project needs and start collaborating on something amazing. Whether you're looking for a website design, a responsive frontend, or assistance on a project, I'm here to help!
            </p>
          </div>

          {/* Right section: Contact Form */}
          <div className="contact-right">
            <form action='https://getform.io/f/alllkkoa' method='POST' className="contact-form">
              <div>
                <label className="contact-label">Full Name</label>
                <input
                  type="text"
                  name='name'
                  autoComplete='name'
                  className="contact-input"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="contact-label">Email Address</label>
                <input
                  type="email"
                  name='email'
                  className="contact-input"
                  placeholder="Your email address"
                />
              </div>
              <div>
                <label className="contact-label">Message</label>
                <textarea
                  rows="5"
                  name='message'
                  className="contact-input contact-textarea"
                  placeholder="Your message"
                />
              </div>
              <div className='center-button'>
              <button className="contact-button">
                Submit
              </button>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
