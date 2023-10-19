import { useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useEffect } from "react";
import axios from "../../config/axios";
import { useState } from "react";

export default function ListCart() {
  const {itemCart, setItemCart }=  useCart();
  const [productId, setProductId] = useState();
  const [addCart, setAddCart] = useState();
  const { accountId } = useParams();
  useEffect(() => {
    if (productId) {
      console.log(productId);
      axios
        .delete(`/cart/delcart/${productId}`)
        .then((res) => {
          
          setItemCart(res.data.checkCart);
          setProductId();
        })
        .catch((error) => console.log(error));
    } else {
      axios
        .get(`/cart/getcart?accountId=${accountId}`)
        .then((res) => {
          setItemCart(res.data.checkCart);
         
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [productId, setProductId]);
  
  useEffect(() => {
    if (productId) {
  
      axios
        .delete(`/cart/delcart/${productId}`)
        .then((res) => {
         
          setItemCart(res.data.checkCart)
        })
        .catch((error) => console.log(error)).finally(setProductId());
    } else {
      axios
        .get(`/cart/getcart?accountId=${accountId}`)
        .then((res) => {
          setItemCart(res.data.checkCart);
          
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [productId, setProductId]);
  return itemCart?.map((el) => (
    <div
      key={el.id}
      className="flex font-bold justify-between items-center pt-10"
    >
      <div>
        <div className="flex gap-5 items-center">
          <div className="w-[150px]">
            <img src={`${el?.product.imageproduct[0].imageUrl}`} />
          </div>
          <div className="h-[184.93px] flex flex-col justify-between">
            <div className="h-[50%] flex items-center">{el?.product.name}</div>
            <div className="h-[50%] flex items-center">
              <button
                 onClick={(event) => {
                  event.preventDefault();
                  setProductId(el.product.id);
                }}
                className="hover:text-red-600 border-b-2 "
                
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex justify-around w-[500px] items-center h-[184.93px]">
          <div className="w-[33.33%] h-[100%] flex flex-col items-center justify-center">
            {el?.product.price}
            <div className="w-[33.33%] h-[50%] flex items-center justify-center"></div>
          </div>
          <div className="w-[33.33%] h-[100%] flex flex-col items-center justify-center">
            {el?.quantity}
            <div className="w-[33.33%] h-[50%] flex items-center justify-center"></div>
          </div>
          <div className="w-[33.33%] h-[100%] flex flex-col items-center justify-center">
            {el?.totalPrice}
            <div className="w-[33.33%] h-[50%] flex items-center justify-center"></div>
          </div>
        </div>
      </div>
    </div>
  ));
}
