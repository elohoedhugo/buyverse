import React from 'react'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { RiCommunityLine } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import "../accountDropdown/accountDropdown.css"

const AccountDropdown = ({activeTab, toggleTab}) => {
  return (
    
      <div onClick={()=>toggleTab("account")} className={ `accountdiv ${activeTab==="account" ? "active" : ""}`}>
        <div className="icondiv">
          <VscAccount className="account-icon" />
        </div>
        <p>Account</p>
        <div className="icondiv">
          {activeTab === "account"? (<IoIosArrowUp className="react-icon"/>) : (<IoIosArrowDown className="react-icon"/>)}
         
        </div>
        
        {activeTab === "account" && (
       
          <ul className="account-list">
            <li><VscAccount className="dropdown-icon"/> Account</li>
            <li><HiOutlineShoppingBag className="dropdown-icon"/> Orders</li>
            <li><FaRegHeart className="dropdown-icon"/> Wishlist</li>
            <li><IoSettingsOutline className="dropdown-icon"/> Settings</li>
            <li><RiCommunityLine className="dropdown-icon"/> Site Community</li>
          </ul>
        
        )}
      </div>
   
  )
}

export default AccountDropdown