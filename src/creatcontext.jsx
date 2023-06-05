import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeItem = (productId) => {
    setCartItems(cartItems.filter((item) => item.ima !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const count = cartItems.length;

  return (
    <CartContext.Provider
      value={{ cartItems, count, addToCart, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
