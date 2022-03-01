import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../../global/store";
import { productsSelector } from "../../Products/store/selector";


export const cartSelector = createSelector(
          productsSelector,
   (state : RootState)=>state.cart,
  ({products},{cartProducts,totalSum,orders}) =>{
            const sortedCart = []
    for (let i = 0; i < products.length; i++) {
      const cartSameItemsArr = cartProducts.filter((p) => p.id === i)
      if (cartSameItemsArr.length) {
      sortedCart.push({...cartSameItemsArr[0],quantity:cartSameItemsArr.length })}
    }
    return {
      sortedCart
    }
  }
)