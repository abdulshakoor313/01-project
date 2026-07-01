

type TeamMember = {
  image: string;
  name : string;
  designation: string;
  department: string;
  email: string;
}

const TeamMemberCard = ({image,name,designation,department,email}:TeamMember) => {
  return (
    <div>
      <img src={image}/>
      <h1>{name}</h1>
      <h2>{designation}</h2>
      <h3>{department}</h3>
      <h4>Contact{email}</h4>
    </div>
  )
}

export default TeamMemberCard;

