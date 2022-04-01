import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../pages/Products/containers/Products";
import About from "../pages/About/containers/About";
import Cart from "../pages/Cart/containers/Cart";
import { AppRoutes } from "./appRouter";
import ProductPage from "../pages/Products/components/Product";

const Routing = () => {
  return (
    <Routes>
      <Route  path={AppRoutes.Home}  element={<Products/>} />
      <Route path={AppRoutes.ProductPage} element={<ProductPage/>} />
      <Route path={AppRoutes.About} element={<About/>} />
      <Route path={AppRoutes.Cart} element={<Cart/>} />
    </Routes>
  );
};

export default Routing;
