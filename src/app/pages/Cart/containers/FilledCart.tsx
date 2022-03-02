import React, { FunctionComponent, useCallback } from "react";
import { CartProduct } from "../../../../shared/models";
import { Container, Grid, Typography } from "@mui/material";
import CartItem from "../components/CartItem";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { useAppDispatch } from "../../../../global/store";
import { useSelector } from "react-redux";
import { resetCart } from "../store/ducks";
import { cartSelector } from "../store/selector";



interface Props {
  sortedCart: CartProduct[]
}
const useStyles = makeStyles(() => ({
  buttonsBlock: {
    width: "100%",
    height: 60,
    display:'flex',
    alignItems:"center",
    justifyContent:"space-between"
  },
}));


const FilledCart: FunctionComponent<Props> = ({sortedCart}) => {
  const classes = useStyles();
  const { totalSum } = useSelector(cartSelector)
  const dispatch= useAppDispatch()
  const onResetCartHandler = useCallback(() =>{
    dispatch(resetCart())
  },[dispatch])


  return (
    <Container>
      <Box role="presentation"  className={classes.buttonsBlock}>
        <Button variant='contained' color='warning' onClick={onResetCartHandler} >Reset Cart</Button>
        <Typography>{`Total sum is $${totalSum}`}</Typography>
        <Button  variant='contained' color='info' >Make Order</Button>
      </Box>

    <Grid container>
      { sortedCart.map((product: CartProduct) => (
        <Grid item md={4} sm={6} xs={12} key={product.id}>
          <CartItem product={product}/>
        </Grid>
      ))}
    </Grid>
    </Container>
  );
};

export default FilledCart;