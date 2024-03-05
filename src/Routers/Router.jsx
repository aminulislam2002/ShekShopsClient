import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Pages/HomePage/Home/Home";
import Register from "../Pages/AuthenticationPage/RegisterPage/Register";
import CategoryLayout from "../Layouts/CategoryLayout/CategoryLayout";
import ProductDetailsCard from "../Pages/HomePage/HomePageCard/ProductDetailsCard/ProductDetailsCard";
import CheckoutCard from "../Pages/HomePage/HomePageCard/CheckoutCard/CheckoutCard";
import OrderProduct from "../Pages/DashboardPages/AdminDashboard/OrderProduct/OrderProduct";
import Categories from "../Pages/CategoryPages/Categories/Categories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/product-details/:id",
        element: <ProductDetailsCard></ProductDetailsCard>,
      },
      {
        path: "/product-checkout",
        element: <CheckoutCard></CheckoutCard>,
      },
      {
        path: "/order",
        element: <OrderProduct></OrderProduct>,
      },
    ],
  },
  {
    path: "/category",
    element: <CategoryLayout></CategoryLayout>,
    children: [
      {
        path: "",
        element: <Categories></Categories>
      },
    ],
  },
  {
    path: "Authentication/Register",
    element: <Register></Register>,
  },
]);

export default router;
