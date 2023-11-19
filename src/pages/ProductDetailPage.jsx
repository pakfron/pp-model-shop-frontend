import { useParams } from "react-router-dom";
import { useProduct } from "../context/ProductContext";
import BodyPage from "../features/body/BodyPage";
import { useCart } from "../context/CartContext";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ProductDetailPage() {
  const navigate = useNavigate()
const {authUser} = useAuth()
const{products} =useProduct()
const {type,productId} = useParams()
const {onChangeQuantity,quantity,setQuantity,addToCartQuantity}= useCart()
useEffect(()=>{setQuantity(1)},[])


const product = products?.filter(item=>item.id== +productId)

  return ( product &&
    <BodyPage>
      <div className="bg-white w-full text-[#454545]  border border-none rounded-xl pb-16">
        <div className="pl-8 pr-8 font-bold text-[1.25rem] border-b-[1px]">
          <div className="h-[80px] flex items-center">
            {`${product[0].Type} ${product[0].name}`}
          </div>
        </div>
        <div className="flex items-center flex-col mt-5 mb-5">
          <div className="flex items-center">
            <img
              className="w-[90%]"
              src={`${product[0].imageproduct[0].imageUrl}`}
              alt=""
            ></img>
          </div>
        </div>
        <div className="flex justify-center pl-8 pr-8 pt-5 pb-5">
          <div className=" w-[800px] flex justify-center items-start gap-14">
            <div className=" font-bold w-[200px]">Product Detail</div>
            <div className="w-[600px]">
              <span>
                {product[0].detail}
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center pl-8 pr-8 pt-5 pb-5">
          <div className=" w-[800px] flex justify-center items-start gap-14">
            <div className=" font-bold w-[200px]">Series</div>
            <div className="w-[600px]">
              <span>{product[0].series}</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center pl-8 pr-8 pt-5 ">
          <div className=" w-[800px] flex justify-center items-start gap-14">
            <div className=" font-bold w-[200px]">Price</div>
            <div className="w-[600px]">
              <span>{product[0].price} บาท</span>
              
            </div>
          </div>
        </div>
        <div className="flex justify-center pl-8 pr-8 pt-5 ">
          <div className=" w-[800px] flex justify-center items-start gap-14">
            <div className=" font-bold w-[200px]">Quantity</div>
            <div className="w-[600px]">
             
              <div className="flex gap-8">
                
                <div>
                  <input
                    value={quantity}
                    type="number"
                    min={"1"}
                    onChange={(event)=>{
                      onChangeQuantity(event)
                    }}
                    name="quantity"
                    className="border rounded-md bg-[#F0EBE5] w-[100px] text-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center pl-8 pr-8 pt-5 ">
            <div className=" w-[800px] flex justify-center items-start gap-14">
              <div className=" font-bold w-[200px]"></div>
              <div className="w-[600px]">
                
                <div className="flex gap-8">
                  <div>
                    <button onClick={ async(event)=>{
                      try {
                        event.preventDefault()
                        const data = await addToCartQuantity(Number(productId),quantity)
                          
                         navigate(`/shopping-cart/${authUser.id}`)
                      } catch (error) {
                        console.log(error)
                      }
                    }} className="bg-pp-login-button h-[65px] w-[180px] text-white rounded-lg">Add to Cart</button>     
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BodyPage>
  );
}
