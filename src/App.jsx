// src/App.js
// import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Menu from './components/Menu';
import './App.css';


const App = () => {
  return (
    <div className="App">
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
