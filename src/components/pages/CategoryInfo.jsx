import React, { useEffect, useState } from "react";
import products from "../productsData/products.json";
import { useParams } from "react-router-dom";
import SideBar from "../sideBar/SideBar";
import CartPanel from "../cartPanel/CartPanel";
import "../pages/categoryInfo.css";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/CartSlice";

const CategoryInfo = () => {
  const { categoryName, subCategoryName } = useParams();

  const categoryData = products[categoryName];
  
  const [selectedCategory, setSelectedCategory] = useState(null)

  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  useEffect(() => {
    if (categoryData) {

      if(subCategoryName && categoryData[subCategoryName]){
        setSelectedSubCategory(subCategoryName)
      }
      
      else
      {
        const firstSubCategory = Object.keys(categoryData)[0];
      
        setSelectedSubCategory(firstSubCategory);
      }
      
    setSelectedCategory(categoryName)
    }
  }, [categoryData, categoryName, subCategoryName]);

  if (!categoryData) {
    return <div>Sub-Category not found</div>;
  }

  const sendAction = useDispatch()

  return (
    <div className="body">
      <SideBar selectedCategory={selectedCategory} 
      setSelectedCategory={setSelectedCategory}
      selectedSubCategory={selectedSubCategory}
      setSelectedSubCategory={setSelectedSubCategory}/>
      
        {Object.entries(categoryData).map(([subCategory, productList]) => (
          <div key={subCategory}>
            {selectedSubCategory === subCategory && (
              <div className="category-info">
                <h3>{subCategory.toUpperCase()}: {productList.length}</h3>

                <ul className="products-list">
                  {productList.map((product) => (
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
            )}
          </div>
        ))}
      
      <CartPanel className="cartPanel" />
    </div>
  );
};

export default CategoryInfo;
