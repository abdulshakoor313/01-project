import  { useState } from 'react'

const Counter = () => {
  const  [count, setcount]=useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setcount(count+1)}>   Increase</button>
      <button onClick={()=>setcount(count-1)}>   Decrease</button>
      <button onClick={()=>setcount(0)}>   Reet</button>
    </div>
  )
}

export default Counter


