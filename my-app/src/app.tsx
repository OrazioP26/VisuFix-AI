import React from 'react';
import Navbar from './components/landing/Navbar';
import Hero from './components/landing/Hero';
import FeatureBlurb from './components/landing/FeatureBlurb';
import './index.css'; 


function App() {
  return (
    <div
      className="
        min-h-screen
        bg-[linear-gradient(180deg,#6368B4_0%,#E0E7FF_70%,#E0E7FF_100%)]
        text-center text-[#1F2152] font-sans
      "
    >
      <Navbar />
      <Hero />
      <FeatureBlurb />
    </div>
  );
}

export default App;
