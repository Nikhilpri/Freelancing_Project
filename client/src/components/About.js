import React from 'react';
import '../App.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="story-section">
        <h2>OUR STORY</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing...
        </p>
      </div>
      <div className="contact-card">
        <h3>Contact Us</h3>
        <div className="contact-details">
          <div className="contact-item">
            <span className="icon">🏠</span>
            <p>Shop No 6, I.b. Patel Road, Goregaon (e), Mumbai, Maharashtra</p>
          </div>
          <div className="contact-item">
            <span className="icon">📍</span>
            <p>751063</p>
          </div>
          <div className="contact-item">
            <span className="icon">📞</span>
            <p>+910000000000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
