import React, {useEffect,useState, useRef} from 'react'
import products from "../productsData/products.json"
import "../Carousel/carouselB.css"

const CarouselB = () => {

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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const carouselRef = useRef(null);

  // Auto-play (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Navigation functions
  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? secondProducts.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === secondProducts.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Touch/swipe handling (optional)
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (touchStartX === null) return;
    const touchEndX = e.touches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 5) goToNext(); // Swipe left
    if (diff < -5) goToPrev(); // Swipe right
    setTouchStartX(null);
  };
  return (
    <div className="carousel-container" 
      ref={carouselRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}>

     <div className="carousel-slides"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }} >

          {secondProducts.map((item) => (
         <section key={item.product.id}className="carousel-item" style={{backgroundImage: `url(${item.product.image})`}} >
         <p className='carouselP'>{item.product.description}</p>
         <p className='carouselP'>{item.product.description2}</p>
         
      </section>
      ))} 
      </div>

      <button className="carousel-arrow prev" onClick={goToPrev}>
        ❮
      </button>
      <button className="carousel-arrow next" onClick={goToNext}>
        ❯
      </button>

      {/* Dot indicators */}
      <div className="carousel-dots">
        {secondProducts.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    
    </div>
  )
}

export default CarouselB