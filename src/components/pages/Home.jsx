import React from 'react'
import HeroSection from '../heroSection/HeroSection'
import "../pages/home.css"
import Footer from '../footer/Footer'
import Carousel from '../Carousel/Carousel'
import CarouselB from '../Carousel/CarouselB'


const Home = () => {
  return (
    <div className='home'>
      <CarouselB/>
      <HeroSection/>
      <Footer/>
      
    </div>
  )
}

export default Home