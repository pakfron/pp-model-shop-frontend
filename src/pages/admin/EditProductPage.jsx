import { useNavigate } from "react-router-dom";
import { useProduct } from "../../context/ProductContext";
import MyAccountBody from "../../features/My Account/MyAccountBody";
import BodyPage from "../../features/body/BodyPage";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from '../../config/axios'
import { useState } from "react";
import Loading from "../../components/Loading";

export default function EditProductPage() {

    const navigate = useNavigate()
    const [loading,setLoading]=useState(false)
    const {

      submitEditProduct,
        getEditProduct,
      editProduct,
      addImageOnChange,
      addProduct,
      setAddProduct,
      file,
      setFile,
      addProductOnChange,
      editImage,
      setEditEmage
    } = useProduct();
    const {productId}= useParams()
    // console.log(+productId)


    useEffect(  ()=>  {
        getEditProduct(productId)
    },[])

    // const handlesubmitEdit
    const handleSubmitEdit = async (event)=>{
      event.preventDefault()
      setLoading(!loading)
    const res = await editProduct(event, addProduct, file,Number(productId));
    console.log(res)
    setLoading(false)
    setAddProduct({
      name: "",
      series: "",
      detail: "",
      price: "",
      Type: "",
    })
    navigate('/admin/product')
    }
    if(loading){
      return <Loading/>
    }

    return (
      <BodyPage>
        <MyAccountBody title={"Edit Product"}>
          <form
            onSubmit={ async (event) => {
              handleSubmitEdit(event)
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
              <div className="w-[500px]">{ editImage && <img src={`${editImage}`} alt="" />}</div>
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
                setAddProduct({
                    name: "",
                    series: "",
                    detail: "",
                    price: "",
                    Type: "",
                  })
              }} className="bg-pp-login-button rounded-lg text-white h-[50px] w-[200px]">
                Back
              </button>
              <button type="submit" className="bg-pp-login-button rounded-lg text-white h-[50px] w-[200px]">
                Edit Product
              </button>
            </div>
          </form>
        </MyAccountBody>
      </BodyPage>
    );
}
