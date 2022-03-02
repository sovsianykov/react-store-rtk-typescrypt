import React, { FunctionComponent } from "react";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { cartSelector } from "../store/selector";
import EmptyCart from "../components/EmptyCart";
import FilledCart from "./FilledCart";


const Cart: FunctionComponent = () => {
  const { sortedCart } = useSelector(cartSelector);
  return (
    <Box style={{ width: 1150, marginTop: 100 }}>
      {sortedCart.length ? (
        <FilledCart sortedCart={sortedCart} />
      ) : (
        <EmptyCart />
      )}
    </Box>
  );
};

export default Cart;
