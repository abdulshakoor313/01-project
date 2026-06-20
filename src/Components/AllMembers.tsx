import TeamMemberCard from "./TeamMemberCard"

const Members=[
{
    image: "URL",
    name: "Abdul Shakoor",
    designation:"CEO.",
    department: ".......",
    email:"abdul@gmail.com",
}

];

const AllMembers = () => {
  return (
    <div>
      {Members.map((item,index)=>(
    <TeamMemberCard key={index}{...item}/>
    ))}
    
    </div>
  )
}

export default AllMembers;






