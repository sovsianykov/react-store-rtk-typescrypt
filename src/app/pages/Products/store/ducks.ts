import { ProductsState } from "./models";
import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts, fetchSingleProduct } from "./thunk";
import { initialProduct } from "../../../../global/constants/mockContent";

const initialState: ProductsState = {
  products: [],
  isLoading: false,
  error: null,
  selectedProduct: initialProduct,
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
    builder.addCase(fetchSingleProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      state.selectedProduct = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchSingleProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = "Something vent wrong !";
    });
  },
});

export const { resetState } = productsSlice.actions;
export default productsSlice.reducer;
