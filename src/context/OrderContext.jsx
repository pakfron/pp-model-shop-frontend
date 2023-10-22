import axios from "../config/axios";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

export const OrderContext = createContext();

export default function OrderContextProvider({ children }) {
  const [order, setOrder] = useState();

  const getOrder = () => {
    axios
      .get("/payment/orderhistory")
      .then((res) => {
        setOrder(res.data.order);
      })
      .then((error) => {});
  };

  return (
    <OrderContext.Provider value={{ order, setOrder,getOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useOrder = () => {
  return useContext(OrderContext);
};
