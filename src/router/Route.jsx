import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import Authenticated from "../features/auth/Authenticated";
import Figure from "../pages/category/Figure";
import Figma from "../pages/category/Figma";
import Nendoroid from "../pages/category/Nendoroid";

import UnAuthenticated from "../features/auth/UnAuthenticated";
import RegisterPage from "../pages/RegisterPage";
import MyAccountPage from "../pages/MyAccountPage";
import Loading from "../components/Loading";
import ProfilePage from "../pages/myaccount/ProfilePage";
import ProductDetailPage from "../pages/ProductDetailPage";
import ShoppingCart from "../pages/ShoppingCart";
import AddressPage from "../pages/myaccount/AddressPage";
import CheckoutAddress from "../pages/CheckoutAddress";
import PaymentPage from "../pages/PaymentPage";
import OrderHistoryPage from "../pages/OrderHistoryPage";
import AdminPage from "../pages/admin/AdminPage";
import OrderHistoryAdminPage from "../pages/admin/OrderHistoryAdminPage";
import ProductAdminPage from "../pages/admin/ProductAdminPage";
import AddProduct from "../pages/admin/AddProduct";


const router = createBrowserRouter([
  { path: "/loading", element: <Loading /> },
  {
    path: "/",
    element: <Layout />,

    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/login",
        element: (
          <Authenticated>
            <LoginPage />
          </Authenticated>
        ),
      },
      { path: "/figure", element: <Figure /> },
      { path: "/figma", element: <Figma /> },
      {
        path: "/nendoroid",
        element: <Nendoroid />,
      },
      {
        path: "/register",
        element: (
          <Authenticated>
            <RegisterPage />
          </Authenticated>
        ),
      },
      {
        path: "/my-account/:accountId",
        element: <MyAccountPage />,
      },
      {
        path: "/my-account/:accountId/profile",
        element: <ProfilePage />,
      },
      { path: "/my-account/:accountId/address", element: <AddressPage /> },
      {
        path: "/product/:type/:productId",
        element: <ProductDetailPage />,
      },
      {
        path: "/shopping-cart/:accountId",
        element: (
          <UnAuthenticated>
            <ShoppingCart />
          </UnAuthenticated>
        ),
      },
      {
        path: "/shopping-cart/:accountId/checkout-address",
        element: <CheckoutAddress />,
      },
      {
        path: "/payment/:accountId/:orderId",
        element: <PaymentPage />,
      },
      {
        path:'/orderhistory/:accountId',element:<OrderHistoryPage/>
      }
      ,{
        path:'/admin',element:<AdminPage/>
      },
      {
        path:'/admin/orderhistory',element:<OrderHistoryAdminPage/>
      },
      {path:'/admin/product',element:<ProductAdminPage/>},
      {path:'/admin/product/add',element:<AddProduct/>}
    ],
  },
  
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
