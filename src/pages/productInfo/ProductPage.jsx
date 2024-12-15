import React, { useState } from "react";
import ProductImages from "./ProductImages";
import ProductDetails from "./ProductDetails";
import Layout from "../../layout/Layout";
import ProductDesc from "./ProductDesc";
import LayoutProduct from "./../../layout/LayoutProduct";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";

const ProductPage = () => {
  const getSingleProductFunction = getSingleProductService();
  useEffect(() => {
    getSingleProductFunction(setProduct, id);
  }, []);
  const [mainImage, setMainImage] = useState(
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
  );

  const thumbnails = [
    {
      src: "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8aGVhZHBob25lfGVufDB8MHx8fDE3MjEzMDM2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080",
      alt: "Thumbnail 1",
    },
    {
      src: "https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
      alt: "Thumbnail 2",
    },
    {
      src: "https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
      alt: "Thumbnail 3",
    },
    {
      src: "https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
      alt: "Thumbnail 4",
    },
  ];

  const changeImage = (newSrc) => {
    setMainImage(newSrc);
  };

  return (
    <Layout>
      <div className="container px-4 mx-auto mt-4">
        <Breadcrumb />
        <div className="flex flex-wrap -mx-4">
          <ProductImages
            mainImage={mainImage}
            thumbnails={thumbnails}
            changeImage={changeImage}
          />
          <ProductDetails />
          <ProductDesc />
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;
