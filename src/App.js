import React from 'react';
// import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Service from './Components/Service';
import Contact from './Components/Contact';
import Navbar from './Navbar';
import Footer from './Components/Footer';
import Error from './Components/Error';
import Signin from './Components/Signin';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signin/:username' element={<Signin />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
