import React, { FunctionComponent } from "react";
import Box from "@mui/material/Box";
import {
  Container,
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography
} from "@mui/material";
import { Inbox } from "@material-ui/icons";
import { CartProduct, Order } from "../../../../shared/models";

interface invoiceProps {
 order: Order<CartProduct[]>;
 totalSum: number;
}

const Invoice: FunctionComponent<invoiceProps> = ({
 order,
  totalSum
}) => {
  return (
    <Container>
      <Grid container direction='column' >
        <Grid item xs><Typography variant='subtitle1'> order</Typography></Grid>
        <Grid item xs><Typography variant='subtitle1'>{order.items.map(i =>(<span key={i.name}>{i.name}</span>))}</Typography></Grid>
        <Grid item xs><Typography variant='subtitle2'>{order.date}</Typography></Grid>
        <Grid item xs><Typography variant='h4'> {totalSum}</Typography></Grid>
      </Grid>
    </Container>

  );
};

export default Invoice;
