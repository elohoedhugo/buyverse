import React from "react";
import { useState } from "react";
import "../navbar/navbar.css";
import buyverseImg from "../../assets/logo-no-background.png";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";

import AccountDropdown from "../accountDropdown/AccountDropdown";

const Navbar = () => {

  const [activeTab, setActiveTab] = useState(null)

  const toggleTab = (tabIndex) => {
    
    setActiveTab((prev)=>(
        prev === tabIndex? null : tabIndex
    ))


  }
  
  const [inputActive, setInputActive] = useState(false)

  const handleInput = () => {
    setInputActive(true)
  }

 
  return (
    <div className="navbar">
      <img className="logo" src={buyverseImg} alt="buyverse logo" />
      <form action="">
        <input className= {`input ${inputActive ? "active": ""}`} placeholder="Search for products here...." onFocus={handleInput} onClick={handleInput}></input>
        <button className="search-button">Search</button>
      </form>

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

      <div onClick={()=>toggleTab("cart")} className={`cartdiv ${activeTab==="cart" ? "active" : ""}`} >
        <div className="icondiv">
          <MdOutlineShoppingCart className="cart-icon" />
        </div>
        <p>Cart</p>
        <div className="icondiv">
        {activeTab === "cart" ? (<IoIosArrowUp className="react-icon"/>) : (<IoIosArrowDown className="react-icon"/>)}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
