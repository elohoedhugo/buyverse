import React from 'react'
import Navbar from './navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'

const RootLayout = () => {
  return (
    <div className='rootlayout'>
    <header><Navbar/></header>

    <main><Outlet/></main>
    <footer><Footer/></footer>
    </div>
  )
}

export default RootLayout