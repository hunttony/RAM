// src/components/Hero.js
//import React from 'react';
import '../styles/Hero.css';
import image1 from '../content/images/Attorney.jpg';
import ClientIntakeForm from '../components/ClientIntakeForm';
import twenty47 from '../content/images/24-hours.png';



const Hero = () => {
  return (
    <section className="hero">
      
      
      <div className="hero-info-left">
        <img className="hero-img" src={image1} type="image/jpg" alt="Attorney"/>
      </div>
      
      <div className="hero-info">
      
      <ClientIntakeForm />
        <div>
          
        <div className="hero-info-right">           
           
        </div> 
        </div>
      </div>

      <div className="hero-info">

                 
      
      </div>
      
    </section>
  );
};

export default Hero;
