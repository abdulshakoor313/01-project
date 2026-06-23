import { useState, useEffect } from "react"

const Login = () => {
    const [email, setemail] = useState("");
    const [passWrod, setpassWord] = useState("");
    useEffect(() => {
        console.log("Signd In successfully");
    }, [email, passWrod]);


    return (
        <div>
            <form>
                <input 
                className="border border-black-300"
                type="text"
                placeholder="Inter Email"
                />
                <input 
                 className="border border-black-300"
                type="password"
                placeholder="Inter password"
                />
            </form>
        </div>
    )
}

export default Login
