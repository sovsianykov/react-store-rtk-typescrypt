import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../../global/store";



export const productsSelector = createSelector(
  (state:RootState) => state.products,
  ({ products, isLoading, error ,selectedProduct}) =>{
        if (error) {
          console.log(error);
        }
        return {
          isLoading,
          products,
          selectedProduct
        }
  }
)

