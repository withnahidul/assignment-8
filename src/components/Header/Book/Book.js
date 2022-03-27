import React, { useEffect, useState } from "react";
import Cart from "../../Cart/Cart";
import Product from "../../Product/Product";
import './Book.css';

const Book = () => {
   const [products, setProducts] = useState([]);
const [cart , setCart] = useState([]);
   useEffect ( () => {
fetch ('products.json')
.then(res=> res.json())
.then(data => setProducts(data))

   }, []);
   const handleAddtoCart =(product) =>{
    console.log('product');
    const newCart = [...cart, product];
    setCart(newCart);
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
<Cart cart={cart}></Cart>
 </div>
</div>
    );
};

export default Book;