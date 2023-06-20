import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  productDataGreaterThanHundred: [],
  productDataError:"",
  productDataLoading:false

};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProductList: (state, action) => {
      state.productData = action.payload;
    },

    getProductListError: (state, action) => {
      state.productDataError = action.payload;
    },

    getProductListLoading: (state, action) => {
      state.productDataLoading = action.payload;
    },

    getProductFiltered: (state, action) => {
      state.productDataGreaterThanHundred = action.payload.filter((value) => value.price > 100);
    },
  },
});

export default productSlice.reducer;
export const { getProductList, getProductFiltered, getProductListError, getProductListLoading } = productSlice.actions;
