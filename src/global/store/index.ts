import { configureStore } from '@reduxjs/toolkit'
import productsReducer  from "../../app/pages/Products/store/ducks";
import { useDispatch } from 'react-redux'
import  cartReducer  from "../../app/pages/Cart/store/ducks";


export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>() // Export a hook that can be reused to resolve types

export default store