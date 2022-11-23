import { signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth, provider } from '../Firebase/Firebase';
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, useNavigate, useRoutes } from 'react-router-dom';
import {FaShoppingCart } from 'react-icons/fa'
export async function joojle() {
  await signInWithPopup(auth, provider);
}
const Navbar = () => {

  const signout =  async () => {
  await signOut(auth)

  }
  const [user] = useAuthState(auth)
const [truth , setTruth] = useState(false)
const handler = () => {
  setTruth(true)
}
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className=' text-2xl font-bold text-[#e28743]'>TRFR.</h1>
      <ul className='hidden md:flex'>
    {user ? <>

      <li className='p-4'>
       <Link to='/'>
       Home
       </Link> 
      </li>
       <li className="p-4">
<Link to='/food'>select food</Link>
</li>
      
       <li className="p-4">
      
          <FaShoppingCart  size={25}/>
        
       </li>
        <li className='p-4 '>
          <button  onClick={signout}>
            Sign Out
          </button>
      </li>

        <li className='p-4 ml-[25px]'>{user?.displayName}</li>
      <li className='p-4'>
        <img src={user?.photoURL} className='w-10 rounded-full' alt="" />
      </li>
    
      </>  :       <button onClick={joojle}>login</button>}


      </ul>

  
    </div>
  );
};

export default Navbar;
