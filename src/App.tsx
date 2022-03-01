import React, { useEffect } from "react";
import { RootState, useAppDispatch } from "./global/store";
import { fetchProducts } from "./app/pages/Products/store/thunk";
import { useSelector } from "react-redux";
import { BrowserRouter} from "react-router-dom";
import Navbar from "./app/Navbar/containers/Navbar";
import { Container } from "@mui/material";
import Routing from "./app/routing/Routing";

function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <Routing />
      </Container>
    </BrowserRouter>
  );
}

export default App;
