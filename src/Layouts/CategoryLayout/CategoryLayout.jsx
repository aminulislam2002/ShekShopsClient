import { Outlet } from "react-router-dom";
import NavBar from "../../Pages/SharedPages/NavBar/NavBar";
import Footer from "../../Pages/SharedPages/Footer/Footer";
import PromoSectionTwo from "../../Pages/SharedPages/PromoSectionTwo/PromoSectionTwo";

const CategoryLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <PromoSectionTwo></PromoSectionTwo>
      <Footer></Footer>
    </div>
  );
};

export default CategoryLayout;
