import { useState } from "react"


const Counter = () => {
  const [count,setcount]=useState(0);
  return (
    <div>
      <h1>{count}</h1>

      <button className="bg-red-400 rounded-2xl p-2" onClick={()=>setcount(count+1)}>Increase</button>
      <button className="bg-red-400 rounded-2xl p-2" onClick={()=>setcount(count-1)}>Decrease</button>
      <button className="bg-red-400 rounded-2xl p-2" onClick={()=>setcount(count)}>Reset</button>
    </div>
  )
}

export default Counter
