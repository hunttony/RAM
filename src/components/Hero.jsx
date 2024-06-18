// src/components/Hero.js
//import React from 'react';
import '../styles/Hero.css';
import video1 from '../content/videos/Untitled design (1).mp4';
import ContactForm from '../components/ContactForm';

const Hero = () => {
  return (
    <section className="hero">
      <video autoPlay muted loop>
      <source src={video1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-info">
        
        <div>
          <div className="hero-info-left">
            <h2>Available 24/7</h2>
          <p>Our injury legal team is available to answer</p>
           <p>your calls 24/7 and provide you with a free case review.</p>
           </div>           
        </div>

      <div>
      <ContactForm />
      </div>

      </div>

      <div className="hero-info">

                 
      
      </div>
      
    </section>
  );
};

export default Hero;
