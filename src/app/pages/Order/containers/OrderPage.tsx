import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { cartSelector } from "../../Cart/store/selector";
import { Container, Grid } from "@mui/material";
import Invoice from "../components/Invoice";
import { makeStyles } from "@mui/styles";
import { CartProduct, Order } from "../../../../shared/models";
import InvoiceList from "../components/InvoiceList";
import { format } from "date-fns";
import { v4 as uuidv4 } from "uuid";
import Button from "@mui/material/Button";
import { useAppDispatch } from "../../../../global/store";
import { addOrder } from "../../Cart/store/ducks";
import Box from "@mui/material/Box";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 800,
    margin: "0 auto",
    marginTop: 100,
  },
}));

const initialOrder = {
  id: uuidv4(),
  date: format(Date.now(), "yyyy-MM-dd-HH:mm"),
  items: [],
};
const OrderPage = () => {
  const dispatch = useAppDispatch();
  const [active , setActive] = useState(false)
  const [order, setOrder] = useState<Order<CartProduct[]>>(initialOrder);
  const classes = useStyles();
  const { sortedCart, totalSum } = useSelector(cartSelector);
  console.log(sortedCart);
  const onClickHandler = useCallback(() => {
    const newOrder = {
      id: uuidv4(),
      date: format(Date.now(), "yyyy-MM-dd-HH:mm"),
      items: sortedCart,
    };
    setActive(true)
    dispatch(addOrder(newOrder));
  }, [dispatch]);
  return (
    <Container>
      <Grid container className={classes.root}>
        <Grid item xs={12} md={6}>
          <Invoice order={order} totalSum={totalSum} />
        </Grid>
        <Grid item xs={12} md={6}>
          <InvoiceList />
        </Grid>
      </Grid>
      <Button
        disabled={active}
        variant="contained" onClick={onClickHandler}>
        submit order
      </Button>
      <Button variant='contained' color='error'>
        Cancel
      </Button>
    </Container>
  );
};

export default OrderPage;
