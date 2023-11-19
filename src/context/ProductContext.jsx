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

  const summitAddProduct = (event, input, file) => {
    event.preventDefault();
    const data = new FormData();
    data.append("image", file);
    data.append("name", input.name);
    data.append("series", input.series);
    data.append("detail", input.detail);
    data.append("price", input.price);
    data.append("Type", input.Type);
    axios
      .post("/product/create", data)
      .then((res) => {
        setAddProduct({
          name: "",
          series: "",
          detail: "",
          price: "",
          Type: "",
        });
        return res.data.message;
      })
      .catch((error) => {
        return error;
      });
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

  const editProduct = async (event, input, file) => {
    try {
      event.preventDefault();
      const data = new FormData();
      data.append("image", file);
      data.append("name", input.name);
      data.append("series", input.series);
      data.append("detail", input.detail);
      data.append("price", input.price);
      data.append("Type", input.Type);
      const edit = await axios.post("/updateproduct/:productId", data);

      setAddProduct({
        name: "",
        series: "",
        detail: "",
        price: "",
        Type: "",
      });
      console.log(res.data);
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
