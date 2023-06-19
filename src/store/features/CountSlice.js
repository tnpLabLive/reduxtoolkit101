import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter12: 1,
};




const countSlice = createSlice({
  name: "countSlice",
  initialState,
  reducers: {
    incCount: (state, action) => {
      state.counter12 = state.counter12 + action.payload;
    },
    descCount: (state, action) => {

      state.counter12 = state.counter12 - action.payload.value;
    },
  },
});

export default countSlice.reducer;

export const { incCount, descCount } = countSlice.actions;