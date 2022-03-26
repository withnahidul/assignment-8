import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  let selectCart='';

  for (const product of cart) {
    total = total + product.price;
    selectCart = selectCart +product.name;
  }
  return (
    <div className="cart">
      <h3>this is for cart</h3>
      <p>select:{cart.length} </p>
      <p>{selectCart} </p>
      <p>Total price:${total}</p>
      <div>
        <button>Coose One</button>
        <button>Reset</button>
      </div>

    </div>

  );
};
export default Cart;
