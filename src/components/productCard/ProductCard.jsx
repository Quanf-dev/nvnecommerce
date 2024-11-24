import React, { useState } from "react";
import {getCloudinaryImage} from "../../utils/cloudinaryHelper"
import { AdvancedImage } from "@cloudinary/react";
import { Button, Card, Rating, Tooltip } from "@material-tailwind/react";
import { RiSearch2Line  , RiShoppingCartLine } from "@remixicon/react";

const image = getCloudinaryImage("Ghe-Van-Phong-chu-a-450x450_rebdys",250)

const ProductCard = ({className}) => {
  const [hoverImage,setHoverImage] = useState(false) ;
  return (
    <Card className={`${className} min-w-[220px] h-auto flex flex-col items-center gap-2 rounded-none pb-4 shadow-none `}>
      <div onMouseEnter={() => setHoverImage(true)} onMouseLeave={() => setHoverImage(false)} className="relative overflow-hidden w-full">
        <AdvancedImage
         cldImg={image}
         className="hover:scale-105 transform duration-200 ease-linear object-cover w-full h-full"
        />
        <p className="rounded-[12px] absolute top-2 left-2 inline py-[6px] px-[10px] text-xs bg-primary text-white">-51%</p>
        <div className={`${hoverImage ? "bottom-2 opacity-1" : "-bottom-2 opacity-0"}  transform duration-200 ease-linear inline-flex px-4 py-2 absolute  text-black bg-white gap-4 left-1/2 -translate-x-1/2`}>
        <Tooltip content="Thêm vào giỏ hàng">
          <Button variant="text" className="px-0 py-0 text-inherit"> <RiShoppingCartLine size={20}/></Button>
        </Tooltip>
        <Tooltip content="Xem sản phẩm">
          <Button variant="text" className="px-0 py-0 text-inherit"> <RiSearch2Line size={20}/></Button>
        </Tooltip>
          </div>
      </div>
      <p className="text-[0.9rem]  px-3 text-center">Ghế Văn Phòng Giá Rẻ Chân Xoay Gx405</p>
      <Rating value={5} readonly className="starRatingCustom" />
      <div className="flex gap-2 text-[0.85rem]"><p className="line-through text-[#bbb]">650.000₫</p>
      <span className="text-primary font-semibold text-[0.95rem] ">520.000₫</span></div>
    </Card>
  );
};

export default ProductCard;
