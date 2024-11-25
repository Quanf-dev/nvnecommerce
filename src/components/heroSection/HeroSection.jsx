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

const banner1 = getCloudinaryImage("banner-top_bbo0of", 800);
const banner2 = getCloudinaryImage("banner-ghe-cong-thai-hoc_o34cs7", 800);
const banner3 = getCloudinaryImage("banner-noi-that_rbqxhu", 800);

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
    <div className="flex justify-center w-full gap-8 mx-auto ">
      <div className="max-w-[810px] relative">
        <Swiper
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="aspect-[16/6] "
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
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className=" bg-[#eeeeee] text-center pl-32 "
        >
          {Data.map((item, index) => (
            <SwiperSlide
              onClick={() => setActive(index)}
              className={`cursor-pointer ${
                active === index ? "border-t-4 border-primary text-black " : ""
              } `}
            >
              {item}
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          onMouseEnter={() => setIsNavigationEnabled(true)}
          onMouseLeave={() => setIsNavigationEnabled(false)}
          className={`transform ease-linear duration-300   ${
            isNavigationEnabled ? "opacity-1 left-2" : "opacity-0 left-6"
          } absolute z-10 text-white transform border-4 rounded-full top-36 `}
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
          } absolute z-10 text-white transform border-4 rounded-full top-36  `}
          ref={nextRef}
          onClick={() => setActive(active === Data.length - 1 ? 0 : active + 1)}
        >
          {" "}
          <RiArrowDropRightLine size={30} />{" "}
        </button>
      </div>
      <HeroCard />
    </div>
  );
};

export default HeroSection;
