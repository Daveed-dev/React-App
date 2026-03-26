import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Service from './Components/Service';
import Contact from './Components/Contact';
import Navbar from './Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
