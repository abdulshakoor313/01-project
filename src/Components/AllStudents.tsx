import StudentCard from './StudentCard';

const studentData = [
    {
        image: "www.images/image12",
        name: "Anas",
        age: 10,
        clas: "Two",
        section: "A",
    }
];




const AllStudents = () => (
    <div>
        {studentData.map((item, index) => (
            <StudentCard key={index}{...item} />
        ))}



    </div>
);

export default AllStudents;
