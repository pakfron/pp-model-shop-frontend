import { useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useEffect } from "react";
import axios from "../../config/axios";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import Loading from "../../components/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ListCart() {
  const { itemCart, setItemCart, decreaseCartByProduct, getAllCart } =
    useCart();
  const [productId, setProductId] = useState();
  const [addCart, setAddCart] = useState();
  const { accountId } = useParams();
 
  useEffect(() => {
    if (addCart !== undefined) {
      axios
        .post("/cart/addcart", addCart)
        .then((res) => {
          
        
        
          toast(
            `${
              res.data?.product?.name || res.data.pushCart.product.name
            } Increase Quantity`,
            {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            }
          );
          toast.clearWaitingQueue();
        })
        .catch((error) => {
          console.log(error);
          if (!authUser) navigate("/login");
        })
        .finally(() => {
          getAllCart(accountId);
          setAddCart();
        });
    }
  }, [addCart]);

  useEffect(() => {
    if (productId) {
      axios
        .delete(`/cart/delcart/${productId}`)
        .then((res) => {
          setItemCart(res.data.checkCart);
        })
        .catch((error) => console.log(error))
        .finally(setProductId());
    } else {
      getAllCart(accountId);
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
            <img src={`${el?.product.imageproduct[0]?.imageUrl}`} />
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
          <div className=" w-[33.33%] h-[100%] flex flex-col items-center justify-center">
            {el?.product.price}
            <div className="w-[33.33%] h-[50%] flex items-center justify-center"></div>
          </div>
          <div className="w-[33.33%] h-[100%] flex flex-col items-center justify-center">
            <div className="flex justify-between px-8 w-full">
              <div
                onClick={async (event) => {
                  event.preventDefault();
                  const data = await decreaseCartByProduct(
                    el.id,
                    el.productId,
                    Number(el.product.price)
                  );
                  toast(`${el?.product.name} Decrease Quantity`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                  });
                  getAllCart(accountId);

                  // console.log('id cart',el.id,'id product',el.productId,"price",Number(el?.product.price))
                }}
                className=" text-white cursor-pointer flex justify-center bg-pp-login-button w-5"
              >
                -
              </div>{" "}
              {el?.quantity}{" "}
              <div
                onClick={async (event) => {
                  try {
                    event.preventDefault();
                    setAddCart({
                      productId: el.product.id,
                      quantity: 1,
                    });
                  } catch (error) {
                    console.log(error);
                  }
                }}
                className="  text-white cursor-pointer flex justify-center bg-pp-login-button w-5"
              >
                +
              </div>
            </div>
            <div className="w-[33.33%] h-[50%] flex items-center justify-center"></div>
          </div>
          <div className="w-[33.33%] h-[100%] flex flex-col items-center justify-center">
            {el?.totalPrice}
            <div className="w-[33.33%] h-[50%] flex items-center justify-center"></div>
            <ToastContainer limit={2} />
          </div>
        </div>
      </div>
    </div>
  ));
}
