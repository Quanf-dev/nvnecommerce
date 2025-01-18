import HeroCard from "../heroCard/HeroCard";
import { useEffect, useRef, useState } from "react";
import { getCloudinaryImage } from "../../utils/cloudinaryHelper";
import { AdvancedImage } from "@cloudinary/react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import {
  RiArrowDownLine,
  RiArrowDropLeftLine,
  RiArrowDropRightLine,
} from "@remixicon/react";
import HeroMenu from "../heroMenu/HeroMenu";

const banner1 = getCloudinaryImage("banner-ban-ghe-z_leovxu", 2000);
const banner2 = getCloudinaryImage("banner4_yyzxjd", 2000);
const banner3 = getCloudinaryImage("Banner-Sihoo_u6759p", 2000);

const HeroSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [active, setActive] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isNavigationEnabled, setIsNavigationEnabled] = useState(false);

  const Data = [
    "Các Mẫu Ghế Hot Nhất 2024",
    "Thiết Kế - Thi Công Nội Thất Văn Phòng",
    "Nội Thất Văn Phòng Giá Rẻ",
  ];

  return (
    <div className="flex justify-center w-full ">
      <HeroMenu />
      <div className="max-w-[1003px] relative pl-10">
        <Swiper
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="aspect-[16/6.5] "
        >
          {[banner1, banner2, banner3].map((item, index) => {
            return (
              <SwiperSlide
                onMouseEnter={() => setIsNavigationEnabled(true)}
                onMouseLeave={() => setIsNavigationEnabled(false)}
              >
                <AdvancedImage
                  cldImg={item}
                  className="object-cover w-full h-full"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className=" bg-[#eeeeee] text-center px-32 "
        >
          {Data.map((item, index) => (
            <SwiperSlide
              onClick={() => setActive(index)}
              className={`cursor-pointer h-14 ${
                active === index ? "border-t-4 border-primary text-black " : ""
              } `}
            >
              {item}
            </SwiperSlide>
          ))}
        </Swiper> */}
        <button
          onMouseEnter={() => setIsNavigationEnabled(true)}
          onMouseLeave={() => setIsNavigationEnabled(false)}
          className={`transform ease-linear duration-300   ${
            isNavigationEnabled ? "opacity-1 left-10" : "opacity-0 left-6"
          } absolute z-10 text-white transform border-4 rounded-full top-1/2 -translate-y-1/2 `}
          ref={prevRef}
          onClick={() => setActive(active === 0 ? Data.length - 1 : active - 1)}
        >
          {" "}
          <RiArrowDropLeftLine size={30} />{" "}
        </button>
        <button
          onMouseEnter={() => setIsNavigationEnabled(true)}
          onMouseLeave={() => setIsNavigationEnabled(false)}
          className={`transform ease-linear duration-300  ${
            isNavigationEnabled ? "opacity-1 right-2" : "opacity-0 right-6"
          } absolute z-10 text-white transform border-4 rounded-full top-1/2 -translate-y-1/2  `}
          ref={nextRef}
          onClick={() => setActive(active === Data.length - 1 ? 0 : active + 1)}
        >
          {" "}
          <RiArrowDropRightLine size={30} />{" "}
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
