// src/components/Hero.js
//import React from 'react';
import '../styles/Hero.css';
import video1 from '../content/videos/Untitled design (1).mp4';
import ClientIntakeForm from '../components/ClientIntakeForm';
import twenty47 from '../content/images/24-hours.png';
import AnimatedText from '../components/AnimatedText';

const Hero = () => {
  return (
    <section className="hero">
      <video autoPlay muted loop>
      <source src={video1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <AnimatedText text="For a FREE consultation. Fill in the intake form." />
      <div className="hero-info">
        
        <div>
           
          <div className="hero-info-left">
            <img src={twenty47} style={{ width: '15%', height: 'auto'}} alt="24/7" />
            <h2>Available 24/7</h2>
          <p>Our injury legal team is available to answer</p>
           <p>your calls 24/7 and provide you with a free case review.</p>


           <div className="hero-info-right">
           
            
           
          </div>
           </div>   
                
        </div>

        <ClientIntakeForm />
      <div>
      
      </div>

      </div>

      <div className="hero-info">

                 
      
      </div>
      
    </section>
  );
};

export default Hero;
