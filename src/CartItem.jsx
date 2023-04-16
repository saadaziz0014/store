import React from "react";
import itemImage from "./images/solar.jpg";
import "./App.css";
const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="card">
      <img src={itemImage} alt={item.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          ${parseInt(item.price)}
        </h6>
        <button
          className="btn btn-danger"
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
