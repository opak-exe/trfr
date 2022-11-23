import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
export default function Select() {
  return (
    <div className='flex justify-center items-center h-[600px]'>
{[{title:'chinese' , url : 'https://cdn.britannica.com/90/7490-004-BAD4AA72/Flag-China.jpg'}, {title :'european' , url:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/640px-Flag_of_Europe.svg.png'}, {title:'american' , url:'https://img.freepik.com/free-photo/flag-united-states-america_1401-253.jpg?w=360'}].map((el , i) => <> <Link to={`${el.title}`}>
    <div key={i} style={{
        backgroundImage: `url(${el.url})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

    }} className="mp40 flex m-5 justify-center hover:w-[550px] hover:h-[60vh] AI w-[500px] text-white rounded h-[50vh]">
                <p>{el.title}</p>
            </div>
</Link></>)}
    </div>
  )
}
