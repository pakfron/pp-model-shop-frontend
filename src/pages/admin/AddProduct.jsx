import { useNavigate } from "react-router-dom";
import { useProduct } from "../../context/ProductContext";
import MyAccountBody from "../../features/My Account/MyAccountBody";
import BodyPage from "../../features/body/BodyPage";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "../../components/Loading";

export default function AddProduct() {
  const navigate = useNavigate()
  const [loading,setLoading]=useState(false)
  const {
    summitAddProduct,
    addImageOnChange,
    addProduct,
    setAddProduct,
    file,
    setFile,
    addProductOnChange,
    editImage,
    setEditEmage
  } = useProduct();
  

  useEffect(()=>{

    setAddProduct({
      name: "",
      series: "",
      detail: "",
      price: "",
      Type: "Nendoroid",
    })
    setEditEmage()
  },[])

  const handleSubmitAddProduct = async (event)=>{
    try {
      event.preventDefault()
      setLoading(!loading)
      const data = await summitAddProduct(event, addProduct, file);
      console.log(data)
      setLoading(false)
      navigate('/admin/product')
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  if(loading){
    return <Loading/>
  }
  return (
    <BodyPage>
      <MyAccountBody title={"Add Product"}>
        <form
          onSubmit={ (event) => {
            handleSubmitAddProduct(event)
          }}
        >
          <div>
            <div>Name</div>
            <div>
              <input
                value={addProduct.name}
                onChange={(event) => {
                  addProductOnChange(event);
                 
                }}
                placeholder="Name"
                name="name"
                className="bg-[#F8F5F1]"
              />
            </div>
          </div>
          <div>
            <div>Series</div>
            <div>
              <input
                value={addProduct.series}
                onChange={(event) => {
                  addProductOnChange(event);
                }}
                placeholder="Series"
                name="series"
                className="bg-[#F8F5F1]"
              />
            </div>
          </div>
          <div>
            <div>Detail</div>
            <div>
              <textarea
                className="bg-[#F8F5F1]"
                rows={10}
                cols={50}
                name="detail"
                value={addProduct.detail}
                onChange={(event) => {
                  addProductOnChange(event);
                }}
              />
            </div>
          </div>
          <div>
              <div>Image</div>
              <div className="w-[500px]">{ !editImage ?<div className="h-[616px]"><img  className="h-[616px] w-[500px] object-cover " src="https://preyash2047.github.io/assets/img/no-preview-available.png?h=824917b166935ea4772542bec6e8f636" alt="preview image"/></div>: <img src={`${editImage}`} alt="" />}</div>
              <div>
                <input
                  type="file"
                  onChange={(event) => {
                    addImageOnChange(event);
                    setEditEmage(URL.createObjectURL(event.target.files[0]))
                  }}
                />
              </div>
            </div>
          <div className="flex">
            <div>Type:</div>
            <div>
              <select
                name="Type"
                value={addProduct.Type}
                onChange={(event) => {
                  addProductOnChange(event);
                }}
              >
                <option value="Nendoroid">Nendoroid</option>
                <option value="Figure">Figure</option>
                <option value="Figma">Figma</option>
              </select>
            </div>
          </div>
          <div
            className="flex
        "
          >
            <div>Price : </div>
            <div>
              <input
                value={addProduct.price}
                name="price"
                onChange={(event) => {
                  addProductOnChange(event);
                }}
                className="bg-[#F8F5F1]"
              />
            </div>
          </div>
          <div>
            
            <button type="button" onClick={(event)=>{
              event.preventDefault()
              history.back()
            }} className="bg-pp-login-button rounded-lg text-white h-[50px] w-[200px]">
              Back
            </button>
            <button type="submit" className="bg-pp-login-button rounded-lg text-white h-[50px] w-[200px]">
              Add Product
            </button>
          </div>
        </form>
      </MyAccountBody>
    </BodyPage>
  );
}
