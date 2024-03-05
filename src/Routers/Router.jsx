import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Pages/HomePage/Home/Home";
import Register from "../Pages/AuthenticationPage/RegisterPage/Register";
import CategoryLayout from "../Layouts/CategoryLayout/CategoryLayout";
import Women from "../Pages/CategoryPages/Categories/Women/Women";
import Mens from "../Pages/CategoryPages/Categories/Mens/Mens";
import Kids from "../Pages/CategoryPages/Categories/Kids/Kids";
import Sports from "../Pages/CategoryPages/Categories/Sports/Sports";
import Beauty from "../Pages/CategoryPages/Categories/Beauty/Beauty";
import Jewelry from "../Pages/CategoryPages/Categories/Jewelry/Jewelry";
import Electronics from "../Pages/CategoryPages/Categories/Electronics/Electronics";
import ProductDetailsCard from "../Pages/HomePage/HomePageCard/ProductDetailsCard/ProductDetailsCard";
import CheckoutCard from "../Pages/HomePage/HomePageCard/CheckoutCard/CheckoutCard";
import OrderProduct from "../Pages/DashboardPages/AdminDashboard/OrderProduct/OrderProduct";

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
        path: "Women",
        element: <Women></Women>,
      },
      {
        path: "mens",
        element: <Mens></Mens>,
      },
      {
        path: "kids",
        element: <Kids></Kids>,
      },
      {
        path: "sports",
        element: <Sports></Sports>,
      },
      {
        path: "beauty",
        element: <Beauty></Beauty>,
      },
      {
        path: "jewelry",
        element: <Jewelry></Jewelry>,
      },
      {
        path: "electronics",
        element: <Electronics></Electronics>,
      },
    ],
  },
  {
    path: "Authentication/Register",
    element: <Register></Register>,
  },
]);

export default router;
