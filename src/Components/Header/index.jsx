import React from 'react'
import Nav from './section/Nav'
import SideBar from './section/SideBar'
import { useState } from 'react'

const Header = () => {
    const [sideBar, setSideBar]= useState(false)


  return (
    <>
    <header className=''>
        <SideBar 
        sideBar={sideBar} setSideBar={setSideBar}/>
    </header>
        <Nav sideBar={sideBar} setSideBar={setSideBar}/>
    </>
  )
}

export default Header