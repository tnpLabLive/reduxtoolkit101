import { configureStore } from "@reduxjs/toolkit";
import CountSlice from "./features/CountSlice";

const store = configureStore({
    reducer: {
        counter: CountSlice,
    }
})

export default store;