import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import Authenticated from "../features/auth/Authenticated";
import Nendoroid from "../pages/category/Nendoroid";
import ShoppingCartPage from "../pages/ShoppingCartPage";
import UnAuthenticated from "../features/auth/UnAuthenticated";
import RegisterPage from "../pages/RegisterPage";
import MyAccountPage from "../pages/MyAccountPage";

const router = createBrowserRouter([
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
        path: "/nendoroid",
        element: <Nendoroid />,
      },
      {
        path: "/shoppingcart",
        element: (
          <UnAuthenticated>
            <ShoppingCartPage />
          </UnAuthenticated>
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
        path: "/my-account",
        element: <MyAccountPage />,
      },
    ],
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
