import { configureStore } from "@reduxjs/toolkit";
import CountSlice from "./features/CountSlice";
import ProductReducer from "./features/ProductSlice";
import userReducer from './features/UserSlice'

const store = configureStore({
    reducer: {
        counter: CountSlice,
        product: ProductReducer,
        user: userReducer
    }
})

export default store;