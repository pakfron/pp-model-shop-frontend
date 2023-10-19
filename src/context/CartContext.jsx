import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import axios from "../config/axios";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [itemCart, setItemCart] = useState();
  const [netPrice, setNetPrice] = useState();

  



  return (
    <CartContext.Provider
      value={{
        netPrice,
        setNetPrice,
        setItemCart,
        itemCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  return useContext(CartContext);
};
