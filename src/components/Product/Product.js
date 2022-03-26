import React from "react";
import './Product.css'

const Product = (props) => {
    const{product,handleAddtoCart} =props;
    const {id,name, img, price} = product;
//const {handleAddtoCart} = props;
    return (
        <div className='product'>
         <img src={img} alt=""></img>
         <div className='product-info'>
         <p>Id:{id}</p>
         <p className='product-name'>Name:{name}</p>
         <p>Price:${price}</p>
         </div>
         <button onClick={() =>handleAddtoCart(product)} className='btn-cart'>
             <p>Add to Cart</p>
         </button>
        </div>
    );
};

export default Product;