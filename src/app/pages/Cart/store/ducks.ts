import { CartState } from "./models";
import { createSlice, Draft } from "@reduxjs/toolkit";

const initialState: CartState = {
  cartProducts : [],
  orders: [],
  totalSum: 0 ,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    resetCart: (state) => {
      state.cartProducts = [];
        state.orders = [];
        state.totalSum= 0 ;
    },
    addToCart : (state: Draft<CartState>,action) => {
      state.cartProducts.push(action.payload);
      state.totalSum = state.totalSum + action.payload.price
    },
    removeFromCart : (state: Draft<CartState>,action) => {
    const remProductIndex =  state.cartProducts.findIndex((p) => p.id === action.payload.id);
    state.cartProducts.splice(remProductIndex,1)
      state.totalSum = state.totalSum - action.payload.price


    }
  },

});

export const { resetCart , addToCart , removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;
