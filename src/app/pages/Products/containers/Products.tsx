import React from "react";
import { CircularProgress, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { Product } from "../../../../shared/models";
import ProductCard from "../components/ProductCard";
import { productsSelector } from "../store/selector";
import { useFetch } from "../../../../shared/hooks/useFetch";
import Box from "@mui/material/Box";

const Products = () => {
  const { products, isLoading } = useSelector(productsSelector);
   useFetch()
  return (
    <Box
      style={{ marginTop: 100}}
      role="presentation"
    >
      <Grid container>
        {isLoading ? (
          <CircularProgress />
        ) : (
          products.map((product: Product) => (
            <Grid item md={3} sm={4} xs={12} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))
        )}
      </Grid>
    </Box>

  );
};

export default Products;
