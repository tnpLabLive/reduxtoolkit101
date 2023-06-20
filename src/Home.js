import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incCount } from "./store/features/CountSlice";
import About from "./About";
import { useNavigate } from "react-router-dom";

function Home() {
  const { counter12 } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [data, setData] = useState(0);
  const navigate = useNavigate();

  return (
    <div>
      <h2>App Hello World! data {data}</h2>
      <h2>App Hello World! Redux {counter12}</h2>
      <button onClick={() => navigate("/api")}>API Page</button>
      <button onClick={() => navigate("/async-api")}>createAsyncThunk API Page</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <button onClick={() => setData(data + 1)}>Data Increase</button>

      <button onClick={() => dispatch(incCount(1))}>
        Redux Increased by 1
      </button>
      <button onClick={() => dispatch(incCount(10))}>
        Redux Increase by 10
      </button>
      <About />
      <hr />
    </div>
  );
}

export default Home;
