import React from "react";
import { useSelector } from "react-redux";
import { cartSelector } from "../../Cart/store/selector";
import Invoice from "./Invoice";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import RecentOrder from "./RecentOrder";


const InvoiceList = () => {
   const {orders, totalSum} = useSelector(cartSelector)
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          {orders.map(o => <RecentOrder order={o} key={o.id} />)}
        </List>
      </nav>
    </Box>
  );
};

export default InvoiceList;
