import React from "react";
import LayoutHome from "./../../layout/LayoutHome";
import { Typography } from "@material-tailwind/react";
import banner from "../../assets/Banner-tu-van-chon-ghe-van-phong.jpg";
import HeadCategory from "../headCategory/HeadCategory";
import ProductCard from "../productCard/ProductCard";
import ListSeoProduct from "../listSeoProduct/ListSeoProduct";
import filterProduct from "../../utils/filterProduct";

const MeshChairProduct = () => {
  const seoMeshChair = [
    "Ghế lưới văn phòng",
    "Ghế lưới cho văn phòng hiện đại",
    "Ghế lưới giá rẻ",
  ];
  const filterMeshChair = filterProduct({ category: "ghế lưới" });

  return (
    <div className=" bg-textBackground-light">
      <LayoutHome>
        <div className="flex gap-4 ">
          <div className="w-[285px] bg-white p-2 mb-24">
            <Typography
              variant="h5"
              className="py-1 font-medium text-center text-white uppercase bg-primary"
            >
              {" "}
              Nổi bật
            </Typography>
            <div className="flex flex-col h-auto mt-2">
              <Typography
                variant="h6"
                className="py-2 font-normal border-b-2 hover:text-primary"
              >
                Ghế Văn Phòng
              </Typography>
              <Typography
                variant="h6"
                className="py-2 font-normal border-b-2 hover:text-primary"
              >
                Ghế Trưởng Phòng
              </Typography>
              <Typography
                variant="h6"
                className="py-2 font-normal border-b-2 hover:text-primary"
              >
                Ghế Nhân Viên
              </Typography>
              <Typography
                variant="h6"
                className="py-2 font-normal border-b-2 hover:text-primary"
              >
                Ghế Gaming
              </Typography>
              <Typography
                variant="h6"
                className="py-2 font-normal border-b-2 hover:text-primary"
              >
                Ghế Thư Giãn
              </Typography>
              <img src={banner} alt="Banner-tu-van-chon-ghe-van-phong" />
            </div>
          </div>
          <div className="flex-1">
            <HeadCategory text="GHẾ LƯỚI NỔI BẬT" />
            <ListSeoProduct list={seoMeshChair} />
            <div className="grid grid-cols-4 gap-4 mt-4">
              {filterMeshChair.map((item, index) => (
                <ProductCard
                  key={index}
                  id={item.id}
                  item={item}
                  name={item.name}
                  new_price={item.new_price}
                  old_price={item.old_price}
                  rating={item.rating}
                  image_id={item.images.images_desc[1]}
                />
              ))}
            </div>
          </div>
        </div>
      </LayoutHome>
    </div>
  );
};

export default MeshChairProduct;
