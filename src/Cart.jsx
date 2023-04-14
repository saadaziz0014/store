// Cart.js

import React from "react";
import CartItem from "./CartItem";

const Cart = ({ cartItems, removeFromCart, makePayment }) => {
  // Calculate total price
  //   const totalPrice = cartItems.reduce((total, item) => {
  //     const itemPrice = Number(item.price);
  //     if (!isNaN(itemPrice)) {
  //       return total + itemPrice * item.quantity;
  //     }
  //     return total;
  //   }, 0);
  let totalPrice = 0;
  console.log(
    cartItems.map((o) => {
      totalPrice = totalPrice + parseInt(o.price);
    })
  );
  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
            />
          ))}
          <div>
            <h3>Total Price: ${totalPrice}</h3>
            <button onClick={makePayment}>Make Payment</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
