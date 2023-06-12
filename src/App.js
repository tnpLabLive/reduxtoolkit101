import {  useContext, useState } from "react";
import About from "./About";
import { useDispatch, useSelector } from "react-redux";
import { descCount, incCount } from "./store/features/CountSlice";

function App() {

  const { counter12 } = useSelector((state)=> state.counter)

  const dispatch = useDispatch()

  const [data, setData] = useState(0)

  return (
    <div>
    <h2>App Hello World! data {data}</h2>
      <h2>App Hello World! Redux {counter12}</h2>
      
      <button onClick={()=> setData(data + 1 )}>Data Increase</button>
    
      <button onClick={()=> dispatch(incCount(1))}>Redux Increased by 1</button>
      <button onClick={()=> dispatch(incCount(10))}>Redux Increase by 10</button>
      
      <h1/>
     
      <About  />
    </div>
  );
}

export default App;
