import { signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth, provider } from '../Firebase/Firebase';
import { useAuthState } from 'react-firebase-hooks/auth'
export async function joojle() {
  await signInWithPopup(auth, provider);
}
const Navbar = () => {

  const signout =  async () => {
  await signOut(auth)
  }
  const [user] = useAuthState(auth)
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className=' text-2xl font-bold text-[#e28743]'>TRFR.</h1>
      <ul className='hidden md:flex'>
    {user ? <>
      <li className='p-4'>Home</li>
        <li className='p-4 '>
          <button  onClick={signout}>
            Sign Out
          </button>

        </li>
        <li className='p-4 ml-[25px]'>{user?.displayName}</li>
      <li className='p-4'>
        <img src={user?.photoURL} className='w-10 rou' alt="" />
      </li>
    
      </>  :       <button onClick={joojle}>login</button>}


      </ul>

  
    </div>
  );
};

export default Navbar;
