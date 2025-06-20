import React from 'react'
import "../categoryCard/categoryCard.css"

const CategoryCard = ({categories, categoryPreviewImages, onClick}) => {

 
  return (
    <div className='category-container'>
      <h1 className='popularP'>Popular categories:</h1>
      <div className="category-list">
        {categories.map((category) => {
          const preview = categoryPreviewImages.find((item) => {
            return item.category === category.title.toLowerCase();
          });

          return (
            <div key={category.title} onClick={()=>onClick(category)} className="category-div">
                <div className="title-div">
                  <p className="category-title"> {category.title}:</p>
                  <span> Found {category.count} </span>
                </div>
                
                  {preview && (
                    <div
                      className="preview"
                      style={{ backgroundImage: `url(${preview.image})` }}
                    ></div>
                  )}
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default CategoryCard