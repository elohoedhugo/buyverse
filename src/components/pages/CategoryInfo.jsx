import React, { useEffect, useState } from "react";
import products from "../productsData/products.json";
import {  useNavigate, useParams } from "react-router-dom";
import SideBar from "../sideBar/SideBar";
import CartPanel from "../cartPanel/CartPanel";
import "../pages/categoryInfo.css";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/CartSlice";

const CategoryInfo = () => {
  const { categoryName, subCategoryName } = useParams();
  const navigate = useNavigate()
  const sendAction = useDispatch()
  
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [currentProducts, setCurrentProducts] = useState([])

  

  const categories = Object.keys(products)

  useEffect(() => {

    if(categories.length === 0){
      return;
    }

    if(!categoryName){
      const firstCategory = categories[0]
      const firstSubCategory = Object.keys(products[firstCategory])[0]
      navigate(`/category/${firstCategory}/${firstSubCategory}`, {replace: true})
      return;
    }

    if(products[categoryName]){
      const categoryData = products[categoryName]
      const subCategories = Object.keys(categoryData)

      if(!subCategoryName || !categoryData[subCategoryName]){
        
          const firstSubCategory = subCategories[0]
           navigate(`/category/${categoryName}/${firstSubCategory}`, {replace: true})
           return;
        
      }

      setSelectedCategory(categoryName)
      setSelectedSubCategory(subCategoryName)
      setCurrentProducts(categoryData[subCategoryName] || [])
    

    }
  }, [categoryName, subCategoryName, categories, navigate]);

  if(categories.length === 0){
    return<div>No product available</div>
  }

  if (categoryName && !products[categoryName]) {
    return <div>Category not found</div>;
  }

if(!selectedCategory || !selectedSubCategory){
  return <div>Loading....</div>
}

  return (
    <div className="body">
      <SideBar selectedCategory={selectedCategory} 
      setSelectedCategory={setSelectedCategory}
      selectedSubCategory={selectedSubCategory}
      setSelectedSubCategory={setSelectedSubCategory}/>
      
        
              <div className="category-info">
                <h3>{selectedSubCategory.toUpperCase()}: {currentProducts.length}</h3>

                <ul className="products-list">
                  {currentProducts.map((product) => (
                    <li key={product.name}>
                      <div className="product-card">
                        <img className="product-image" src={product.image} alt="" />
                        <p className="product-name">{product.name}</p>
                        <p>${product.price}</p>
                        <button className="addbutton" onClick={() => sendAction(addItem(product)) }>Add to Cart</button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            
      
      <CartPanel className="cartPanel" />
      <p className="go" onClick={()=> navigate("/cartpanel")}> Go to Cart!!!</p>
    </div>
  );
};

export default CategoryInfo;
