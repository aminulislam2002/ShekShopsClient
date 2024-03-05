import { Outlet } from "react-router-dom";
import NavBar from "../../Pages/SharedPages/NavBar/NavBar";
import Footer from "../../Pages/SharedPages/Footer/Footer";
import PromoSectionOne from "../../Pages/SharedPages/PromoSectionOne/PromoSectionOne ";

const MainLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <PromoSectionOne></PromoSectionOne>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
