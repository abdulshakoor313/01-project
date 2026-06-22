import { useState, useEffect } from "react"

const UssseEffect = () => {
  const [Count, setCount]=useState(0);
  useEffect(()=>{
    console.log("Changed the value");
  },[Count]);
  return (
    <div>
      <h1>{Count}</h1>
      <button onClick={()=>setCount(Count+1)}></button>
      <button onClick={()=>setCount(Count-1)}></button>
      <button onClick={()=>setCount(Count(0))}></button>
    </div>
  )
}

export default UssseEffect
