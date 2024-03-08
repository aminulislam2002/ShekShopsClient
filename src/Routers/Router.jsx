import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Pages/HomePage/Home/Home";
import Register from "../Pages/AuthenticationPage/RegisterPage/Register";
import CategoryLayout from "../Layouts/CategoryLayout/CategoryLayout";
import ProductDetailsCard from "../Pages/HomePage/HomePageCard/ProductDetailsCard/ProductDetailsCard";
import CheckoutCard from "../Pages/HomePage/HomePageCard/CheckoutCard/CheckoutCard";
import Categories from "../Pages/CategoryPages/Categories/Categories";
import DashboardLayout from "../Layouts/DashboardLayout/DashboardLayout";
import AdminDashboard from "../Pages/DashboardPages/AdminDashboard/AdminDashboard";
import AboutUs from "../Pages/AboutUs/AboutUs";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Shop from "../Pages/Shop/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <PageNotFound></PageNotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/product-details/:id",
        element: <ProductDetailsCard></ProductDetailsCard>,
      },
      {
        path: "/product-checkout",
        element: <CheckoutCard></CheckoutCard>,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    errorElement: <PageNotFound></PageNotFound>,
    children: [
      {
        path: "/dashboard/admin",
        element: <AdminDashboard></AdminDashboard>,
      },
    ],
  },

  {
    path: "/category",
    element: <CategoryLayout></CategoryLayout>,
    errorElement: <PageNotFound></PageNotFound>,
    children: [
      {
        path: "",
        element: <Categories></Categories>,
      },
    ],
  },

  {
    path: "Authentication/Register",
    element: <Register></Register>,
    errorElement: <PageNotFound></PageNotFound>,
  },
]);

export default router;
