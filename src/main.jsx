// import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthContextProvider from "./context/AuthContext.jsx";
import ProdctContextProvider from "./context/ProductContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
<ProdctContextProvider>

  <AuthContextProvider>
    <App />
  </AuthContextProvider>
</ProdctContextProvider>
);
