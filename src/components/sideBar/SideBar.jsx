import React from "react";
import products from "../productsData/products.json";
import "../sideBar/sideBar.css";
import { useNavigate } from "react-router-dom";

const SideBar = ({selectedCategory, setSelectedCategory, selectedSubCategory, setSelectedSubCategory}) => {
  const navigate = useNavigate();
  return (
    <div className="sideBarBody">
      <ul className="allCategories">
        {Object.entries(products).map(([category, subCategories]) => {
          const title = category.toUpperCase();
          return (
          <li key={category} className="categoryContainer">
              <p onClick={() => {
                setSelectedCategory(category)
                navigate(`/category/${category}`)
              }} 
              className={`categoryTitle ${selectedCategory === category ? "active":""}`}> {title} </p>
              
              <ul className="subCategoryContainer">
                {Object.entries(subCategories).map(([subCategory, productList]) => {
                  const subCategoryTitle =
                    subCategory.charAt(0).toUpperCase() + subCategory.slice(1);
                    const subCategoriesCount = productList.length

                  return (
                    <li key={subCategory}>
                      <p className={`subCategoryTitle ${selectedSubCategory === subCategory ? "active":""}`} onClick={()=> {
                        setSelectedSubCategory(subCategory)
                        navigate(`/category/${category}/${subCategory}`)
                        
                      }}>{subCategoryTitle}: <span>({subCategoriesCount})</span></p>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
