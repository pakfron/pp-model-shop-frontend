import { useEffect } from "react";
import { useProduct } from "../../context/ProductContext";
import MyAccountBody from "../../features/My Account/MyAccountBody";
import BodyPage from "../../features/body/BodyPage";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function ProductAdminPage() {
  const { products } = useProduct();
  const {deleteProduct,getProduct} = useProduct()
  const navigate=useNavigate()
 useEffect(()=>{
  getProduct()

 },[])
 console.log(products)
  return (
    
      <BodyPage>
        <MyAccountBody title={"Product"}>
          <div className="w-full px-5 ">
          <Link to='/admin/product/add'>
            <button className="bg-pp-login-button w-full text-white">Add Product</button>
          </Link>
            <div className="flex justify-between">
              <div className="font-bold">product</div>
              <div className=" flex justify-between items-center w-[400px] font-bold">
                {/* <div className="w-[300px] flex justify-between"> */}

                <div className="w-[100px]  flex justify-center">Type</div>
                <div className="w-[80px]  flex justify-center"> Price</div>

                {/* </div> */}
                <div className="w-[150px]"></div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              {products &&
                products.map((el) => (
                  
                    <div key={el.id} className="flex w-[100%] justify-between">
                      <div className="flex juse items-center">
                        <div className="w-[50px]">
                          <img src={`${el?.imageproduct[0].imageUrl}`} />
                        </div>
                        <div className="">{el?.name}</div>
                      </div>
                      <div className=" flex justify-between items-center w-[400px]">
                        <div className="w-[100px] flex justify-center">
                          {el.Type}
                        </div>
                        <div>
                          <div className="w-[80px] flex justify-center">
                            {Number(el?.price).toLocaleString("US")}
                          </div>
                        </div>
                        <div className="flex w-[150px] justify-between cursor-pointer">
                          <div className="w-[50px] flex justify-center" onClick={(event)=>{
                            
                            navigate(`/admin/product/${el.id}/edit`)
                          }}>
                            Edit
                          </div>
                          <div onClick={(event)=>{
                            deleteProduct(event,el.id)
                          }} className={`${el.status===false?'text-red-600 hover:text-green-500': 'text-green-500 hover:text-red-600'}  hover:cursor-pointer w-[80px] flex justify-center`}>
                            {el?.status===false?"Off":"On"}
                          </div>
                        </div>
                      </div>
                    </div>
                
                ))}
            </div>
          </div>
          
        </MyAccountBody>
      </BodyPage>
    
  );
}
