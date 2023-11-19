import { Link } from "react-router-dom";
import { useProduct } from "../../context/ProductContext";
import { useAuth } from "../../context/AuthContext";
import axios from "../../config/axios";
import { useState } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
export default function AllListProduct() {
  const navigate=useNavigate()
  const { products } = useProduct();
  const {authUser}=useAuth()
  const [addCart, setAddCart] = useState();
  useEffect(() => {
    if (addCart !== undefined) {
      axios
        .post("/cart/addcart", addCart)
        .then((res) => {
          
          console.log(res.data.product);
          toast(`${res.data?.product?.name||res.data.pushCart.product.name} Add to Cart`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        })
        .catch((error) => {
          console.log(error);
          if(!authUser)
          navigate('/login')
        })
        .finally(() => {
          setAddCart();
        });
     
    }
  }, [addCart]);

const productOn = products?.filter((product)=>(product.status===true))

  return (
    
    productOn &&
    productOn.map((el) => {
      return (
        <div key={el.id}>
          <div className="bg-white rounded-md w-[300px] overflow-hidden ">
            <Link to={`/product/${el.Type}/${el.id}`}>
              <div className="pt-5 pb-5">
                <img
                  src={el.imageproduct.map((pk) => {
                    if (pk.id === el.id) {
                      return pk.imageUrl;
                    }
                  })}
                />
              </div>
              <div className="flex flex-col pl-5 pb-5 justify-center">
                <div className="font-bold">{el.Type}</div>
                <div className="min-h-[50px]">{el.name}</div>
              </div>
            </Link>
            <div className="flex justify-center h-[80px] ">
              <div className="bg-pp-bg-orage w-[50%] flex items-center justify-center">
                {el.price} บาท
              </div>
              <button
                className="bg-pp-login-button text-white w-[50%] "
                onClick={async (event) => {
                  try {
                    event.preventDefault();
                    setAddCart({
                      productId: el.id,
                      quantity: 1,
                    });
                  } catch (error) {
                    console.log(error);
                   
                  }
                }}
              >
                Add to Cart
              </button>
             <ToastContainer/>
            </div>
          </div>
        </div>
      );
    })
  );
}
