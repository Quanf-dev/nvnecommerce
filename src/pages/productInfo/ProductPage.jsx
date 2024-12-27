import React, { useContext, useEffect, useState, Suspense } from "react";
import ProductImages from "./ProductImages";
import ProductDetails from "./ProductDetails";
import Layout from "../../layout/Layout";
import ProductDesc from "./ProductDesc";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import { useParams } from "react-router-dom";
import myContext from "../../context/myContext";
import getSingleProductService from "../../services/getSingleProductService";
import Loader from "../../components/loader/Loader";

const ProductPage = () => {
  const { loading, product, setProduct } = useContext(myContext);
  const { url } = useParams();

  const getSingleProductFunction = getSingleProductService();

  const [arrayColor, setArrayColor] = useState(() =>
    Object.fromEntries(
      Object.entries(product.images || {})
        .filter(([key, value]) => Array.isArray(value) && value.length === 4)
        .map(([key, value]) => [key, { images: value, active: false }])
    )
  );

  useEffect(() => {
    if (url && typeof url === "string" && url.trim() !== "") {
      const index = url.indexOf("-i.");
      if (index !== -1) {
        const id = url.substring(index + 3);
        if (id.trim()) {
          getSingleProductFunction(setProduct, id);
        }
      }
    }
  }, [url]);

  return (
    <Layout>
      <div className="container mx-auto mt-4">
        <Breadcrumb />
        {loading ? (
          <div className="flex items-center justify-center h-screen py-10">
            <Loader />
          </div>
        ) : (
          <Suspense fallback={<Loader />}>
            <div className="flex flex-wrap -mx-4">
              <ProductImages />
              <ProductDetails
                setArrayColor={setArrayColor}
                arrayColor={arrayColor}
              />
              <ProductDesc />
            </div>
          </Suspense>
        )}
      </div>
    </Layout>
  );
};

export default ProductPage;
