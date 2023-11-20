import axios from "../config/axios";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

export const OrderContext = createContext();

export default function OrderContextProvider({ children }) {
  const [order, setOrder] = useState();
  const [orderAdmin, setOrderAdmin] = useState();
  const [addProduct, setAddProduct] = useState();
  const [isOrderId, setIsOrderId] = useState();
  const getOrder = () => {
    axios
      .get("/payment/orderhistory")
      .then((res) => {
        setOrder(res.data.order);
      })
      .then((error) => {});
  };

  const getOrderAdmin = () => {
    axios
      .get("/payment/orderhistory/admin")
      .then((res) => {
        setOrderAdmin(res.data.order);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getOrderById = async(id)=>{
    try {
      const res = await axios.post('/payment/orderhistory-id',{id})
      
      return res.data
      
    } catch (error) {
      console.log(error)
    }
  }
  const getOrderByIdAdmin = async(id)=>{
    try {
      const res = await axios.post('/payment/orderhistory-id-admin',{id})
      
      return res.data
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <OrderContext.Provider
      value={{
        setOrderAdmin,
        orderAdmin,
        getOrderAdmin,
        order,
        setOrder,
        getOrder,
        isOrderId,
        setIsOrderId,
        getOrderById,
        getOrderByIdAdmin
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useOrder = () => {
  return useContext(OrderContext);
};
