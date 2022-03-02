import React from "react";
import { Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";





const EmptyCart = () => {
  return (
    <Container >
       <Typography variant='h4'>
         Your cart is empty!
       </Typography><Typography variant='h5'>
      Try to add something.
    </Typography>
      <Link to={"/"}>
        <Button
          variant="contained"
          color="secondary"
        >
          Return to main page
        </Button>
      </Link>
    </Container>
  );
};

export default EmptyCart;