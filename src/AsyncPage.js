import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userFetchThunk, userPostThunk } from "./store/features/UserSlice";

function AsyncPage() {
  const { data, error, status } = useSelector((state) => state.user);
  console.log('error:', error)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userFetchThunk());
  }, []);

  if(status){
    return <h1>loading...</h1>
  }

  const handlePost  = (e)=>{
    e.preventDefault()
    // useState: name, email, password
    // dispatch(userPostThunk({name, email, password}))
  }

  return <div>
  <h1>AsyncPage</h1>
    {error && <h1>{error}</h1>}
    {(!error && !status) && data?.map((value, index)=>{
        return(
            <div key={index} style={{
                backgroundColor: "grey",
                padding: "20px",
                marginTop: "4px",
              }}>
                <p>{value.name}</p>
                <p>{value.website}</p>
            </div>
        )
    })}
    <form onSubmit={handlePost}>
        <input type="text" placeholder="name"/>
    </form>
  </div>;
}

export default AsyncPage;
