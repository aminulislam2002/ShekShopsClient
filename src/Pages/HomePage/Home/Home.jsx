import HowItWorks from "../HomePageSections/HowItWorks/HowItWorks";
import NewArrivals from "../HomePageSections/NewArrivals/NewArrivals";
import ShopByDepartment from "../HomePageSections/ShopByDepartment/ShopByDepartment";
import TopBanner from "../HomePageSections/TopBanner/TopBanner";
import TrendingNow from "../HomePageSections/TrendingNow/TrendingNow";

const Home = () => {
  return (
    <div>
      <TopBanner></TopBanner>
      <HowItWorks></HowItWorks>
      <NewArrivals></NewArrivals>
      <TrendingNow></TrendingNow>
      <ShopByDepartment></ShopByDepartment>
    </div>
  );
};

export default Home;
