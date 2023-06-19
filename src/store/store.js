import { configureStore } from "@reduxjs/toolkit";
import CountSlice from "./features/CountSlice";
import ProductReducer from "./features/ProductSlice";

const store = configureStore({
    reducer: {
        counter: CountSlice,
        product: ProductReducer
    }
})

export default store;