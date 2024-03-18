import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Pages/HomePage/Home/Home";
import Register from "../Pages/AuthenticationPage/RegisterPage/Register";
import CategoryLayout from "../Layouts/CategoryLayout/CategoryLayout";
import ProductDetailsCard from "../Pages/HomePage/HomePageCard/ProductDetailsCard/ProductDetailsCard";
import CheckoutCard from "../Pages/HomePage/HomePageCard/CheckoutCard/CheckoutCard";
import Categories from "../Pages/CategoryPages/Categories/Categories";
import DashboardLayout from "../Layouts/DashboardLayout/DashboardLayout";
import AboutUs from "../Pages/AboutUs/AboutUs";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Shop from "../Pages/Shop/Shop";
import AddProduct from "../Pages/DashboardPages/AdminDashboardPages/AddProduct/AddProduct";
import Login from "../Pages/AuthenticationPage/LoginPage/Login";
import AuthenticationLayout from "../Layouts/AuthenticationLayout/AuthenticationLayout";
import UpdateProduct from "../Pages/DashboardPages/AdminDashboardPages/UpdateProduct/UpdateProduct";
import WelcomeDashboard from "../Pages/DashboardPages/WelcomeDashboard/WelcomeDashboard";
import MyOrder from "../Pages/DashboardPages/CustomerDashboardPages/MyOrder/MyOrder";
import MyCancelOrders from "../Pages/DashboardPages/CustomerDashboardPages/MyCancellations/MyCancellations";
import MyShopping from "../Pages/DashboardPages/CustomerDashboardPages/MyShopping/MyShopping";
import PendingOrders from "../Pages/DashboardPages/AdminDashboardPages/PendingOrders/PendingOrders";
import AllProducts from "../Pages/DashboardPages/AdminDashboardPages/AllProducts/AllProducts";
import AllUsers from "../Pages/DashboardPages/AdminDashboardPages/AllUsers/AllUsers";
import PrivateRoute from "./PrivateRoute";
import ConfirmOrders from "../Pages/DashboardPages/AdminDashboardPages/ConfirmOrders/ConfirmOrders";
import CancelOrders from "../Pages/DashboardPages/AdminDashboardPages/CancelOrders/CancelOrders";
import SellingProducts from "../Pages/DashboardPages/AdminDashboardPages/SellingProducts/SellingProducts";

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
        element: (
          <PrivateRoute>
            <ProductDetailsCard></ProductDetailsCard>
          </PrivateRoute>
        ),
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
        path: "",
        element: <WelcomeDashboard></WelcomeDashboard>,
      },
      {
        path: "/dashboard/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashboard/update/:id",
        element: <UpdateProduct></UpdateProduct>,
      },
      {
        path: "/dashboard/allProducts",
        element: <AllProducts></AllProducts>,
      },
      {
        path: "/dashboard/allUsers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "/dashboard/pendingOrders",
        element: <PendingOrders></PendingOrders>,
      },
      {
        path: "/dashboard/confirmOrders",
        element: <ConfirmOrders></ConfirmOrders>,
      },
      {
        path: "/dashboard/cancelOrders",
        element: <CancelOrders></CancelOrders>,
      },
      {
        path: "/dashboard/sellingProducts",
        element: <SellingProducts></SellingProducts>,
      },
      {
        path: "/dashboard/myOrder",
        element: <MyOrder></MyOrder>,
      },
      {
        path: "/dashboard/myCancellations",
        element: <MyCancelOrders></MyCancelOrders>,
      },
      {
        path: "/dashboard/myShopping",
        element: <MyShopping></MyShopping>,
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
    path: "authentication",
    element: <AuthenticationLayout></AuthenticationLayout>,
    errorElement: <PageNotFound></PageNotFound>,
    children: [
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
