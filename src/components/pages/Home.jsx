import React from 'react'
import HeroSection from '../heroSection/HeroSection'
import "../pages/home.css"
import Footer from '../footer/Footer'
import Carousel from '../Carousel/Carousel'


const Home = () => {
  return (
    <div className='home'>
      <Carousel/>
      <HeroSection/>
      <Footer/>
      
    </div>
  )
}

export default Home