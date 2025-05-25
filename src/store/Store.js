import { configureStore } from "@reduxjs/toolkit";
import myCartReducer from "./CartSlice"
import searchReducer from "./SearchTermSlice"


export const store = configureStore({

   reducer: {
    
    myCart: myCartReducer,
    search: searchReducer
    
  }

})