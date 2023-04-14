// ProductList.js

import React, { useState } from "react";
import Product from "./Product";

const ProductList = ({ addToCart }) => {
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const products = [
    { id: 1, name: "Product 1", price: 49 },
    { id: 2, name: "Product 2", price: 114 },
    { id: 3, name: "Product 3", price: 219 },
  ];
  // Function to handle radio button change
  const handlePriceRangeChange = (event) => {
    setSelectedPriceRange(event.target.value);
  };

  // Filter products by price range
  const filteredProducts = selectedPriceRange
    ? products.filter(
        (product) => product.price <= parseInt(selectedPriceRange)
      )
    : products;

  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            name="priceRange"
            value="50"
            checked={selectedPriceRange === "50"}
            onChange={handlePriceRangeChange}
          />
          $50 or less
        </label>
        <label>
          <input
            type="radio"
            name="priceRange"
            value="100"
            checked={selectedPriceRange === "100"}
            onChange={handlePriceRangeChange}
          />
          $100 or less
        </label>
        <label>
          <input
            type="radio"
            name="priceRange"
            value="200"
            checked={selectedPriceRange === "200"}
            onChange={handlePriceRangeChange}
          />
          $200 or less
        </label>
        <label>
          <input
            type="radio"
            name="priceRange"
            value=""
            checked={selectedPriceRange === null}
            onChange={handlePriceRangeChange}
          />
          Show all
        </label>
      </div>
      <ul>
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
