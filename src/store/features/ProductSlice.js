import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  productDataGreaterThanHundred: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProductList: (state, action) => {
      state.productData = action.payload;
    },

    getProductFiltered: (state, action) => {
      state.productDataGreaterThanHundred = action.payload.filter((value) => value.price > 100);
    },
  },
});

export default productSlice.reducer;
export const { getProductList, getProductFiltered } = productSlice.actions;
