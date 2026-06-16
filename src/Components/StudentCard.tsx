type StudentDataTypes={
    image: string;
    name:string;
    age:number;
    clas:string;
    section:string;
}


function StudentCard({image,name,age,clas,section}:StudentDataTypes) {
  return (
    <div>
      <img src={image}/>
      <h1>Name{name}</h1>
      <h2>Age{age}</h2>
      <h3>Class{clas}</h3>
      <h3>Section{section}</h3>
    </div>
  )
}

export default StudentCard
