import MyAccountBody from "../features/My Account/MyAccountBody";
import BodyPage from "../features/body/BodyPage";
import ListCart from "../features/Cart/ListCart";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function ShoppingCart() {
  const navigate = useNavigate()
  const { itemCart, netPrice, setNetPrice,checkCart } = useCart();
  const { accountId } = useParams();
  
  useEffect(() => {

    if (itemCart) {
      const sum = itemCart.reduce((acc, item) => {
        acc += +item.totalPrice;
        return acc;
      }, 0);
      setNetPrice(sum);
    }

  }, [itemCart]);


    return (
      <BodyPage>
        <MyAccountBody title={"Your Cart"}>
          <div className="pl-20 pr-20">
            <div className="flex font-bold justify-between pb-2 border-b-[1px]">
              <div className="pl-[50px]  flex justify-center items-center">
                Item
              </div>
              <div className="flex  justify-between w-[500px] items-center  ">
                <div className="w-[33.33%] flex justify-center">Item Price</div>
                <div className="w-[33.33%] flex justify-center">Quantity</div>
                <div className="w-[33.33%] flex justify-center">
                  Total Price
                </div>
              </div>
            </div>
            <ListCart />

            <div className="flex font-bold justify-between border-t-[1px] mt-5 pt-5">
              <div></div>
              <div className="flex  justify-between w-[500px] items-center">
                <div className="w-[33.33%] flex justify-center"></div>
                <div className="w-[33.33%] flex justify-center">
                  Total Price
                </div>
                <div className="w-[33.33%] flex justify-center">
                  {netPrice && netPrice}
                </div>
              </div>
            </div>
            <div className="w-full flex gap-10 justify-end pb-28 pt-10">
              <div>
                <Link to="/">
                  <button
                    onClick={() => {
                      window.scrollTo({
                        top: 0,
                        behavior: "auto",
                      });
                    }}
                    className="bg-pp-bg-gray  rounded-lg text-pp-text-font font-bold h-[70px] w-[180px]"
                  >
                    Continue Shopping
                  </button>
                </Link>
              </div>
              <div>
                
                  <button onClick={(event)=>{
                    event.preventDefault()
                    if(Number(itemCart)!==0){
                      navigate(`/shopping-cart/${accountId}/checkout-address`)
                    }else {
                      toast(`Cart is Empty`, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        });
                    
                    }

                  }} className="bg-pp-login-button rounded-lg text-white font-bold h-[70px] w-[180px]">
                    CHECKOUT
                  </button>
                
              </div>
            </div>
          </div>
          <ToastContainer/>
        </MyAccountBody>
      </BodyPage>
    );
}
