import { ProductsState } from "./models";
import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./thunk";

const initialState: ProductsState = {
  products: [],
  isLoading: false,
  error: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    resetState: (state) => {
      state.products = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = "Something vent wrong !";
    });
  },
});

export const { resetState } = productsSlice.actions;
export default productsSlice.reducer;
