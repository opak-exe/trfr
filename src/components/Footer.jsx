import React from 'react';
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaDiscord,

} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 flex justify-center text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#e28743]'>TRFR.</h1>
        <p className='py-4'>This
company is a restaurant that can cook all kinds of food from asia and europe from several countries and their
traditional and famous food</p>
        <div className='flex justify-between  my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaDiscord size={30} />
        </div>
      </div>
  
    </div>
  );
};

export default Footer;
