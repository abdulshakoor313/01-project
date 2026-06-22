import { useEffect, useState } from 'react'

const UssseEffect = () => {
  useEffect(()=>{
   const [Count, setCount] = useState(0);
  })
  return (
    <div>
      <h1>{Count}</h1>
      <button onClick={()=>setCount()=>{}</div>}></button>
    </div>
  )
}

export default UssseEffect
