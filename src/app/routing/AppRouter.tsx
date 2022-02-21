import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../pages/Products/containers/Products";
import Product from "../pages/Products/components/Product";
import About from "../pages/About/containers/About";
import Cart from "../pages/Cart/containers/Cart";

const AppRouter = () => {
  return (
    <Routes>
      <Route  path="/"  element={<Products/>} />
      <Route path=":productId" element={<Product/>} />
      <Route path="about" element={<About/>} />
      <Route path="cart" element={<Cart/>} />
    </Routes>
  );
};

export default AppRouter;