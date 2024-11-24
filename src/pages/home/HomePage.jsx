import Category from "../../components/category/Category";
import HeroSection from "../../components/heroSection/HeroSection";
import HomePageProductCard from "../../components/homePageProductCard/HomePageProductCard";
import Layout from "../../layout/Layout";
import Testimonial from "../../components/testimonial/Testimonial";
import Track from "../../components/track/Track";
import BestSellingProducts from "../../components/homePageProductCard/BestSellingProducts";
import ShockSellingProducts from "../../components/homePageProductCard/ShockSellingProducts";

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <Category />
      <BestSellingProducts />
      <ShockSellingProducts />
      <HomePageProductCard />
      <Track />
      <Testimonial />
    </Layout>
  );
};

export default HomePage;
