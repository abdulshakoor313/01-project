type MyproductType={
  name:string;
  description: string;
  image:string;
  price:number;
  tax:number;
}


function ProductCard({name,description, image,price,tax}:MyproductType) {
  return (
    <div>
      <img src={image}/>
      <h1>{name}</h1>
      <p>{description}</p>
      <h2>{price}</h2>
      <span>{tax}</span>
    </div>
  )
}

export default ProductCard
