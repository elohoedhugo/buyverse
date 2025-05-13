import { createSlice } from "@reduxjs/toolkit";


const initialState = {

    cart: [],

    totalPrice: 0

}

const CartSlice = createSlice({
   
   name: "myCart",
   
   initialState,
   
   reducers: {
      
    addItem: (state, action) => {
      
      const product = action.payload
           
      const existingProduct = state.cart.find(item => item.id === product.id)

      if(existingProduct){
       
        existingProduct.quantity += 1

      }

      else{
        
        state.cart.push({...product, quantity: 1})
        
      }
      
      state.totalPrice += product.price

    },

    removeItem: (state, action) => {
      const id = action.payload

      const itemToRemove = state.cart.find(item => item.id === id)

      if(itemToRemove.quantity > 1){
        
        itemToRemove.quantity -= 1

      }else{

       state.cart = state.cart.filter(item => item.id !== id )

      }

      state.totalPrice -= itemToRemove.price 

    }, 

    clearCart: (state) => {

     state.cart = []

    }
   }


})

export const {addItem, removeItem, clearCart} = CartSlice.actions
export default CartSlice.reducer
