import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  let selectCart = "";

  for (const product of cart) {
    total = total + product.price;
    selectCart = selectCart + product.name;
  }
  return (
    <div className="cart">
      <h3>This is for cart</h3>
      <p>select:{cart.length} </p>
      <h3>{selectCart} </h3>
      <p>Total price:${total}</p>
      <div className="btn-custom">
        <button className="btn-btn">Chose One</button>
        <button className="btn-btn">Reset</button>
      </div>
    </div>
  );
};
export default Cart;
