import {useState} from 'react'

const ListRendering = () => {
    const [users] = useState([
        {id: 1, name:"Anas", age:10},
        {id: 1, name:"Onais", age:15},
    ]);
  return (
    <div>
      <h1>Usr List</h1>
      {users.map((user)=>(
        <div key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.age}</p>
        </div>
      ))}
    </div>
  )
}

export default ListRendering
