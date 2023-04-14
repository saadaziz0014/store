// App.js

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Navbar from "./Navbar";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add item to cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Function to remove item from cart
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
