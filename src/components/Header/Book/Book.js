import React, { useEffect, useState } from "react";
import Product from "../../Product/Product";
import './Book.css';

const Book = () => {
   const [products, setProducts] = useState([]);

   useEffect ( () => {
fetch ('products.json')
.then(res=> res.json())
.then(data => setProducts(data))

   }, []);
   const handleAddtoCart =(product) =>{
    console.log('product');
}
    return (
<div className='book-container'>
 <div className="prouducts-container">
{
    products.map(product=><Product 
    key={product.id}
    product={product}
    handleAddtoCart ={handleAddtoCart}
    ></Product>)
}
 </div>
 <div className="cart-container">
<h3>this is for cart</h3>
 </div>
</div>
    );
};

export default Book;