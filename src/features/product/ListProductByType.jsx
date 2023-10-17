import { Link } from "react-router-dom";
import { useProduct } from "../../context/ProductContext";



export default function ListProductByType({Type}) {
    const {products}=useProduct()

const productByType = products?.filter((item)=>item.Type===Type)
    return (
        productByType &&
        productByType.map((el) => {
        return (
          <div key={el.id}>
            <Link to={`/product/${el.Type}/${el.id}`}>
              <div className="bg-white rounded-md w-[300px] overflow-hidden">
                <div className="pt-5 pb-5">
                  <img src={el.imageproduct.map((pk=>{
                      if(pk.id===el.id){
                          return pk.imageUrl
                      }
                  }))}/>
                </div>
                <div className="flex flex-col pl-5 justify-center">
                  <div className="font-bold">{el.Type}</div>
                  <div className="min-h-[50px]">{el.name}</div>
                </div>
                <div className="flex justify-center h-[80px] pt-5 ">
                  <button className="bg-orange-500 w-[50%]">Price</button>
                  <button className="bg-gray-600 w-[50%] ">Add to Cart</button>
                </div>
              </div>
            </Link>
          </div>
        );
      })
    );
}
