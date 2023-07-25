import React from 'react'
import home from '../images/home.jpg';
import { FaArrowRight } from 'react-icons/fa';
// import {HiArrowSmallRight} from 'react-icons/hi'
// import {BiRightArrowAlt} from 'react-icon/bi';
const Home = () => {
  return (
    <div className=' bg-gradient-to-b from-black to-gray-900 h-full'>
<div name='Home' className='container md:flex-row flex flex-col justify-center items-center h-full'>
  <div className='row flex items-center justify-center w-full h-full mt-5'>
    <div className='col-lg-8 flex flex-col justify-center h-screen col-md-8 col-12'>
      <h1 className='font-bold text-4xl sm:text-6xl text-white'>Programming Hub</h1>
      <p className='py-4 text-gray-500 font-bold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dicta laudantium voluptatibus! Sint consectetur odit saepe repudiandae adipisci, ullam voluptas eveniet, quisquam, alias laboriosam suscipit quas nobis ut! Dolore, consectetur!</p>
    <div>
      <button className='group flex items-center justify-center bg-gradient-to-r from-cyan-500 px-10 my-2 text-white font-bold rounded-3xl hover:scale-110 duration-300 py-2 to-violet-900'>Portfolio 
      <span className='px-2 group-hover:rotate-90 duration-300'>
      <FaArrowRight size={20}/>
      </span>
      </button>
    </div>
    </div>
<div className='col-lg-4 col-md-4 mb-5  col-12'>
  <img src={home} className='rounded-2xl hover:scale-110 duration-300' alt='Rohit Kumar Sah'></img>
</div>



  </div>
</div>
</div>
    )
}

export default Home