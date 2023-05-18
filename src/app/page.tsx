"use client";

import { useContext, useEffect } from "react";
// import CartProvider, { CartContext } from "./context/CartProvider";
import useWindowSize from "./hooks/useWindowSize";

const Page = () => {
  // const cart = useContext(CartContext);
  const { width, height } = useWindowSize();

  useEffect(() => {
    console.log("changing size");
  }, [width, height]);
  return (
    <div>
      <h2>Home</h2>

      <p>
        {width}, {height}
      </p>
    </div>
  );
};

export default Page;
