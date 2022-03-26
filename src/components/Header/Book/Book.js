import React, { useEffect, useState } from "react";
import './Book.css';

const Book = () => {
   const [data, setData] = useState([]);
   
   useEffect ( () => {
fetch ('data.json')
.then(res=> res.json())
.then(data => setData(data))

   }, [])
    return (
<div className='book-container'>
 <div className="prouducts-container">
<h2>This is for book: {data.length}</h2>
 </div>
 <div className="cart-container">
<h3>this is for cart</h3>
 </div>
</div>
    );
};

export default Book;