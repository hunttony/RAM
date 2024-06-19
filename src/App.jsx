// src/App.js
// import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Menu from './components/Menu';

import './App.css';


const App = () => {
  return (
    <div className="App">
      <Helmet>
        <title>Your Site Title</title>
        <meta name="description" content="Your site description" />
        <meta name="keywords" content="Personal Injury Attorneys, Car Accident Lawyers, Truck Accident Lawyers, Wrongful Death Attorneys, Legal Consultation, Expert Legal Services, Personal Injury Law Firm, Free Legal Consultation, Compensation Claims, Experienced Attorneys, Legal Representation, Accident Attorneys, Injury Lawyers, Consultation Services, Legal Assistance" />
        <meta name="author" content="Flavor Pixel, Programmer: Antonio Hunt" />
        <meta property="og:title" content="Your Attorney website" />
        <meta property="og:description" content="Welcome to Your Attorney website, your trusted partner for expert legal services and personal injury representation. Our dedicated team of experienced attorneys specializes in handling cases such as car accidents, truck accidents, wrongful death, and more. We provide personalized consultations and effective legal solutions to ensure you receive the justice and compensation you deserve. Contact us today for a free consultation and let us help you navigate your legal challenges with confidence." />
        <meta property="og:url" content="https://lawyer-site-ochre.vercel.app/" />
        <meta property="og:image" content="https://www.yoursite.com/image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Website",
            "name": "Attorney website",
            "url": "https://lawyer-site-ochre.vercel.app/",
            "author": {
              "@type": "Person",
              "name": "Flavor Pixel, Programmer: Antonio Hunt"
            },
            "description": "Welcome to Your Attorney website, your trusted partner for expert legal services and personal injury representation. Our dedicated team of experienced attorneys specializes in handling cases such as car accidents, truck accidents, wrongful death, and more. We provide personalized consultations and effective legal solutions to ensure you receive the justice and compensation you deserve. Contact us today for a free consultation and let us help you navigate your legal challenges with confidence.",
            "image": "https://www.yoursite.com/image.jpg"
          })}
        </script>
      </Helmet>
      <Header />
      <Menu />
      <main>
        <Hero />        
      </main>
      <Footer />
    </div>
  );
};

export default App;
