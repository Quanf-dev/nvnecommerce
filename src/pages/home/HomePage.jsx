import Category from "../../components/category/Category";
import HeroSection from "../../components/heroSection/HeroSection";
import Testimonial from "../../components/testimonial/Testimonial";
import Track from "../../components/track/Track";
import BestSellingProducts from "../../components/homePageProductCard/BestSellingProducts";
import ShockSellingProducts from "../../components/homePageProductCard/ShockSellingProducts";
import KneelingChair from "../../components/homePageProductCard/KneelingChair";
import SwiveChair from "../../components/homePageProductCard/SwiveChair";
import MeshChairProduct from "../../components/homePageProductCard/MeshChairProduct";
import Footer from "../../components/footer/Footer";
import LayoutHome from "../../layout/LayoutHome";
import Navbar from "../../components/navbar/Navbar";
import DeskProduct from "../../components/homePageProductCard/DeskProduct";
import ChairGamingProduct from "../../components/homePageProductCard/ChairGamingProduct";
import DeskGamingProduct from "../../components/homePageProductCard/DeskGamingProduct";
import Announcement from "../../components/announcement/Announcement ";
import { Drawer } from "@material-tailwind/react";
import HeroMenuMobileView from "../../components/heroMenu/HeroMenuMobileView";
import { useContext } from "react";
import myContext from "../../context/myContext";

const HomePage = () => {
  const { openMobileMenu, setOpenMobileMenu } = useContext(myContext);
  return (
    <>
      <Announcement />
      <Navbar />
      <Drawer open={openMobileMenu} onClose={() => setOpenMobileMenu(false)}>
        <HeroMenuMobileView />
      </Drawer>
      <LayoutHome>
        <HeroSection />
        <Category />
        <BestSellingProducts />
        <ShockSellingProducts />
        <KneelingChair />
        <SwiveChair />
      </LayoutHome>
      <MeshChairProduct />
      <LayoutHome>
        <DeskProduct />
        <ChairGamingProduct />
        <DeskGamingProduct />
        <Testimonial />
        {/* <HomePageProductCard /> */}
      </LayoutHome>
      <Track />
      <Footer />
    </>
  );
};

export default HomePage;
