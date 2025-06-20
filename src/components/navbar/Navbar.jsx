import React from "react";
import { useState } from "react";
import "../navbar/navbar.css";
import buyverseImg from "../../assets/logo-no-background.png";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import AccountDropdown from "../accountDropdown/AccountDropdown";
import SearchDropdown from "../searchDropdown/SearchDropdown";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../../store/SearchTermSlice";
import { useNavigate } from "react-router-dom";
import { IoHome } from "react-icons/io5";
const Navbar = () => {

  const [activeTab, setActiveTab] = useState(null)

  const toggleTab = (tabIndex) => {
    
    setActiveTab((prev)=>(
        prev === tabIndex? null : tabIndex
    ))

  }
  
  const [inputActive, setInputActive] = useState(false)

  const {searchTerm} = useSelector(state => state.search)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value))
  }

  const {cart} = useSelector(state => state.myCart)

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0)



 
  return (
    <div className="navbar">
      <img className="logo" src={buyverseImg} alt="buyverse logo" onClick={()=>navigate("/")}/>
      <form action="">
        <input className= {`input ${inputActive ? "active": ""}`} placeholder="Search for products here...."  onFocus={()=>setInputActive(true)} onBlur={()=>setInputActive(false)} value={searchTerm} onChange={handleSearch}></input>
        <SearchDropdown className="searchDropdown"/>
        <button className="search-button">Search</button>
      </form>

      <div onClick ={()=>{
        toggleTab("home")
        navigate("/")
        }} className={ `arrowdiv ${activeTab === "home" ? "active" : "" }`}>
        <p>Home</p>
        <div className="icondiv">
        {activeTab === "home" ? (<IoIosArrowUp className="react-icon"/>) : (<IoIosArrowDown className="react-icon"/>)}
        </div>
      </div>

      <div onClick ={()=>toggleTab("returns")} className={ `arrowdiv ${activeTab === "returns" ? "active" : "" }`}>
        <p>Returns</p>
        <div className="icondiv">
        {activeTab === "returns" ? (<IoIosArrowUp className="react-icon"/>) : (<IoIosArrowDown className="react-icon"/>)}
        </div>
      </div>

      <div onClick= {()=>toggleTab("orders")} className={ ` arrowdiv ${activeTab==="orders" ? "active" : ""}`}>
        <p>Orders</p>
        <div className="icondiv">
        {activeTab=== "orders"? (<IoIosArrowUp className="react-icon"/>) : (<IoIosArrowDown className="react-icon"/>)}
        </div>
      </div>

      <AccountDropdown activeTab={activeTab} toggleTab={toggleTab}/>

      <div onClick={()=>{
        toggleTab("cart")
        navigate("/category")
        }} className={`cartdiv ${activeTab==="cart" ? "active" : ""}`} >
        <div className="icondiv" id="cart-icon">
          <MdOutlineShoppingCart className="cart-icon"/>
          {totalItems > 0 && <span className="cartBadge">{totalItems}</span>}
        </div>
        <p>Cart</p>
        <div className="icondiv" id="arrow-icon">
        {activeTab === "cart" ? (<IoIosArrowUp className="react-icon"/>) : (<IoIosArrowDown className="react-icon"/>)}
        </div>
      </div>

      <div className="homediv" onClick={()=> navigate("/")}>
          <IoHome className="home-icon"/>
         
      </div>
    </div>
  );
};

export default Navbar;
