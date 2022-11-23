import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';
import { auth } from '../Firebase/Firebase';
import { joojle } from './Navbar';

const Hero = () => {
  const [user] = useAuthState(auth);
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#e28743] font-bold text-[50px] p-2'>
        TRFR ,The royal food restaurant
         </p>
        <h1 className='md:text-5xl sm:text-6xl text-4xl font-bold md:py-6'>
          you don't have to research we have  your options
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            including , 
          </p>
          <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#e28743]'
            strings={['Chinese food', 'European food' , 'American food']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>this  restaurant can cook all types of food</p>
{ user  ?     <Link to='/food'> <button className='bg-[#e28743] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button> </Link>  :  <button onClick={joojle} className='bg-[#e28743] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Login</button>}
      </div>
    </div>
  );
};

export default Hero;
