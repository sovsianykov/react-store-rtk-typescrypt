import React, { FunctionComponent, useCallback } from "react";
import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { CartProduct } from "../../../../shared/models";
import WrappedImage from "../../Products/components/WrappedImage";
import { useAppDispatch } from "../../../../global/store";
import { addToCart, removeFromCart } from "../store/ducks";
interface CartItemProps {
  product: CartProduct;
}



const CartItem:FunctionComponent<CartItemProps> = ({product}) => {

      const dispatch = useAppDispatch()

  const onAddToCartHandler = useCallback(() => {
     dispatch(addToCart(product))
  },[dispatch])

  const onRemoveFromCartHandler = useCallback(() => {
     dispatch(removeFromCart(product))
  },[])

  return (
    <Card style={{ margin: 20 , width: 300}}>
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
      <CardActions style={{ justifyContent: "space-between" , width: 280}}>
        <Button
          variant="contained"
          color="secondary"
          onClick={onRemoveFromCartHandler}
        >
          -
        </Button>
        <Typography>{product.quantity}</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={onAddToCartHandler}
        >
          +
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;