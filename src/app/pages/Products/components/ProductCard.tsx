import React, { FunctionComponent, memo, useCallback } from "react";
import { Product } from "../../../../shared/models";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useAppDispatch } from "../../../../global/store";
import { addToCart } from "../../Cart/store/ducks";
import { useSelector } from "react-redux";
import { cartSelector } from "../../Cart/store/selector";
import WrappedImage from "./WrappedImage";
interface ProductCardProps {
  product: Product;
}






const ProductCard: FunctionComponent<ProductCardProps> = ({
  product,
}) => {
   const dispatch = useAppDispatch();
  const { sortedCart } = useSelector(cartSelector);
 const active = !! sortedCart.find((p) => p.id === product.id)
  const onClickHandler = useCallback(() => {
    dispatch(addToCart(product))
  }, []);
  return (
    <Card style={{ margin: 10, width: 250 }}>
      <CardActionArea>
        <CardContent>
          <WrappedImage url={product.url} height={200} />
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ justifyContent: "space-between" }}>
        <Link to={`/${product.id}`} className="link">
          Learn More
        </Link>
        <Button
          variant="contained"
          color="primary"
          disabled={active}
          onClick={onClickHandler}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default memo(ProductCard);
