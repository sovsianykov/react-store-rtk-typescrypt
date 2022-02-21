import React, { useEffect } from "react";
import { RootState, useAppDispatch } from "./global/store";
import { fetchProducts } from "./app/pages/Products/store/thunk";
import { useSelector } from "react-redux";
import { BrowserRouter} from "react-router-dom";
import Navbar from "./app/pages/Navbar/containers/Navbar";
import { Container } from "@mui/material";
import AppRouter from "./app/routing/AppRouter";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  console.log(useSelector((state: RootState) => state.cart));

  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <AppRouter />
      </Container>
    </BrowserRouter>
  );
}

export default App;
