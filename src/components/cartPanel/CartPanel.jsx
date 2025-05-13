import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem } from '../../store/CartSlice'
import "../cartPanel/cartPanel.css"




const CartPanel = () => {

  const sendAction = useDispatch()
  const { cart, totalPrice } = useSelector((state) => state.myCart)


  return (
    <div className='SCart-div'>
     <h3 className='Cart-title'>Shopping Cart </h3>
     {cart.length === 0 ? (
     <p className='emptyP'>Your Shopping cart is empty! </p> 
    )
     : (
      <div className='allItemsDiv'>

        {
          cart.map((item) => (
            <div key={item.id} >
              <div className='item-div'>
              <img src={item.image} className='item-image'/> 
              <p>{item.name}</p>
              <p>${item.price}</p> <span> X </span>
              <p>{item.quantity}</p>
              <p>${item.quantity * item.price}</p>
              </div>
              <button className='removeButton' onClick={ () => sendAction(removeItem(item.id))}>Remove</button>
            </div>
          ))
        }
      </div>
     )
    }
    </div>
  )
}

export default CartPanel