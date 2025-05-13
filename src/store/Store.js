import { configureStore } from "@reduxjs/toolkit";
import myCartReducer from "./CartSlice"


export const store = configureStore({

   reducer: {
    
    myCart: myCartReducer
   
  }

})