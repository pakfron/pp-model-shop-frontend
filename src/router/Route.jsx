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
import AuthenticatedAdmin from "../features/auth/AuthenticatedAdmin";
import AuthenticatedUser from "../features/auth/AuthenticatedUser";
import EditProductPage from "../pages/admin/EditProductPage";
import OrderHistoryDetailPage from "../pages/myaccount/OrderHistoryDetailPage";
import AuthenticatedIsAdmin from "../features/auth/AuthenticatedIsAdmin";
import OrderHistoryDetailAdminPage from "../pages/admin/OrderHistoryDetailAdminPage";

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
      {
        path: "/figure",
        element: (
          <AuthenticatedIsAdmin>
            <Figure />
          </AuthenticatedIsAdmin>
        ),
      },
      {
        path: "/figma",
        element: (
          <AuthenticatedIsAdmin>
            <Figma />
          </AuthenticatedIsAdmin>
        ),
      },
      {
        path: "/nendoroid",
        element: (
          <AuthenticatedIsAdmin>
            <Nendoroid />
          </AuthenticatedIsAdmin>
        ),
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
        element: (
          <AuthenticatedUser>
            <MyAccountPage />
          </AuthenticatedUser>
        ),
      },
      {
        path: "/my-account/:accountId/profile",
        element: (
          <AuthenticatedUser>
            <ProfilePage />
          </AuthenticatedUser>
        ),
      },
      {
        path: "/my-account/:accountId/address",
        element: (
          <AuthenticatedUser>
            <AddressPage />
          </AuthenticatedUser>
        ),
      },
      {
        path: "/product/:type/:productId",
        element: (
          <AuthenticatedIsAdmin>
            <ProductDetailPage />
          </AuthenticatedIsAdmin>
        ),
      },
      {
        path: "/shopping-cart/:accountId",
        element: (
          <UnAuthenticated>
            <AuthenticatedUser>
              <ShoppingCart />
            </AuthenticatedUser>
          </UnAuthenticated>
        ),
      },
      {
        path: "/shopping-cart/:accountId/checkout-address",
        element: (
          <AuthenticatedUser>
            <CheckoutAddress />
          </AuthenticatedUser>
        ),
      },
      {
        path: "/payment/:accountId/:orderId",
        element: (
          <AuthenticatedUser>
            <PaymentPage />
          </AuthenticatedUser>
        ),
      },
      {
        path: "/orderhistory/:accountId",
        element: (
          <AuthenticatedUser>
            <OrderHistoryPage />
          </AuthenticatedUser>
        ),
      },
      {
        path: "/orderhistory/detail/:orderId",
        element: (
          <AuthenticatedUser>
            <OrderHistoryDetailPage />
          </AuthenticatedUser>
        ),
      },
      {
        path: "/admin",
        element: (
          <AuthenticatedAdmin>
            <AdminPage />
          </AuthenticatedAdmin>
        ),
      },
      {
        path: "/admin/orderhistory",
        element: (
          <AuthenticatedAdmin>
            <OrderHistoryAdminPage />
          </AuthenticatedAdmin>
        ),
      },
      {
        path: "/admin/product",
        element: (
          <AuthenticatedAdmin>
            <ProductAdminPage />
          </AuthenticatedAdmin>
        ),
      },
      {
        path: "/admin/product/add",
        element: (
          <AuthenticatedAdmin>
            <AddProduct />
          </AuthenticatedAdmin>
        ),
      },
      {
        path: "/admin/product/:productId/edit",
        element: (
          <AuthenticatedAdmin>
            <EditProductPage />
          </AuthenticatedAdmin>
        ),
      },{
        path:"/admin/product/detail/:orderId",
        element:(<AuthenticatedAdmin>
          <OrderHistoryDetailAdminPage/>
        </AuthenticatedAdmin>)
      }
      
    ],
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
