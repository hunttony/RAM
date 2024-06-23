import { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ChurchReligiousSection from './pages/ChurchReligiousSection';
import VolunteerOpportunities from './pages/VolunteerOpportunities';
import Menu from './components/Menu';
import './App.css';

const App = () => {
  const religiousSectionRef = useRef(null);

  const scrollToSection = () => {
    if (religiousSectionRef.current) {
      religiousSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Helmet>
        <title>Restoration Apostolic Ministries</title>
        <meta name="description" content="Description of Restoration Apostolic Ministries" />
        <meta
          name="keywords"
          content="church, religious, ministry, community, faith, spiritual"
        />
        <meta name="author" content="Your Name" />
        <meta property="og:title" content="Restoration Apostolic Ministries" />
        <meta
          property="og:description"
          content="Welcome to Restoration Apostolic Ministries, a community dedicated to spreading faith and spiritual growth. Join us in our various ministries and volunteer opportunities."
        />
        <meta property="og:url" content="https://example.com/" />
        <meta property="og:image" content="https://example.com/image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Restoration Apostolic Ministries",
            "url": "https://example.com/",
            "description": "Restoration Apostolic Ministries is a community dedicated to spreading faith and spiritual growth.",
            "image": "https://example.com/image.jpg",
            "sameAs": [
              "https://www.facebook.com/yourministry",
              "https://twitter.com/yourministry",
              "https://www.instagram.com/yourministry"
            ]
          })}
        </script>
      </Helmet>
      <Router>
        <Header />
        <Menu scrollToSection={scrollToSection} />
        <main>
          <Hero />
          <div ref={religiousSectionRef}>
            <Routes>
              <Route path="/church-religious-section" element={<ChurchReligiousSection />} />
              <Route path="/volunteer-opportunities" element={<VolunteerOpportunities />} />
              {/* Add other routes here */}
            </Routes>
            <ChurchReligiousSection />
            <VolunteerOpportunities />
          </div>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
