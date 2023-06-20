import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  error: "",
  status: false,
  Postdata: "",
  Posterror: "",
  Poststatus: false,
};

export const userFetchThunk = createAsyncThunk(
  "userFetchThunk/get",
  async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      return data;
    } catch (error) {
      // 404
      // 401
      // 400
      // 500
      // throw new Error("Page not found")
    //   console.log("error:", error);
      if (error.response.status === 404) {
        throw new Error("Page not found");
      }
      if (error.response.status === 500) {
        throw new Error("Internal Server Error");
      }
    }
  }
);


export const userPostThunk = createAsyncThunk(
    "userPostThunk/get",
    async ({email, name, password, productname}) => {
      try {
        const { data } = await axios.post(
          `https://jsonplaceholder.typicode.com/user/key=/${productname}`, {
            email: email,
            name: name,
            password:password
          }
        );
        return data;
      } catch (error) {
        // 404
        // 401
        // 400
        // 500
        // throw new Error("Page not found")
      //   console.log("error:", error);
        if (error.response.status === 404) {
          throw new Error("Page not found");
        }
        if (error.response.status === 500) {
          throw new Error("Internal Server Error");
        }
      }
    }
  );


  export const userDeleteThunk = createAsyncThunk(
    "userFetchThunk/get",
    async () => {
      try {
        const { data } = await axios.delete(
          "https://jsonplaceholder.typicode.com/user"
        );
        return data;
      } catch (error) {
        // 404
        // 401
        // 400
        // 500
        // throw new Error("Page not found")
      //   console.log("error:", error);
        if (error.response.status === 404) {
          throw new Error("Page not found");
        }
        if (error.response.status === 500) {
          throw new Error("Internal Server Error");
        }
      }
    }
  );


  export const userUpdateThunk = createAsyncThunk(
    "userFetchThunk/get",
    async () => {
      try {
        const { data } = await axios.put(
          "https://jsonplaceholder.typicode.com/user"
        );
        return data;
      } catch (error) {
        // 404
        // 401
        // 400
        // 500
        // throw new Error("Page not found")
      //   console.log("error:", error);
        if (error.response.status === 404) {
          throw new Error("Page not found");
        }
        if (error.response.status === 500) {
          throw new Error("Internal Server Error");
        }
      }
    }
  );

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userFetchThunk.pending, (state, action) => {
      state.data = [];
      state.status = true;
      state.error = "";
    });

    builder.addCase(userFetchThunk.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = false;
      state.error = "";
    });
    builder.addCase(userFetchThunk.rejected, (state, action) => {
      console.log("action:", action);
      state.data = [];
      state.status = false;
      state.error = action.error.message;
    });



    builder.addCase(userPostThunk.pending, (state, action) => {
        state.Postdata = "";
        state.status = true;
        state.error = "";
      });
  
      builder.addCase(userPostThunk.fulfilled, (state, action) => {
        state.Postdata = action.payload;
        state.status = false;
        state.error = "";
      });

      builder.addCase(userPostThunk.rejected, (state, action) => {
        console.log("action:", action);
        state.Postdata = "";
        state.status = false;
        state.error = action.error.message;
      });

  },
});

export default userSlice.reducer;
