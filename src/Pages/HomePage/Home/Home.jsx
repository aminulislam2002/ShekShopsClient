import HowItWorks from "../HomePageSections/HowItWorks/HowItWorks";
import BestSellingProducts from "../HomePageSections/BestSellingProducts/BestSellingProducts";
import OurProductFeature from "../HomePageSections/OurProductFeature/OurProductFeature";
import TopBanner from "../HomePageSections/TopBanner/TopBanner";
import MostPopularItem from "../HomePageSections/MostPopularItem/MostPopularItem";
import PromoSection from "../HomePageSections/PromoSection/PromoSection";

const Home = () => {
  return (
    <div>
      <TopBanner></TopBanner>
      <HowItWorks></HowItWorks>
      <BestSellingProducts></BestSellingProducts>
      <PromoSection></PromoSection>
      <MostPopularItem></MostPopularItem>
      <OurProductFeature></OurProductFeature>
    </div>
  );
};

export default Home;
