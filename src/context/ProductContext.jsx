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
  const [editImage, setEditEmage] = useState();
  const [file, setFile] = useState(null);
  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    axios
      .get("/product")
      .then((res) => {
        setProduct(res.data.products);
      })
      .catch((error) => console.log(error));
  };

  const addProductOnChange = (event) => {
    setAddProduct({ ...addProduct, [event.target.name]: event.target.value });
  };
  const addImageOnChange = (event) => {
    const image = event.target.files[0];
    if (image) {
      setFile(image);
    }
  };

  const summitAddProduct = async (event, input, file) => {
    try {
      event.preventDefault();
    const data = new FormData();
    data.append("image", file);
    data.append("name", input.name);
    data.append("series", input.series);
    data.append("detail", input.detail);
    data.append("price", input.price);
    data.append("Type", input.Type);
    const res = await axios.post("/product/create", data)
      return res.data
      
    } catch (error) {
      console.log(error)
    }
    
  };
  const submitEditProduct = async (event, input, file) => {
    try {
      event.preventDefault();
    const data = new FormData();
    data.append("image", file);
    data.append("name", input.name);
    data.append("series", input.series);
    data.append("detail", input.detail);
    data.append("price", input.price);
    data.append("Type", input.Type);
    const res = await axios.post("/product/create", data)
    console.log(res.data)
    navigate('/admin/product')
    } catch (error) {
      console.log(error)
    }
    
     
  };

  const getEditProduct = async (productId) => {
    try {
      const getEditProduct = await axios.post("/product/getproductedit", {
        productId: +productId,
      });
      console.log(getEditProduct.data.productEdit);
      setAddProduct({
        ...addProduct,
        name: getEditProduct.data.productEdit[0].name,
        series: getEditProduct.data.productEdit[0].series,
        detail: getEditProduct.data.productEdit[0].detail,
        price: getEditProduct.data.productEdit[0].price,
        Type: getEditProduct.data.productEdit[0].Type,
      });
      setEditEmage(getEditProduct.data.productEdit[0].imageproduct[0].imageUrl);
    } catch (error) {
      console.log(error);
    }
  };

  const editProduct = async (event, input, file,id) => {
    try {
      event.preventDefault();
      const data = new FormData();
      data.append("image", file);
      data.append("name", input.name);
      data.append("series", input.series);
      data.append("detail", input.detail);
      data.append("price", input.price);
      data.append("Type", input.Type);
      data.append('id',id)
      const res = await axios.post("/product/updateproduct", data);

      // setAddProduct({
      //   name: "",
      //   series: "",
      //   detail: "",
      //   price: "",
      //   Type: "",
      // });
      return res.data
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = (event, productId) => {
    event.preventDefault();
    axios
      .post(`/product/delete/${productId}`)
      .then((res) => {
        console.log(res.data);
        getProduct();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const removeProduct = async(id)=>{
    try {
      const res = await axios.post('/product/removeproduct',{id:id})
      return res
    } catch (error) {
      
    }
  }

  return (
    <ProductContext.Provider
      value={{
        deleteProduct,
        summitAddProduct,
        addImageOnChange,
        setFile,
        file,
        setAddProduct,
        addProduct,
        products,
        setProduct,
        addProductOnChange,
        getProduct,
        editProduct,
        getEditProduct,
        setEditEmage,
        editImage,
        submitEditProduct,
        removeProduct
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useProduct = () => {
  return useContext(ProductContext);
};
