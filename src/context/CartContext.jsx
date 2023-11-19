import { useState } from "react";
// import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import axios from '../config/axios'

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [itemCart, setItemCart] = useState();
  const [netPrice, setNetPrice] = useState();
  const [orderId,setOrderId] = useState();
  const [quantity,setQuantity]=useState(1)

  const onChangeQuantity = (event)=>{
    if(Number(event.target.value)===0){
      return setQuantity(1)
     
    }
    setQuantity(Number(event.target.value))
  }

const addToCartQuantity = async (productId,quantity)=>{
 const res = await axios.post('cart/addcart',{productId,quantity})
  return res.data
}

const getAllCart = async (accountId)=>{
  try {
    const res = await axios.get(`/cart/getcart?accountId=${accountId}`)
    setItemCart(res.data.checkCart);
  } catch (error) {
    throw error
  }
}



const decreaseCartByProduct = async(cartId,productId,price)=>{
  try {
    const id = cartId
    const res = await axios.post('cart/delete-amount-product',{id,productId,price})
    return res.data
  } catch (error) {
    throw error
  }
}

  return (
    <CartContext.Provider
      value={{
        netPrice,
        setNetPrice,
        setItemCart,
        itemCart,
        orderId,
        setOrderId,
        quantity,
        setQuantity,
        onChangeQuantity,
        addToCartQuantity,
        decreaseCartByProduct,
        getAllCart
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
