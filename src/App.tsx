import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./app/Navbar/containers/Navbar";
import { Container } from "@mui/material";
import Routing from "./app/routing/Routing";
import Header from "./app/Header/Header";
import Footer from "./app/Footer/containers/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Container>
        <Routing />
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
