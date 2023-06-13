# Getting Started with Create React App and Redux Toolkit

```
For react router
npm i react-router-dom@6.3.0

For Redux toolkit
npm install @reduxjs/toolkit

For React bindings:
npm install react-redux

```

##### How to setup Redux Toolkit

###### 1. Create Slice (eg. counterSlice)

```Javascript

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
      console.log('action:', action)
      state.counter12 = state.counter12 * action.payload.value;
    },
  },
});

export default countSlice.reducer;

export const { incCount, descCount } = countSlice.actions;

```
###### 2. Create Store(eg. Here you have to import counterSlice and config store)

```Javascript

import { configureStore } from "@reduxjs/toolkit";
import CountSlice from "./features/CountSlice";

const store = configureStore({
    reducer: {
        counter: CountSlice,
    }
})

export default store;

```
###### 3. Provide store to Root component(eg. index.js)

```Javascript

import { Provider } from "react-redux";
import store from "./store/store";

<Provider store={store}>
    <App />
</Provider>

```
###### 4. How to use initialState data into component

```Javascript

import { useDispatch, useSelector } from "react-redux";
import { descCount, incCount } from "./store/features/CountSlice";

function App() {

    // get data from countSlice.
  const { counter12 } = useSelector((state)=> state.counter)

// In dispatch, it accept action and We pass payload(data) in the action.
  const dispatch = useDispatch()

  return (
    <div>
      <h2>App Hello World! Redux {counter12}</h2>    
      <button onClick={()=> dispatch(incCount(1))}>Redux Increase by 1</button>
      <button onClick={()=> dispatch(incCount(10))}>Redux Increase by 10</button>
    </div>
  );
}

export default App;

```


## Project Link of Day 1

eg. https://gullar.in
