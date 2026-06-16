import ProductCard from "./ProductCard";

const products =[
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ63pPz5445qgBkGlSYuIKLu7cHrZITdNgKDCAiHk2xlkfr230FVXyqoJ0&s=10",
    name:"Abdul Shakoor",
    description:"ddddddddddd",
    price:15500,
    tax:200,

    
  }
];




function AllProducts() {
  return (
    <div>
      {products.map((item,index)=>(
        <ProductCard key={index}{...item}/>
      ))}
    </div>
  )
}

export default AllProducts
