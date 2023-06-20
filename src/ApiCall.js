import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductFiltered,
  getProductList,
  getProductListError,
  getProductListLoading,
} from "./store/features/ProductSlice";

function ApiCall() {
  const productData = useSelector((state) => state.product.productData);

  const {
    productData: pData,
    productDataGreaterThanHundred,
    productDataError,
    productDataLoading,
  } = useSelector((state) => state.product);

  console.log("pData:", pData);
  console.log("productData:", productData);

  const dispatch = useDispatch();

  useEffect(() => {
    getProductListFetch();
    getProductListFilteredFetch();
  }, []);

  const getProductListFetch = async () => {
    try {
      dispatch(getProductListLoading(true));
      const { data } = await axios.get("https://fakestoreapi.com/products");
      dispatch(getProductList(data));
      dispatch(getProductListLoading(false));
    } catch (error) {
      dispatch(getProductListError("Fetching error"));
      dispatch(getProductListLoading(false));
    }
  };

  const getProductListFilteredFetch = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    dispatch(getProductFiltered(data));
  };

  if (productDataLoading) {
    return <h1>loading...</h1>;
  }
  
  return (
    <div>
      ApiCall
      {productDataError && <p>{productDataError}</p>}
      {!productDataError &&
        productDataGreaterThanHundred.map((value, index) => {
          return (
            <div
              style={{
                backgroundColor: "grey",
                padding: "20px",
                marginTop: "4px",
              }}
              key={index}
            >
              <p>Count: {index + 1}</p>
              <p>Title: {value.title}</p>
              <p>Price: {value.price}</p>
            </div>
          );
        })}
    </div>
  );
}

export default ApiCall;
