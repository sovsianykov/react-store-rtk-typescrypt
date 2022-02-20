import React, { useEffect } from "react";
import { RootState, useAppDispatch } from "./global/store";
import { fetchProducts } from "./app/pages/Products/store/thunk";
import { useSelector } from "react-redux";
function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
      dispatch(fetchProducts())
  },[dispatch])
  console.log(useSelector((state:RootState) =>state.products ));
  return <div className="App"></div>;
}

export default App;
