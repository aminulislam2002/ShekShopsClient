import HowItWorks from "../HomePageSections/HowItWorks/HowItWorks";
import BestSellingProducts from "../HomePageSections/BestSellingProducts/BestSellingProducts";
import OurProductFeature from "../HomePageSections/OurProductFeature/OurProductFeature";
import TopBanner from "../HomePageSections/TopBanner/TopBanner";
import MostPopularItem from "../HomePageSections/MostPopularItem/MostPopularItem";
import PromoSection from "../HomePageSections/PromoSection/PromoSection";
import NewArrivals from "../HomePageSections/NewArrivals/NewArrivals";

const Home = () => {
  return (
    <div>
      <TopBanner></TopBanner>
      <NewArrivals></NewArrivals>
      <HowItWorks></HowItWorks>
      <BestSellingProducts></BestSellingProducts>
      <PromoSection></PromoSection>
      <MostPopularItem></MostPopularItem>
      <OurProductFeature></OurProductFeature>
    </div>
  );
};

export default Home;
