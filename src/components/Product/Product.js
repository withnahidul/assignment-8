import React from "react";
import './Product.css'

const Product = (props) => {
    const {id,name, img, price} = props.product;
//const {handleAddtoCart} = props;
    return (
        <div className='product'>
         <img src={img} alt=""></img>
         <div className='product-info'>
         <p>Id:{id}</p>
         <p className='product-name'>{name}</p>
         <p>Price:${price}</p>
         </div>
         <button onClick={() =>props.handleAddtoCart(props.product)} className='btn-cart'>
             <p>Add to Cart</p>
         </button>
        </div>
    );
};

export default Product;