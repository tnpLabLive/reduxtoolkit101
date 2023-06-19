import { useContext, useState } from "react";
import About from "./About";
import { useDispatch, useSelector } from "react-redux";
import { descCount, incCount } from "./store/features/CountSlice";
import { Routes, Route } from "react-router-dom";
import ApiCall from "./ApiCall";
import Home from "./Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="api" element={<ApiCall />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
