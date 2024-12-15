import React, { useState } from "react";
import { getCloudinaryImage } from "../../utils/cloudinaryHelper";
import { AdvancedImage } from "@cloudinary/react";
import { Button, Card, Rating, Tooltip } from "@material-tailwind/react";
import {
  RiDeleteBin2Line,
  RiSearch2Line,
  RiShoppingCartLine,
} from "@remixicon/react";
import useCart from "../../hooks/useCart";

const ProductCard = ({
  className,
  name,
  new_price,
  old_price,
  rating,
  image_id,
  id,
  item,
}) => {
  console.log(item?.id);
  const [hoverImage, setHoverImage] = useState(false);
  const { cartItems, deleteCart, addCart } = useCart();
  return (
    <Card
      className={`${className} min-w-[220px] h-auto flex flex-col items-center gap-2 rounded-none pb-4 shadow-none `}
    >
      <div
        onMouseEnter={() => setHoverImage(true)}
        onMouseLeave={() => setHoverImage(false)}
        className="relative w-full overflow-hidden"
      >
        <AdvancedImage
          cldImg={getCloudinaryImage(image_id, 350)}
          className="object-cover w-full duration-300 ease-linear transform aspect-square hover:scale-105"
        />
        <p className="rounded-[12px] absolute top-2 left-2 inline py-[6px] px-[10px] text-xs bg-primary text-white">
          -51%
        </p>
        <div
          className={`${
            hoverImage ? "bottom-2 opacity-1" : "-bottom-2 opacity-0"
          }  transform duration-200 ease-linear inline-flex px-4 py-2 absolute  text-black bg-white gap-4 left-1/2 -translate-x-1/2`}
        >
          {cartItems.some((p) => p.id === id) ? (
            <Tooltip content="Xóa khỏi giỏ hàng">
              <Button
                onClick={() => deleteCart(item)}
                variant="text"
                className="px-0 py-0 text-inherit hover:bg-white active:bg-white"
              >
                {" "}
                <RiDeleteBin2Line size={20} />
              </Button>
            </Tooltip>
          ) : (
            <Tooltip content="Thêm vào giỏ hàng">
              <Button
                onClick={() => addCart(item)}
                variant="text"
                className="px-0 py-0 text-inherit hover:bg-white active:bg-white"
              >
                {" "}
                <RiShoppingCartLine size={20} />
              </Button>
            </Tooltip>
          )}

          <Tooltip content="Xem sản phẩm">
            <Button
              variant="text"
              className="px-0 py-0 text-inherit hover:bg-white active:bg-white"
            >
              {" "}
              <RiSearch2Line size={20} />
            </Button>
          </Tooltip>
        </div>
      </div>
      <p className="text-[0.9rem] px-3 text-center">{name}</p>
      <Rating value={rating} readonly className="starRatingCustom" />
      <div className="flex gap-2 text-[0.85rem] items-center">
        <p className="line-through text-[#bbb]">{old_price}₫</p>
        <span className="text-primary font-semibold text-[1.1rem] ">
          {new_price}₫
        </span>
      </div>
    </Card>
  );
};

export default ProductCard;
