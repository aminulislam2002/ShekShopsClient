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
import ViewAllProduct from "../Pages/DashboardPages/AdminDashboardPages/ViewAllProduct/ViewAllProduct";
import ViewAllOrder from "../Pages/DashboardPages/AdminDashboardPages/ViewAllOrder/ViewAllOrder";
import Login from "../Pages/AuthenticationPage/LoginPage/Login";
import AuthenticationLayout from "../Layouts/AuthenticationLayout/AuthenticationLayout";
import UpdateProduct from "../Pages/DashboardPages/AdminDashboardPages/UpdateProduct/UpdateProduct";
import WelcomeDashboard from "../Pages/DashboardPages/WelcomeDashboard/WelcomeDashboard";
import ViewAllUsers from "../Pages/DashboardPages/AdminDashboardPages/ViewAllUsers/ViewAllUsers";
import PrivateRoute from "./PrivateRoute";
import ViewConfirmOrder from "../Pages/DashboardPages/AdminDashboardPages/ViewConfirmOrder/ViewConfirmOrder";
import ViewCancelOrder from "../Pages/DashboardPages/AdminDashboardPages/ViewCancelOrder/ViewCancelOrder";

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
        path: "/dashboard/viewAllProduct",
        element: <ViewAllProduct></ViewAllProduct>,
      },
      {
        path: "/dashboard/ViewAllUsers",
        element: <ViewAllUsers></ViewAllUsers>,
      },
      {
        path: "/dashboard/viewAllOrders",
        element: <ViewAllOrder></ViewAllOrder>,
      },
      {
        path: "/dashboard/viewConfirmOrders",
        element: <ViewConfirmOrder></ViewConfirmOrder>,
      },
      {
        path: "/dashboard/viewCancelOrders",
        element: <ViewCancelOrder></ViewCancelOrder>,
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
