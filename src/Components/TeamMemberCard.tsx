import React from 'react'

type TeamMember={
  image: string;
  name : string;
  designation: string;
  department: string;
  email: string;
}

const TeamMemberCard = ((image,name,designation,department,email)) => {
  return (
    <div>
      <img srce={image}/>
      <h1>{name}</h1>
      <h2>{designation}</h2>
    </div>
  )
}

export default TeamMemberCard
