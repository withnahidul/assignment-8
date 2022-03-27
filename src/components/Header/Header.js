import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <h2>NiS Bag Store</h2>
      <div>
        <a href="/home">Home</a>
        <a href="/order">Order</a>
        <a href="/about">About</a>
      </div>
    </nav>
  );
};
export default Header;
