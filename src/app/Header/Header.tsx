import React from "react";
import { AppBar, Typography } from "@mui/material";
import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { AppRoutes } from "../routing/appRouter";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import { cartSelector } from "../pages/Cart/store/selector";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: 60,
    display:'flex',
    alignItems:"center",
    justifyContent:"space-between",
    padding: "0 50px",
  },
  indicator: {
    width:20,
    height:20,
    borderRadius:"50%",
    background: 'red',
    color: "white",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    fontSize:"10px",
    fontWeight:900,
    marginLeft: 5



  }

}));



const Header = () => {
  const classes = useStyles();
  const { sortedCart } = useSelector(cartSelector)
  return (
    <AppBar className={classes.root} style={{ flexDirection:"row" }}>
      <Link to={AppRoutes.Home}>
        <Typography variant='h5'>
          Amplifiers store
        </Typography>
      </Link>
         <Link to={AppRoutes.Cart}>
           <Button variant='contained' color='primary' style={{ borderRadius: "50%"}} >
             <ShoppingCart/>
             <div className={classes.indicator}>{sortedCart.length}</div>
           </Button>
         </Link>
    </AppBar>
  );
};

export default Header;
