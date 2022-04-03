import React, { FunctionComponent } from "react";
import { CartProduct, Order } from "../../../../shared/models";
import Box from "@mui/material/Box";
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { AddBox, Inbox } from "@material-ui/icons";
export interface ROProps {
  order: Order<CartProduct[]>;
}

const RecentOrder: FunctionComponent<ROProps> = ({ order }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <AddBox/>
        </ListItemIcon>
        <ListItemText secondary={`ordered at ${order.date}`} key={order.date} />
      </ListItemButton>
    </ListItem>
  );
};

export default RecentOrder;
