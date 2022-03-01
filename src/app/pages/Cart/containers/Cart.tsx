import React, { FunctionComponent } from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { cartSelector } from "../store/selector";
import EmptyCart from "../components/EmptyCart";
import { CartProduct } from "../../../../shared/models";
import CartItem from "../components/CartItem";

const Cart: FunctionComponent = () => {
  const { sortedCart } = useSelector(cartSelector);
  console.log("cart is ", sortedCart);
  return (
    <Box style={{ width: 940 }}>
      {sortedCart.length ? <Grid container>
        { sortedCart.map((product: CartProduct) => (
          <Grid item md={4} sm={6} xs={12} key={product.id}>
            <CartItem product={product}/>
          </Grid>
        ))}
      </Grid> : <EmptyCart />}
    </Box>
  );
};

export default Cart;
