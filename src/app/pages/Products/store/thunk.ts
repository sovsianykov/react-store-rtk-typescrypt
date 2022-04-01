import { createAsyncThunk } from "@reduxjs/toolkit";
import httpRequest from "../../../../Services/HttpRequest";


export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
      const response = await httpRequest.getProducts()
    return response.data
  }
)
export const fetchSingleProduct = createAsyncThunk(
  "products/fetchSingleProduct",
  async (id:number) => {
    const response = await httpRequest.getProduct(id)
    return response.data
  }
)
