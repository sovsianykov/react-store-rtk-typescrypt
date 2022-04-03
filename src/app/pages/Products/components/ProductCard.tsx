import React, { FunctionComponent, memo, useCallback } from "react";
import { Product } from "../../../../shared/models";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
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

const ProductCard: FunctionComponent<ProductCardProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const { sortedCart } = useSelector(cartSelector);
  const active = !!sortedCart.find((p) => p.id === product.id);
  const onClickHandler = useCallback(() => {
    dispatch(addToCart(product));
  }, [dispatch, product]);
  return (
    <Card style={{ margin: 5, width: 250 }}>
      <CardActionArea>
        <CardContent>
          <WrappedImage url={product.url} height={180} />
          <Typography gutterBottom variant="h5" component="h2" marginTop={1}>
            {product.name}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ justifyContent: "space-between" }}>
        <Link to={`/${product.id}`} className="link"  >
          <Typography variant='body1' color='brown' marginLeft={1}>read more</Typography>
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
