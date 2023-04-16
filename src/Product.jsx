import React from "react";
import Pannel from "./images/solar.jpg";
import "./App.css";
const Product = ({ product, addToCart }) => {
  return (
    <div className="card">
      <img src={Pannel} alt="{product.name}" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          ${parseFloat(product.price)}
        </h6>
        <p className="card-text">{product.description}</p>
        <button className="btn btn-primary" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
