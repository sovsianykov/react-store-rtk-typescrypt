import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../pages/Products/containers/Products";
import Product from "../pages/Products/components/Product";
import About from "../pages/About/containers/About";
import Cart from "../pages/Cart/containers/Cart";
import { AppRoutes } from "./appRouter";

const Routing = () => {
  return (
    <Routes>
      <Route  path={AppRoutes.Home}  element={<Products/>} />
      <Route path={AppRoutes.Product} element={<Product/>} />
      <Route path={AppRoutes.About} element={<About/>} />
      <Route path={AppRoutes.Cart} element={<Cart/>} />
    </Routes>
  );
};

export default Routing;