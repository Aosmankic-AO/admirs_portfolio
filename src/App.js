import React from 'react'
import styled from 'styled-components'
import Homepage from './components/Homepage';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume'
import { Routes, Route, Link } from "react-router-dom";


function App() {
  
    return (
        <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="resume" element={<Resume />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
        </div>
  );
}

export default App;
