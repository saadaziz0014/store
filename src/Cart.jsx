import React from "react";
import CartItem from "./CartItem";
import "./App.css";

const Cart = ({ cartItems, removeFromCart, makePayment }) => {
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
        <div className="cartItems">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>
      )}
      {cartItems.length != 0 ? (
        <div>
          <h3 className="heading-4">Total Price: ${totalPrice}</h3>
          <button onClick={makePayment} className="btn btn-success">
            Make Payment
          </button>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Cart;
