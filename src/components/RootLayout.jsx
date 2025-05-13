import React from 'react'
import Navbar from './navbar/Navbar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='rootlayout'>
    <header><Navbar/></header>

    <main><Outlet/></main>
    </div>
  )
}

export default RootLayout