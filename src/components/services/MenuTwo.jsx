import React, { useState } from 'react'
import { hum, USA } from '../../Data'

export default function MenuTwo() {
  const [menu] = useState(USA)
  const [usa] = useState(hum)
  return (
    <div className='text-white  h-[350vh]'>
{menu.map((el , i) => {
  return (
    <div key={i} className='flex items-center justify-between mp40 h-[25vh]  mx-[25px] mt-16 rounded-sm w-[40vw]'>
<div className='flex items-center'>
  <img src={el.url} className='object-cover rounded ml-12 w-[100px]' alt="" />
  <h6 className='ml-7 font-bold text-2xl text-[#e28743]'>{el.title} : </h6>
  <p className='ml-6  text-gray-500 text-2xl isolate font-bold'>{el.price || 'a'}</p>
</div>
<button className='bg-[#e28743]  hover:bg-[#9c663d] active:bg-[#765033] focus:outline-none focus:ring focus:ring-violet-300  h-12 w-[200px] rounded-md mr-14 font-medium my-6 mx-auto py-3  text-black'>Add</button>
    </div>
  )

})}
<h1 className='text-center text-[#e28743] font-bold text-2xl'>Hamburger</h1>

{usa.map((el , i) => {
  return (
    <div key={i} className='flex items-center justify-between mp40 h-[25vh]  mx-[25px] mt-16 rounded-sm w-[40vw]'>
<div className='flex items-center'>
  <img src={el.url} className='object-cover rounded ml-12 w-[100px]' alt="" />
  <h6 className='ml-7 font-bold text-2xl text-[#e28743]'>{el.title} : </h6>
  <p className='ml-6  text-gray-500 text-2xl isolate font-bold'>{el.price || 'a'}</p>
</div>
<button className='bg-[#e28743]  hover:bg-[#9c663d] active:bg-[#765033] focus:outline-none focus:ring focus:ring-violet-300  h-12 w-[200px] rounded-md mr-14 font-medium my-6 mx-auto py-3  text-black'>Add</button>
    </div>
  )

})}
    </div>
    
  )
}
