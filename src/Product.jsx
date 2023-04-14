// Product.js

import React from "react";

const Product = ({ product, addToCart }) => {
  return (
    <li>
      <span>{product.name}</span>
      <span>${parseFloat(product.price)}</span>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </li>
  );
};

export default Product;
