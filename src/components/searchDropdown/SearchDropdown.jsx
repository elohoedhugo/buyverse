import React from 'react'
import products from '../productsData/products.json'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setSearchTerm } from '../../store/SearchTermSlice'

const SearchDropdown = () => {

  const {searchTerm} = useSelector(state =>  state.search)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const allProducts = []

  Object.entries(products).forEach(
    ([category, subCategories]) => {
    Object.entries(subCategories).forEach(
      ([subCategory, productList]) =>{
      productList.forEach(product => {
        allProducts.push({
          ...product,
          category,
          subCategory
        })
      })
    })
  })

const filteredProducts = searchTerm.trim() === ""
 ? [] 
 : 
allProducts.filter(p => 
  p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  p.subCategory.toLowerCase().includes(searchTerm.toLowerCase())||
  p.category.toLowerCase().includes(searchTerm.toLowerCase())
  
)

const handleClick = (category, subCategory) => {
  navigate(`/category/${category}/${subCategory}`)
  dispatch(setSearchTerm(""))
  
}



if (filteredProducts.length === 0){
  return <div className='nomatches'> No matches found</div>
}

  
  return (
    <div className='searchDropdown'>
     { filteredProducts.map((product, index) => (
      <div key={index} onClick={()=>handleClick(product.category,product.subCategory)}>
       <p className='productname'>...{product.name} / {product.category} / {product.subCategory}</p>
      </div>
      ))}
    </div>
  )
}

export default SearchDropdown