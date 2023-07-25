import React from 'react'
import htm1 from '../images/htm1.png';
import csss1 from '../images/csss1.png';
import jss1 from '../images/jss1.png';
import reac1 from '../images/reac1.png';
import boot1 from '../images/boot1.jpeg';
import vs from '../images/vs.jpeg';

const Experience = () => {
  return (
    <div name='Experience' className='bg-gradient-to-b from-gray-800 to-black w-full    '>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center h-full w-full text-white'>
            <div>
                <p className='text-center sm:text-7xl font-bold'>Experience</p>
                <p className='text-center sm:text-2xl font-bold text-gray-400'>These are the technology that I have work on It</p>
            </div>
            <div className='w-full grid gird-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                <div className='shadow-md shadow-orange-500 hover:scale-105 duration-300 py-2 rounded-lg'>
                    <img src={htm1} className='w-20 mx-auto'/>
                    <p className='mt-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-blue-500 hover:scale-105 duration-300 py-2 rounded-lg'>
                    <img src={csss1} className='w-20 mx-auto'/>
                    <p className='mt-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-yellow-500 hover:scale-105 duration-300 py-2 rounded-lg'>
                    <img src={jss1} className='w-20 mx-auto'/>
                    <p className='mt-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-blue-400 hover:scale-105 duration-300 py-2 rounded-lg'>
                    <img src={reac1} className='w-20 mx-auto'/>
                    <p className='mt-4'>REACT</p>
                </div>
                <div className='shadow-md shadow-violet-900 hover:scale-105 duration-300 py-2 rounded-lg'>
                    <img src={boot1} className='w-20 mx-auto'/>
                    <p className='mt-4'>BOOTSTRAP</p>
                </div>
                <div className='shadow-md shadow-blue-200 hover:scale-105 duration-300 py-2 rounded-lg'>
                    <img src={vs} className='w-20 mx-auto'/>
                    <p className='mt-4'>VS CODE</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience