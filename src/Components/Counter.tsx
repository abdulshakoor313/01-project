import  { useState } from 'react'

const Counter = () => {
  const  [count, setcount]=useState(0);
  return (
    <div>
      <h1 className='text-4xl p-2 colo'>{count}</h1>
      <button  className="bg-red-500 text-white px-4 py-2 rounded-4xl" onClick={()=>setcount(count+1)}>Increase</button>
      <button  className="bg-red-500 text-white px-4 py-2 rounded-4xl" onClick={()=>setcount(count-1)}>Decrease</button>
      <button  className="bg-red-500 text-white px-4 py-2 rounded-4xl" onClick={()=>setcount(0)}>Reet</button>
    </div>
  )
}

export default Counter


