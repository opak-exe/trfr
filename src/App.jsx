import React from 'react';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';

import Cart from './components/Cart';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Select from './components/Select';
import MenuOne from './components/services/MenuOne';
import MenuThree from './components/services/MenuThree';
import MenuTwo from './components/services/MenuTwo';


function App() {
  return (
    <>
     <Navbar />   
    <Routes>
<Route path='/' element={<Hero />} />
<Route path='/shop' element={<Cart/>} />
<Route path='/food' element={<Select />} />
<Route path='/food/chinese' element={<MenuOne />} />
<Route path='/food/american' element={<MenuTwo />} />   
<Route path='/food/european' element={<MenuThree />} />
    </Routes>
      <Footer />

    </>
  );
}

export default App;
