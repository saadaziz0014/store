// CartItem.js

import React from "react";

const CartItem = ({ item, removeFromCart }) => {
  return (
    <li>
      <span>{item.name}</span>
      <span>${parseInt(item.price)}</span>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </li>
  );
};

export default CartItem;
