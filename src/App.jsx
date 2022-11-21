import React from 'react';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
     <Navbar />   
    <Routes>
<Route path='/' element={<Hero />} />

    </Routes>
      <Footer />
    
    </>
  );
}

export default App;
