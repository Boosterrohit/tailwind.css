import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll'
const Navbar = () => {
const [nav, setNav] = useState(false)
 const link = [
    {
        id: 1,
        link: 'Home'
    },
    {
        id: 2,
        link: 'About'
    },
    {
        id: 3,
        link: 'Portfolio'
    },
    {
        id: 4,
        link: 'Experince'
    },
    {
        id: 5,
        link: 'Contact'
    },
 ]
  return (
    <div className='flex fixed justify-between items-center bg-black text-white px-4 w-full h-20'>
        <div>
            <h1 className='font-signature z-10 text-4xl ml-4'>LOGO.</h1>
        </div>
       <ul className='hidden md:flex'>
     {
        link.map(({id, link}) => (
            <li key={id} className='px-6 cursor-pointer font-bold text-gray-500 hover:scale-110 duration-200'>
            <Link to={link} smooth duration={500}>{link}</Link>
            </li>
        ))
     }
       </ul>
      <div onClick={()=>setNav(!nav)} className='pr-4 z-10 md:hidden text-gray-500'>
        {nav ? <FaTimes size={25}/> : <FaBars size={25}/>}
      </div>
{nav && (

    <ul className=' ram flex flex-col cursor-pointer justify-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500 items-center'>
{/* <li className='py-4 px-4 text-3xl'>Home</li> */}
{
        link.map(({id, link}) => (
            <li key={id} className='py-4 px-4 text-3xl'>{link}</li>
        ))
     }
          </ul>
)}

    </div>
  )
}

export default Navbar