import { Rating } from "@material-tailwind/react";
import React, { useContext, useEffect, useState } from "react";
import AmountSelector from "./../../components/amountSelector/AmountSelector";
import {
  RiChat3Line,
  RiFacebookFill,
  RiLinkedinFill,
  RiMessage3Line,
  RiTelegram2Fill,
  RiTwitterFill,
} from "@remixicon/react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import useCart from "../../hooks/useCart";
import toast from "react-hot-toast";
import useBuyNowNavigate from "../../hooks/useBuyNowNavigate";

const ProductDetails = ({ arrayColor, setArrayColor }) => {
  const { product, setProduct } = useContext(myContext);
  const {
    name,
    new_price,
    old_price,
    rating,
    quantity,
    keywords,
    product_information: {
      warranty,
      seat_height,
      width,
      depth,
      height,
      material,
      brand,
      additional_info,
    },
    product_category,
    id,
  } = product;
  const { cartItems, incrementCart, decrementCart, deleteCart, addCart } =
    useCart();

  const handleAmountChange = (newAmount) => {
    if (newAmount > quantity) {
      incrementCart(id);
    } else if (newAmount < quantity) {
      decrementCart(id);
    }
  };
  const navigate = useNavigate();
  const { goToCheckout } = useBuyNowNavigate();

  const handleCheckout = () => {
    if (product.colorPick !== undefined) {
      goToCheckout("buynow");
    } else {
      toast.error("Vui lòng chọn màu");
    }
  };

  return (
    <div className="w-full px-4 md:w-1/2">
      <h2 className="mb-2 text-xl font-bold mg:text-2xl lg:text-3xl">{name}</h2>
      <div className="flex gap-2 mb-4">
        <span className="flex items-center text-xl text-gray-500 line-through ">
          {old_price}&nbsp;
          <span className="text-[1rem] ">₫</span>
        </span>
        <span className="mr-2 text-xl font-bold text-primary">
          {new_price}{" "}
          <span className="relative bottom-1  right-1 text-[1rem]"> ₫</span>
        </span>
      </div>
      <div className="flex items-center mb-4">
        <Rating value={rating} readonly />
      </div>
      <ul className="flex flex-col gap-1">
        <li className="flex justify-between border-b-2 border-dotted text-[0.9rem] pb-1">
          <p className="font-bold">Bảo hành</p>
          <p className="text-textDesc">{warranty}</p>
        </li>
        <li className="flex justify-between border-b-2 border-dotted text-[0.95rem] pb-1">
          <p className="font-bold">Chiều cao mặt ngồi</p>
          <p className="text-textDesc">{seat_height}</p>
        </li>
        <li className="flex justify-between border-b-2 border-dotted text-[0.95rem] pb-1">
          <p className="font-bold">Chiều rộng</p>
          <p className="text-textDesc">{width}</p>
        </li>
        <li className="flex justify-between border-b-2 border-dotted text-[0.95rem] pb-1">
          <p className="font-bold">Chiều sâu</p>
          <p className="text-textDesc">{depth}</p>
        </li>
        <li className="flex justify-between border-b-2 border-dotted text-[0.95rem] pb-1">
          <p className="font-bold">Chiều cao</p>
          <p className="text-textDesc">{height}</p>
        </li>
        <li className="flex justify-between border-b-2 border-dotted text-[0.95rem] pb-1">
          <p className="font-bold">Vật liệu</p>
          <p className="text-textDesc">{material}</p>
        </li>
      </ul>
      <ul className="flex flex-col gap-1">
        {additional_info?.map((item, index) => (
          <li key={index} className="flex  border-dotted text-[0.9rem] pb-1">
            <p>{item}</p>
          </li>
        ))}
      </ul>

      <ColorSelection arrayColor={arrayColor} setArrayColor={setArrayColor} />

      <div className="flex items-center h-10 mb-6 space-x-2 lg:space-x-4 ">
        <AmountSelector amount={quantity} onAmountChange={handleAmountChange} />
        {cartItems.some((p) => p.id === id) ? (
          <button
            onClick={() => deleteCart(product)}
            className="flex items-center h-full gap-2 px-6 text-white rounded-md text-nowrap bg-primary"
          >
            Xóa khỏi giỏ hàng
          </button>
        ) : (
          <button
            onClick={() => addCart(product)}
            className="flex items-center h-full gap-2 px-6 text-white rounded-md text-nowrap bg-primary"
          >
            Thêm vào giỏ hàng
          </button>
        )}

        <Link
          to={"https://zalo.me/0364289846"}
          className="flex items-center h-full gap-2 px-3 text-gray-800 bg-gray-200 rounded-md hover:bg-gray-300 "
        >
          <RiChat3Line />
          <span className="hidden sm:inline">Chat Zalo</span>
        </Link>
      </div>
      <div>
        <button
          onClick={handleCheckout}
          className="w-full gap-2 px-6 py-1 text-center text-white rounded-md bg-primary"
        >
          <span className="font-bold ">MUA NGAY</span> <br />
          <span className="text-[0.9rem] relative bottom-[2px]">
            Gọi điện xác nhận và giao hàng tận nơi
          </span>
        </button>
      </div>

      <div className="mt-2 border-b-[1px] border-textBackground-light"></div>

      <div className="text-[0.9rem] flex flex-col gap-2 mt-4">
        <p className="font-bold">
          Mã:{" "}
          <span className="font-normal leading-6 text-textDesc">{brand}</span>{" "}
        </p>
        <p className="font-bold">
          Danh mục:{" "}
          <span className="font-normal leading-6 text-textDesc">
            {product_category}
          </span>{" "}
        </p>
        <p className="font-bold">
          Từ khóa:{" "}
          <span className="font-normal leading-6 text-textDesc">
            {keywords}
          </span>{" "}
        </p>
        <p className="flex font-bold ">
          Share:{" "}
          <span className="flex gap-2 ml-2 font-normal leading-6 text-textDesc">
            <RiFacebookFill size={18} className="cursor-pointer" />
            <RiTelegram2Fill size={18} className="cursor-pointer" />
            <RiTwitterFill size={18} className="cursor-pointer" />
            <RiLinkedinFill size={18} className="cursor-pointer" />
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

const ColorSelection = ({ arrayColor, setArrayColor }) => {
  const { setProduct } = useContext(myContext);
  const { setThumbnails } = useContext(myContext);
  useEffect(() => {
    const activeColor = Object.entries(arrayColor).find(
      ([, value]) => value.active
    );

    if (activeColor) {
      const [, { images }] = activeColor;

      // Cập nhật src của thumbnails từ màu active
      setThumbnails((prevThumbnails) =>
        prevThumbnails.map((thumbnail, index) => ({
          ...thumbnail,
          src: images[index] || "", // Gán giá trị từ images của màu active
        }))
      );
    } else {
      const colorKeys = Object.keys(arrayColor);
      if (colorKeys.length > 0) {
        const firstColorImages = arrayColor[colorKeys[0]].images; // Lấy images từ màu đầu tiên
        if (firstColorImages) {
          setThumbnails((prevThumbnails) =>
            prevThumbnails.map((thumbnail, index) => ({
              ...thumbnail,
              src: firstColorImages[index] || "", // Gán giá trị từ images màu đầu tiên
            }))
          );
        }
      }
    }
  }, [arrayColor]);

  const handleColorClick = (colorKey) => {
    // Cập nhật trạng thái active: chỉ một màu được chọn
    setArrayColor((prevArrayColor) =>
      Object.fromEntries(
        Object.entries(prevArrayColor).map(([key, value]) => [
          key,
          { ...value, active: key === colorKey }, // Chỉ đặt active: true cho màu được chọn
        ])
      )
    );
    setProduct((prev) => ({
      ...prev,
      colorPick: colorKey,
    }));
  };

  return (
    <div className="flex items-center gap-5 mt-5 mb-6">
      <h3 className="mb-2 font-semibold">Chọn màu:</h3>
      <div className="relative flex space-x-2 bottom-1">
        {Object.entries(arrayColor).map(([colorKey, colorValue]) => {
          const { active } = colorValue;
          const bgClass =
            colorKey === "color_black"
              ? "bg-black"
              : colorKey === "color_gray"
              ? "bg-gray-300"
              : colorKey === "color_white"
              ? "bg-white border border-gray-300"
              : colorKey === "color_pink"
              ? "bg-pink-500"
              : ""; // Add more color classes if needed

          return (
            <button
              key={colorKey}
              className={`w-8 h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${bgClass} ${
                active ? "ring-4" : ""
              }`}
              onClick={() => handleColorClick(colorKey)}
            >
              {/* Hiển thị active nếu cần */}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProductDetails;
