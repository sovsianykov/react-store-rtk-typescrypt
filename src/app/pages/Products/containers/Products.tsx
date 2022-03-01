import React, { useEffect } from "react";
import { CircularProgress, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { Product } from "../../../../shared/models";
import ProductCard from "../components/ProductCard";
import { productsSelector } from "../store/selector";
import { useFetch } from "../../../../shared/hooks/useFetch";

const Products = () => {
  const { products, isLoading } = useSelector(productsSelector);
   useFetch()
  return (
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
  );
};

export default Products;
