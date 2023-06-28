import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './pages/components/usedByAll/Navbar';

// Import all the pages here
import Home from './pages/Home';
import About from './pages/AboutUs';
import Community from './pages/Community';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import Results from './pages/Results';
import Tests from './pages/Tests';
import WhyPS from './pages/WhyPS';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Routes for the pages */}
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Community" element={<Community />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Results" element={<Results />} />
        <Route path="/Tests" element={<Tests />} />
        <Route path="/Whyps" element={<WhyPS />} />
      </Routes>
    </>
  );
}

export default App;
