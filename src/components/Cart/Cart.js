import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  let selectedCart = '';
  let total = 0;

  for (const product of cart) {
    selectedCart = selectedCart + product.name;
    total = total + product.price * product.quantity;
  }
  return (
    <div className="cart">
      <h4>Selected Items</h4>
      <h3>{selectedCart + ' '}</h3>
      <p>Total price: ${total}</p>
      <div className="cart-btn">
        <button className="custom-btn">Choose 1 for me</button>
        <button className="custom-btn">Choose Again</button>
      </div>

    </div>
  );
};



export default Cart;