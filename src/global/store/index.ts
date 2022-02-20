import { configureStore } from '@reduxjs/toolkit'
import productsReducer  from "../../app/pages/Products/store/ducks";
import { useDispatch } from 'react-redux'
// ...

export const store = configureStore({
  reducer: {
    products: productsReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>() // Export a hook that can be reused to resolve types

export default store