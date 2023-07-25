import React from 'react'
import csss from '../images/csss.png';
import htm from '../images/htm.png';
import jss from '../images/jss.png';
import boot from '../images/boot.png';
import rea from '../images/rea.avif';
// import csss from '../images/csss.png';
const Portfolio = () => {
  return (
    <div name='Portfolio' className='bg-gradient-to-b from-black to-gray-800'><br/>
    <div className='container py-5'>
        <div>
            <p className='text-center text-white text-2xl sm:text-7xl font-bold'>My Portfolio</p>
            <p className='text-center text-white sm:text-3xl'>Check out some of my work right here</p>
        </div>
        <div className='row'>
            <div className='col-lg-4 col-md-4 col-12 my-4 shadow-white overflow-hidden '>
<img className='w-full hover:scale-105 duration-500 overflow-hidden' src={htm}/>
<div className='flex justify-around items-center text-white pt-2 bg-black pb-2'>
    
<button className='bg-gradient-to-r from-cyan-500 px-10 my-2 text-white font-bold rounded-3xl hover:scale-110 duration-300 py-2 to-violet-900'>Demo</button>
<button className='bg-gradient-to-r from-cyan-500 px-10 my-2 text-white font-bold rounded-3xl hover:scale-110 duration-300 py-2 to-violet-900'>Code</button>
</div>
            </div>
            <div className='col-lg-4 col-md-4 my-4 col-12 shadow-white bg-black overflow-hidden'>
<img className='w-full hover:scale-105 duration-500 overflow-hidden' src={csss}/>
<div className='flex justify-around items-center text-white pt-2 bg-black pb-2'>
    
<button className='bg-gradient-to-r from-cyan-500 px-10 my-2 text-white font-bold rounded-3xl hover:scale-110 duration-300 py-2 to-violet-900'>Demo</button>
<button className='bg-gradient-to-r from-cyan-500 px-10 my-2 text-white font-bold rounded-3xl hover:scale-110 duration-300 py-2 to-violet-900'>Code</button>
</div>
            </div>
            <div className='col-lg-4 col-md-4 my-4 col-12 shadow-white overflow-hidden '>
<img className='w-full h-30 hover:scale-105 duration-500 overflow-hidden' src={jss}/>
<div className='flex justify-around items-center text-white pt-2 bg-black pb-2'>
    
<button className='bg-gradient-to-r from-cyan-500 px-10 my-2 text-white font-bold rounded-3xl hover:scale-110 duration-300 py-2 to-violet-900'>Demo</button>
<button className='bg-gradient-to-r from-cyan-500 px-10 my-2 text-white font-bold rounded-3xl hover:scale-110 duration-300 py-2 to-violet-900'>Code</button>
</div>
            </div>


        </div> 
            </div>
        </div>
  )
}

export default Portfolio