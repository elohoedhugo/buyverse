import React from 'react'
import products from "../productsData/products.json"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'
import "../Carousel/carousel.css"

const Carousel = () => {

 const secondProducts = Object.entries(products).map(([category, subCategories]) => {
      const [firstSubCategory, firstSubCategoryProducts] = Object.entries(subCategories)[0]
      if (firstSubCategory && firstSubCategoryProducts.length > 1){
       
        return{ 
        category,
        subcategory: firstSubCategory,
        product: firstSubCategoryProducts[1]
      }
      }
      return null
      
  }).filter(Boolean)

  console.log("Second products:", secondProducts);
  

  const settings = {
    dots: true,
    infinite: true,
    speed:500,
    slidesToShow:1,
    slidesToScroll:1,
    autoplay: true,
    autoplaySpeed: 3000,
    lazyLoad: true,
    cssEase: "linear"
  }
  return (
    <div className='carousel'>
      <Slider {...settings}>
      
      {/* {secondProducts.map((item) => (
         <section key={item.product.id}className="carousel-item" style={{backgroundImage: `url(${item.product.image})`}} >
         <p className='carouselP'>{item.product.description}</p>
         <p className='carouselP'>{item.product.description2}</p>
         
      </section>
      ))}  */}

      <div className='cdiv' id='fdiv'>
        <div className='carouselPDiv'>
          <p className='carouselP'> Wear your vibe. Own your look</p>
        <p className='carouselP'>Limited stock. Unlimited style. Grab yours now!</p>
        </div>
        
      </div>
      <div className='cdiv' id='sdiv'>
        <div className='carouselPDiv'>
          <p className='carouselP'> Work. Stream. Play. Repeat—with lasting battery</p>
        <p className='carouselP'>Experience the performance you’ve been waiting for. Shop now!</p>
        </div>
      </div>
      <div className='cdiv' id='tdiv'>
           <div className='carouselPDiv'>
          <p className='carouselP'> Because the real love story never ends</p>
        <p className='carouselP'>Selling out rapidly! Get yours</p>
        </div>
      </div>
      <div className='cdiv' id='fodiv'>
        <div className='carouselPDiv'>
          <p className='carouselP'> Because sensitive skin deserves special care</p>
        <p className='carouselP'>Glow up before we sell out!</p>
        </div>
      </div>
     
      </Slider>

    </div>
  )
}

export default Carousel