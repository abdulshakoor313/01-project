import { useState } from "react"


const Login = () => {
const [email, setEmail]= useState("");



  return (
    <div>
      <form>
        <h1>Log In</h1>
        <input 
        className="border border-black"
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        <h2>{email}</h2>
      </form>
    </div>
  )
}

export default Login
