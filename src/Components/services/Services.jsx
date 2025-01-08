import React from 'react'
import Statistics from './Statistics'
import Service from './Service'
import User from './User'
import Engagement from './Engagement'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <main className='bg-black w-screen rounded-md'>
        <div className="h-[35vh] flex items-center pl-10 bg-[url('/matrix1.jpg')] bg-center bg-cover bg-blend-darken justify-center flex-col bg-black/70">
        <h1 className="text-6xl ">Services</h1>
        <div className="text-xl mt-4 tracking-wide flex gap-2">
          <Link to="/"> Home</Link> &gt;&gt; <p className="text-blue-600"> My Services </p></div>
      </div>
      <h1 className='text-center px-8 text-4xl font-bold text-[#FF6663] mt-10'>My Services</h1>
      <Service/>
    <div className='grid grid-cols-1 md:grid-cols-[auto_300px] '>
        <section className='p-4 md:pb-16'>
            <Statistics/>
            <h1 className='text-center pt-10'>Let's Work Together to Promote your ideas</h1>
            <a href='mailto:toniaroyce@gmail.com' className='btn-ping shadow-lg shadow-white/20 hover:text-white'
            >Contact Me</a>  
        </section>
        <section className='p-4 md:pb-16 border-green-200 lg:border-l-2'>
          <User/>
          <Engagement/>
        </section>

    </div>
    </main>
  )
}

export default Services