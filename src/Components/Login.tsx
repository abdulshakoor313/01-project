import { useState, useEffect } from "react"

const Login = () => {
    const [email, setemail]=useState("");
    const [passWrod, setpassWord]=useState("");
    useEffect(()=>{
        console.log("Signd In successfully");
    }, [email, passWrod]);


  return (
    <div>
      <input type="text" placeholder="Please">Email</input>
    </div>
  )
}

export default Login
