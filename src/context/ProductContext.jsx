import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import axios from "../config/axios";
export const ProductContext = createContext();

export default function ProdctContextProvider({ children }) {
  const [products, setProduct] = useState();

  useEffect(() => {
    axios
      .get("/product")
      .then((res) => {
        console.log(res.data.products);

        setProduct(res.data.products);
      })
      .catch((error) => console.log(error));
  }, []);


  return (
    <ProductContext.Provider
      value={{ products, setProduct}}
    >
      {children}
    </ProductContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useProduct = () => {
  return useContext(ProductContext);
};
