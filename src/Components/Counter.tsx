import { useState } from "react"


const Counter = () => {
  const [count,setcount]=useState(0);
  return (
    <div>
      <h1>{count}</h1>

      <button></button>
    </div>
  )
}

export default Counter
