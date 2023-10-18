import { Link } from "react-router-dom";
import { useProduct } from "../../context/ProductContext";
import { useAuth } from "../../context/AuthContext";
import axios from "../../config/axios";
import { useState } from "react";
import { useEffect } from "react";
export default function AllListProduct() {
  const { setLoading, authUser } = useAuth();
  const { products } = useProduct();
  const [addCart, setAddCart] = useState();
  useEffect(() => {
    if (addCart !== undefined) {
      axios
        .post("/cart/addcart", addCart)
        .then((res) => {
          
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setAddCart();
        });
     
    }
  }, [addCart, setAddCart]);

  return (
    products &&
    products.map((el) => {
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
            </div>
          </div>
        </div>
      );
    })
  );
}
