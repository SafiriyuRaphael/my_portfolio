import React from 'react'
import Nav from './Nav'
import SideBar from '../Components/SideBar'
import { useState } from 'react'

const Header = () => {
    const [sideBar, setSideBar]= useState(false)


  return (
    <header className='sticky top-0'>
        <Nav sideBar={sideBar} setSideBar={setSideBar}/>
        <SideBar 
        sideBar={sideBar} setSideBar={setSideBar}/>
    </header>
  )
}

export default Header