import React, { useState } from "react";
import "../heroSection/heroSection.css";
import products from "../productsData/products.json";
import CategoryCard from "../categoryCard/CategoryCard";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const categories = Object.keys(products).map((category) => {
    const subCategoriesCount = Object.keys(products[category]).length;

    return {
      title: category.charAt(0).toUpperCase() + category.slice(1),
      count: subCategoriesCount,
    };
  });

  const categoryPreviewImages = Object.entries(products).map(
    ([category, subCategories]) => {
      for (let sub in subCategories) {
        const productList = subCategories[sub];
        if (productList.length > 0) {
          return {
            category,
            image: productList[0].image,
            identifier: productList[0].name,
            price: productList[0].price,
          };
        }
      }
    }
  );

  const [selectedCategory, setSelectedCategory] = useState(null)

  const navigate = useNavigate()

  const handleNavigate = (category) => {
    setSelectedCategory(category)
    navigate(`/category/${category.title.toLowerCase()}`)
  }


  return (
    <div className="hero-section">
      <CategoryCard 
      categories={categories} 
      categoryPreviewImages={categoryPreviewImages} 
      onClick={handleNavigate} 
      selectedCategory={selectedCategory}
      />
    </div>
  );
};

export default HeroSection;
