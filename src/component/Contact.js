import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
const Contact = () => {
  return (
    <div name='Contact' className='bg-gradient-to-b from-black to-gray-900 py-5'>
<div className='container items-center flex flex-col justify-between h-full'>
    <p className='text-white text-3xl sm:text-7xl font-bold text-center'>Contact Me!</p>
    <div className='row flex flex-row items-center'>
    <div className='col-lg-9 col-md-9 col-12'>
        <p className='text-white font-bold text-3xl'>Rohit Kumar Sah</p>
        <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, nulla delectus quod consectetur debitis, quidem maxime unde doloribus magnam atque minima laborum quo quam beatae labore inventore fuga illum sequi.</p>
        <div>
      <button className='group flex items-center justify-center bg-gradient-to-r from-cyan-500 px-10 my-2 text-white font-bold rounded-3xl hover:scale-110 duration-300 py-2 to-violet-900'>Gallary 
      <span className='px-2 group-hover:rotate-180 duration-300'>
      <FaArrowRight size={20}/>
      </span>
      </button>
    </div>
    </div>
    <div className='col-lg-3 col-md-3 col-12 shadow-md shadow-orange-500'>
<form action="" className='flex flex-col justify-end items-start'>
{/* <label className='text-white'>Name:</label> */}
    <input type='text' className='w-full text-white border-white items-center p-2 bg-transparent border-2 my-2' placeholder='Enter Name'/>
   <br/>{/* <br/>     <label>Name:</label> */}
    <input type='email' className='w-full border-2 text-white border-white items-center p-2 bg-transparent' placeholder='Enter Your Email'/>
<br/><textarea className='w-full mb-2 bg-transparent border-2 text-white' placeholder='Enter Comment '></textarea>
<div>
      <button className='group flex items-center justify-center bg-gradient-to-r from-cyan-500 px-10 my-2 text-white font-bold rounded-3xl hover:scale-110 duration-300 py-2 to-violet-900'>SEND
      <span className='px-2 group-hover:rotate-90 duration-300'>
      {/* <FaArrowRight size={20}/> */}
      </span>
      </button>
    </div>
</form>
    </div>
    </div>
</div>
    </div>
  )
}

export default Contact