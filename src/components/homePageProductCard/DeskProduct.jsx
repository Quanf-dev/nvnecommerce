import React, { useRef, useState } from "react";
import HeadCategory from "../headCategory/HeadCategory";
import ProductCard from "../productCard/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Navigation, Thumbs } from "swiper/modules";
import ListSeoProduct from "../listSeoProduct/ListSeoProduct";
import filterProduct from "../../utils/filterProduct";

const DeskProduct = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isNavigationEnabled, setIsNavigationEnabled] = useState(false);
  const seoDesk = [
    "Bàn làm việc giá rẻ",
    "Bàn làm việc cho không gian nhỏ",
    "Bàn làm việc hiện đại",
    "Bàn làm việc cho sinh viên",
  ];
  const filterDesk = filterProduct({ category: "bàn học sinh" });

  return (
    <div className="mt-4">
      <HeadCategory text="BÀN LÀM VIỆC" />
      <ListSeoProduct list={seoDesk} />
      <Swiper
        modules={[Navigation, Thumbs]}
        spaceBetween={10}
        slidesPerView={5}
        slidesPerGroup={5}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        className="relative mt-7"
      >
        {filterDesk.map((item, index) => (
          <SwiperSlide
            onMouseEnter={() => setIsNavigationEnabled(true)}
            onMouseLeave={() => setIsNavigationEnabled(false)}
          >
            <ProductCard
              key={index}
              name={item.name}
              new_price={item.new_price}
              old_price={item.old_price}
              rating={item.rating}
              image_id={item.images.images_desc[1]}
            />
          </SwiperSlide>
        ))}
        <button
          onMouseEnter={() => setIsNavigationEnabled(true)}
          onMouseLeave={() => setIsNavigationEnabled(false)}
          className={`cursor-pointer transform ease-linear duration-300 h-2/3 -left-2 drop-shadow-sm bg-white top-0 w-9  ${
            isNavigationEnabled ? "opacity-70 left-0" : "opacity-0 "
          } absolute z-10 text-black px-1  transform hover:text-primary hover:bg-brown-50 hover:opacity-1 `}
          ref={prevRef}
        >
          {" "}
          <RiArrowLeftSLine size={35} />{" "}
        </button>
        <button
          onMouseEnter={() => setIsNavigationEnabled(true)}
          onMouseLeave={() => setIsNavigationEnabled(false)}
          className={`cursor-pointer transform ease-linear duration-300 h-2/3 -right-2 drop-shadow-sm bg-white top-0  w-9  ${
            isNavigationEnabled ? "opacity-70 right-0" : "opacity-0 "
          } absolute z-10 text-black px-1  transform hover:text-primary hover:bg-brown-50 hover:opacity-1  `}
          ref={nextRef}
        >
          {" "}
          <RiArrowRightSLine size={35} className="relative right-1" />{" "}
        </button>
      </Swiper>
    </div>
  );
};

export default DeskProduct;
