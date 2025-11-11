import React from 'react';
import './App.css';
import Home from './Components/Home.jsx';
import Aboutme from './Components/Aboutme.jsx';
import Services from './Components/Services.jsx';
import Skills from './Components/Skills.jsx';
import Project from './Components/Project.jsx';
import Contact from './Components/Contact.jsx';

import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {

  return (
    <div>
       <Routes>
        <Route path="/" element={<><Home/></>} />
        <Route path="/Portfolio" element={<Home />} />
        <Route path="/About" element={<><Aboutme/></>} />
        <Route path="/Services" element={<><Services/></>} />
        <Route path="/skills" element={<><Skills/></>} />
        <Route path="/Project" element={<><Project/></>}/>
        <Route path="/Contact" element={<><Contact/></>}/>
       </Routes>
        <Navbar/>
    </div>
  );
}

export default App;
