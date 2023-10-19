
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";


export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  
  const [itemCart, setItemCart] = useState();
  const [netPrice,setNetPrice] = useState();
  const [productId, setProductId] = useState();

  return (
    <CartContext.Provider value={{netPrice,setNetPrice, setItemCart, itemCart,productId,setProductId }}>
      {children}
    </CartContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  return useContext(CartContext);
};
