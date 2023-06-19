import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductFiltered,
  getProductList,
} from "./store/features/ProductSlice";

function ApiCall() {
  const productData = useSelector((state) => state.product.productData);

  const { productData: pData, productDataGreaterThanHundred } = useSelector(
    (state) => state.product
  );

  console.log("pData:", pData);
  console.log("productData:", productData);

  const dispatch = useDispatch();

  useEffect(() => {
    getProductListFetch();
    getProductListFilteredFetch();
  }, []);

  const getProductListFetch = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    dispatch(getProductList(data));
  };

  const getProductListFilteredFetch = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    dispatch(getProductFiltered(data));
  };

  return (
    <div>
      ApiCall
      {productDataGreaterThanHundred.map((value, index) => {
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
