import React from 'react'

const User = () => {
  return (
    <>
    <div className='p-4 text-center hidden md:block'>
        <div className='size-12 rounded-full overflow-hidden m-auto'>
            <img src="" alt="" />
        </div>
        <div className='py-1 px-4 bg-purple-300/10 mt-4 border-green-300/30 rounded-lg'>
        <h1 className='font-semibold text-sm'> Safiriyu Rapheal</h1>
        <p className='text-gray-300 text-xs'>Manager</p></div>
        <a href="mailto:toniaroyce@gmail.com" className='py-2 px-4 bg-purple-300 rounded-lg text-white hover:bg-purple-300/10 text-sm hover:text-purple-300 inline-block mt-4'>
        View details</a>
    </div>
    <div className='mt-8 bg-purple-500 bg-[url("pexels-brett-sayles-3653997.jpg")] bg-contain text-center py-8 px-4 rounded-lg text-white bg-blend-multiply '>
    <h1 className='text-xl font-semibold mb-2'>
        Boost Your Brand's Reach</h1>
        <p className='text-white/80 mb-2'> Essential tools to create, share, and profit seamlessly</p>
        <a href="mailto:toniaroyce@gmail.com" className='py-2 px-4 bg-purple-300 rounded-lg text-white hover:bg-purple-300/70 text-sm inline-block'>Boost Now</a></div>
    </>
  )
}

export default User