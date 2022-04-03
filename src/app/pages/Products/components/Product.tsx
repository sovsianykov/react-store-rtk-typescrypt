import React, { FunctionComponent  } from "react";
import { Container, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { productsSelector } from "../store/selector";
import { useSingleProductFetch } from "../../../../shared/hooks/useFetch";





const ProductPage:FunctionComponent = () => {

  useSingleProductFetch()

  const { selectedProduct} = useSelector(productsSelector)

  return (
    <Container style={{marginTop: 100}}>
      <Grid container  spacing={2}>
        <Grid item xs={12} md={6}>
          <Box role='presentation'>
            <img src={selectedProduct.url} width={350} alt='hekk'/>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant='h4' align='center' marginTop={2}>
          {selectedProduct.name}
        </Typography>
          <Typography variant='body1' marginTop={2}>
            {selectedProduct.description}
          </Typography>
          <Typography variant='h5' color='firebrick' marginTop={2}>
           retailed price ${selectedProduct.price}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductPage;
