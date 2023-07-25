import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const SocialLink = () => {
  return (
    <>
    <div className='right-0 top-[35%] fixed'>
   <ul className=''>
    <li className='flex mr-[-100px] hover:mr-[-10px] duration-300 rounded-md bg-gray-500 items-center px-2 w-40 h-14 justify-between text-white left-0'>
    <FaFacebook size={30}/><a href="#" className='mr-2 text-white font-bold'> FaceBook</a>
    </li>
   </ul>
    </div>
    <div className='right-0 top-[45%] fixed'>
   <ul className=''>
    <li className='flex mr-[-100px] hover:mr-[-10px] duration-300 rounded-md bg-gray-500 items-center px-2 w-40 h-14 justify-between text-white left-0'>
    <FaGithub size={30}/><a href="#" className='mr-2 text-white font-bold'> GitHub</a>
    </li>
   </ul>
    </div>
    <div className='right-0 top-[55%] fixed'>
   <ul className=''>
    <li className='flex mr-[-100px] hover:mr-[-10px] duration-300 rounded-md bg-gray-500 items-center px-2 w-40 h-14 justify-between text-white left-0'>
    <FaInstagram size={30}/><a href="#" className='mr-2 text-white font-bold'> Instagram</a>
    </li>
   </ul>
    </div>
    <div className='right-0 top-[65%] fixed'>
   <ul className=''>
    <li className='flex mr-[-100px] hover:mr-[-10px] duration-300 rounded-md bg-gray-500 items-center px-2 w-40 h-14 justify-between text-white left-0'>
    <FaLinkedinIn size={30}/><a href="#" className='mr-2 text-white font-bold'> LinkdinIn</a>
    </li>
   </ul>
    </div>
    </>
  )
}

export default SocialLink