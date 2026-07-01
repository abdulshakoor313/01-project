import { useState } from "react"

const DeleteUser = () => {
    const [users,  setusers] = useState([
        {id:1, name:"Mehran", class: 2, section:"A" },
        {id:2, name:"Anas", class: 5, section:"B" },
        {id:3, name:"Onais", class: 1, section:"A" },
        {id:4, name:"Ali", class: 4, section:"C" },
    ])
    const deleteUser = (id:number)=>{
        const updateUsers = users.filter((user)=>user.id !==id);
        setusers(updateUsers);
    }
  return (
    <div>
      
    </div>
  )
}

export default DeleteUser
