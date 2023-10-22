import { useEffect } from "react";
import BodyAccountNav from "../features/My Account/BodyAccountNav";
import MyAccountBody from "../features/My Account/MyAccountBody";
import BodyPage from "../features/body/BodyPage";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function CheckoutAddress() {
  const navigate = useNavigate();
  // const {itemCart}= useCart()
  const [itemCart, setItemCart] = useState();
  const { orderId, setOrderId } = useCart();
  const [addCart, setAddCart] = useState();
  const { accountId } = useParams();
  const [netPrice, setNetPrice] = useState();
  const [address, setAddress] = useState();

  useEffect(() => {
    axios
      .get("/auth/getaddress")
      .then((res) => {
        console.log(res.data.address);
        setAddress(res.data.address);
      })
      .catch((error) => console.log(error));
      axios
      .get(`/cart/getcart?accountId=${accountId}`)
      .then((res) => {
        console.log(res.data.checkCart);
        setItemCart(res.data.checkCart);
        
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  useEffect(() => {
    if (itemCart) {
      const sum = itemCart.reduce((acc, item) => {
        acc += +item.totalPrice;
        return acc;
      }, 0);
      setNetPrice(sum);
    }
  }, [itemCart]);
  console.log(itemCart);
  const payment = (event) => {
    event.preventDefault();
    axios
      .post("/payment/order")
      .then((res) => {
        setOrderId(res.data.orders.id);
      })
      .catch((error) => console.log(error));
    axios
      .delete("/cart/deleteallcart")
      .then((res) => {
        console.log(res);

        // navigate(`/payment/${accountId}/${orderId}`)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (orderId) {
      navigate(`/payment/${accountId}/${orderId}`);
      setOrderId();
    }
  }, [orderId]);

  return (
    <BodyPage>
      <MyAccountBody title={"Checkout"}>
        <div className="w-full flex pl-20 pb-20 pr-20 justify-between">
          <div className="h-full flex flex-col justify-center w-[50%]">
            <div className="pb-5 font-bold">Address</div>
            <div>
              {address && address.firstName} {address && address.lastName}
            </div>
            <div>{address && address.address}</div>
            <div>{address && address.phone}</div>
          </div>
          <div className="w-[50%]">
            <div className="pb-5 font-bold">Product</div>
            {itemCart &&
              itemCart.map((el) => (
                <div key={el.id} className="flex">
                  <div className="w-[50px]">
                    <img
                      key={el.id}
                      src={`${el?.product.imageproduct[0].imageUrl}`}
                    />
                  </div>
                  <div className="w-[450px] flex justify-between items-center ">
                    <div className="">{el?.product.name}</div>
                    <div>{Number(el?.totalPrice).toLocaleString("US")}</div>
                  </div>
                </div>
              ))}
            <div className="flex justify-end pr-[70px] font-bold mt-5  gap-5">
              <div>Total</div>
              <div>{netPrice && Number(netPrice).toLocaleString("us")}</div>
            </div>
            <div className="flex justify-end mt-10">
              <button
                className="bg-pp-login-button w-[200px] text-white font-bold rounded-lg h-[70px]"
                onClick={(event) => {
                  payment(event);
                }}
              >
                Payment
              </button>
            </div>
          </div>
        </div>
      </MyAccountBody>
    </BodyPage>
  );
}
