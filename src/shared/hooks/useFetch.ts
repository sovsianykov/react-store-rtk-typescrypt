import { useSelector } from "react-redux";
import { productsSelector } from "../../app/pages/Products/store/selector";
import { useAppDispatch } from "../../global/store";
import { useEffect } from "react";
import { fetchProducts, fetchSingleProduct } from "../../app/pages/Products/store/thunk";
import { useParams } from "react-router-dom";


export const useFetch =():void =>{
  const { products } = useSelector(productsSelector);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (products.length === 0 ) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products ]);
}

export const useSingleProductFetch =():void => {
  const param = useParams()
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchSingleProduct(Number(param.prodductId)))
  }, [dispatch,param.prodductId])
}
