import { useState } from "react";

const ForhandWritten = () => {

const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const submitHandler = (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();
  if (email.trim() === "") {
  return;
}
if (!email.includes("@")) {
  return;
}
};



  return (
    <div><input
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
    </div>
  )
}

export default ForhandWritten
