import { useSelector } from "react-redux";
import { productsSelector } from "../../app/pages/Products/store/selector";
import { useAppDispatch } from "../../global/store";
import { useEffect } from "react";
import { fetchProducts } from "../../app/pages/Products/store/thunk";


export const useFetch =():void =>{
  const { products, isLoading } = useSelector(productsSelector);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (products.length === 0 ) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products ]);
}