import React, { useState } from "react";
import Product from "./Product";
import "./App.css";

const ProductList = ({ addToCart }) => {
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const products = [
    { id: 1, name: "Product 1", category: "Panels", price: 49 },
    { id: 2, name: "Product 2", category: "Inverters", price: 114 },
    { id: 3, name: "Product 3", category: "Batteries", price: 219 },
  ];

  const handlePriceRangeChange = (event) => {
    setSelectedPriceRange(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    if (selectedPriceRange && product.price > parseInt(selectedPriceRange)) {
      return false;
    }
    if (selectedCategory && product.category !== selectedCategory) {
      return false;
    }
    return true;
  });

  return (
    <div className="container">
      <div className="my-5">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          className="form-control"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">All</option>
          <option value="Panels">Panels</option>
          <option value="Inverters">Inverters</option>
          <option value="Batteries">Batteries</option>
        </select>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div>
            <label className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="priceRange"
                value="50"
                checked={selectedPriceRange === "50"}
                onChange={handlePriceRangeChange}
              />
              <span className="form-check-label"> $50 or less</span>
            </label>
            <label className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="priceRange"
                value="100"
                checked={selectedPriceRange === "100"}
                onChange={handlePriceRangeChange}
              />
              <span className="form-check-label"> $100 or less</span>
            </label>
            <label className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="priceRange"
                value="200"
                checked={selectedPriceRange === "200"}
                onChange={handlePriceRangeChange}
              />
              <span className="form-check-label"> $200 or less</span>
            </label>
            <label className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="priceRange"
                value=""
                checked={!selectedPriceRange}
                onChange={handlePriceRangeChange}
              />
              <span className="form-check-label"> Show all</span>
            </label>
          </div>
        </div>
        <div className="col-md-9">
          <ul className="list-group">
            {filteredProducts.map((product) => (
              <li className="list-group-item" key={product.id}>
                <Product product={product} addToCart={addToCart} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ProductList;
