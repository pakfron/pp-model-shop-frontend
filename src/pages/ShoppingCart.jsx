import MyAccountBody from "../features/My Account/MyAccountBody";
import BodyPage from "../features/body/BodyPage";
import ListCart from "../features/Cart/ListCart";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ShoppingCart() {
  const {itemCart}= useCart();
  console.log(itemCart)
  if(itemCart !== undefined){
    const sum = itemCart.reduce((acc,item)=>{
      acc+= +item.totalPrice 
      return acc
    },0)
    
  }
  return (
    <BodyPage>
      <MyAccountBody title={"Your Cart"}>
        <div className="pl-20 pr-20">
          <div className="flex font-bold justify-between  ">
            <div>Item</div>
            <div className="flex  justify-between w-[500px] items-center  ">
              <div className="w-[33.33%] flex justify-center">Item Price</div>
              <div className="w-[33.33%] flex justify-center">Quantity</div>
              <div className="w-[33.33%] flex justify-center">Total Price</div>
            </div>
          </div>
          <ListCart />

          <div>all Total</div>
          <div>999999</div>
          <div className="w-full flex gap-10 justify-end pb-28">
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
              <button className="bg-pp-login-button rounded-lg text-white font-bold h-[70px] w-[180px]">
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </MyAccountBody>
    </BodyPage>
  );
}
