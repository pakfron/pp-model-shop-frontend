import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import axios from "../config/axios";
export const ProductContext = createContext();

export default function ProdctContextProvider({ children }) {
  const [products, setProduct] = useState();
  const [addProduct, setAddProduct] = useState({
    name: "",
    series: "",
    detail: "",
    price: "",
    Type: "",
  });
  const [file,setFile]=useState(null)
  useEffect(() => {
    getProduct()
  }, []);

  const getProduct =()=>{

    axios
    .get("/product")
    .then((res) => {
      setProduct(res.data.products);
    })
    .catch((error) => console.log(error));
  }


  const addProductOnChange = (event) => {
    setAddProduct({...addProduct,[event.target.name]:event.target.value})

  };
  const addImageOnChange = (event)=>{
    const image = event.target.files[0];
    if (image) {
      setFile(image);
    }
  }

  const summitAddProduct = (event,input,file)=>{
    event.preventDefault()
    const data = new FormData()
    data.append('image',file)
    data.append('name',input.name)
    data.append('series',input.series)
    data.append('detail',input.detail)
    data.append('price',input.price)
    data.append('Type',input.Type)
    axios.post('/product/create',data).then((res)=>{
      console.log(res.data.message)
    }).then((error)=>{console.log(error)})
    
  }

const deleteProduct = (event,productId)=>{
event.preventDefault()
 axios.delete(`/product/delete/${productId}`).then((res)=>{
  console.log(res.data)
  getProduct()
 }).catch((error)=>{console.log(error)})
}

  return (
    <ProductContext.Provider
      value={{ deleteProduct,summitAddProduct,addImageOnChange,setFile,file,setAddProduct, addProduct, products, setProduct,addProductOnChange }}
    >
      {children}
    </ProductContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useProduct = () => {
  return useContext(ProductContext);
};
