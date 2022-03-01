import { CartState } from "./models";
import { createSlice, current, Draft } from "@reduxjs/toolkit";

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
      state.cartProducts.push(action.payload)
    },
    removeFromCart : (state: Draft<CartState>,action) => {
    // const removedItem = state.cartProducts.find((p) => p.id === action.payload.id)
      const { id } = action.payload
      const { cartProducts } = state;
      const index = cartProducts.findIndex((item) => id === item.id);
      cartProducts.splice(index, 1)
      console.log(index);
      current(state).cartProducts.slice(index,1)

    }
  },

});

export const { resetCart , addToCart , removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;
