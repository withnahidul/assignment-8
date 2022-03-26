import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  let total = 0;

  for (const product of cart) {
    total = total + product.price;
  }
  return (
    <div className="cart">
      <h3>this is for cart</h3>
      <p>Selected item: {cart.length} </p>
      <p>Total price:${total}</p>
    </div>
  );
};
export default Cart;
