"use client";

import { useState, createContext } from "react";

type Props = {
  children: React.ReactNode;
};

const item1 = {
  name: "Grey t-shirt",
  price: 18.99,
  description: "Gilden ultra-cotton t-shirt, shipped from Sanmar",
};
const item2 = {
  name: "Red t-shirt",
  price: 18.99,
  description: "Gilden ultra-cotton t-shirt, shipped from Sanmar",
};

export const CartContext = createContext({ item1, item2 });

const CartProvider = ({ children }: Props) => {
  const [cartItems, setCartItems] = useState({ item1, item2 });

  return (
    <CartContext.Provider value={cartItems}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
