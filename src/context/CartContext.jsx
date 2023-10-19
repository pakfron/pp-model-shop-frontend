import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useAuth } from "./AuthContext";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  
  const [itemCart, setItemCart] = useState();
  const [] = useState();
  useEffect(() => {}, []);

  return (
    <CartContext.Provider value={{ setItemCart, itemCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  return useContext(CartContext);
};
