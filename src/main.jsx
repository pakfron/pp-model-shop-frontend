// import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthContextProvider from "./context/AuthContext.jsx";
import ProdctContextProvider from "./context/ProductContext.jsx";
import CartContextProvider from "./context/CartContext.jsx";
import OrderContextProvider from "./context/OrderContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <ProdctContextProvider>
      <CartContextProvider>
        <OrderContextProvider>
          <App />
        </OrderContextProvider>
      </CartContextProvider>
    </ProdctContextProvider>
  </AuthContextProvider>
);
