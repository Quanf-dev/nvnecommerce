import { useNavigate } from "react-router";
import { getCloudinaryImage } from "./../../utils/cloudinaryHelper";
import { AdvancedImage } from "@cloudinary/react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useContext, useRef, useState } from "react";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "@remixicon/react";
import HeadCategory from "../headCategory/HeadCategory";
import myContext from "../../context/myContext";

const category = [
  {
    id: "ghe-luoi",
    image: getCloudinaryImage("ghe-luoi-450x450_nlq8gt", 450),
    name: "Ghế Lười",
    quantity: 43,
  },
  {
    id: "ghe-xoay",
    image: getCloudinaryImage("ghe-xoay-450x450_vvaqfj", 450),
    name: "Ghế xoay",
    quantity: 43,
  },
  {
    id: "ghe-van-phong",
    image: getCloudinaryImage("ghe-van-phong-450x450_uakifi", 450),
    name: "Ghế văn phòng",
    quantity: 43,
  },
  {
    id: "ghe-phong-hop",
    image: getCloudinaryImage("ghe-phong-hop-450x450_la2d2s", 450),
    name: "Ghế phòng họp",
    quantity: 43,
  },
  {
    id: "ghe-truong-phong",
    image: getCloudinaryImage("ghe-truong-phong-450x450_cwsprq", 450),
    name: "Ghế trưởng phòng",
    quantity: 43,
  },
  {
    id: "ghe-gaming",
    image: getCloudinaryImage("ghe-game-450x450_zxckb2", 450),
    name: "Ghế gaming",
    quantity: 43,
  },
  {
    id: "ghe-ngoi-may-tinh",
    image: getCloudinaryImage("ghe-ngoi-may-tinh-450x450_s0gagm", 450),
    name: "Ghế ngồi máy tính",
    quantity: 43,
  },
  {
    id: "ghe-thu-gian",
    image: getCloudinaryImage("ghe-thu-gian-450x450_ytupae", 450),
    name: "Ghế thư giãn",
    quantity: 43,
  },
  {
    id: "ghe-giam-doc",
    image: getCloudinaryImage("ghe-giam0doc-450x450_rqpoct", 450),
    name: "Ghế giám đốc",
    quantity: 43,
  },
  {
    id: "ghe-bar",
    image: getCloudinaryImage("ghe-bar-450x450_p400xx", 450),
    name: "Ghế Bar",
    quantity: 43,
  },
];

const Category = () => {
  const { setNameCategory } = useContext(myContext);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isNavigationEnabled, setIsNavigationEnabled] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="relative mt-16">
      <h1 className="  w-full text-[1.3rem] font-medium text-center text-textBackground-dark">
        Nội thất NVN Huế - Đà Nẵng | Tổng hợp những mẫu bàn ghế văn phòng tốt
        nhất
      </h1>
      <HeadCategory text="Danh mục ghế" showMore="false" />
      <Swiper
        grabCursor={true}
        loop={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        spaceBetween={10}
        slidesPerView={7}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mt-10 cursor-pointer"
        slidesPerGroup={7}
        scrollbar={true}
      >
        {category.map((item, index) => {
          return (
            <SwiperSlide
              key={item.id}
              className="relative flex flex-col items-center justify-center"
              onMouseEnter={() => setIsNavigationEnabled(true)}
              onMouseLeave={() => setIsNavigationEnabled(false)}
            >
              <div
                onClick={() => {
                  navigate(`/category/${item.id}`), setNameCategory(item.name);
                }}
                className="w-16 h-16 max-w-xs mb-1 transition-all cursor-pointer lg:w-24 lg:h-24"
              >
                <div className="flex justify-center mb-12">
                  <AdvancedImage cldImg={item.image} />
                </div>
              </div>
              <p className="text-sm text-center uppercase text-[0.9rem] w-full">
                {item.name}
              </p>{" "}
              <p className="text-[0.75rem] text-[#333]">
                {item.quantity} sản phẩm
              </p>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <button
        onMouseEnter={() => setIsNavigationEnabled(true)}
        onMouseLeave={() => setIsNavigationEnabled(false)}
        className={`transform ease-linear duration-300  ${
          isNavigationEnabled ? "opacity-1 left-2" : "opacity-0 left-6"
        } absolute z-30 text-textBackground-dark transform  top-[150px]  `}
        ref={prevRef}
      >
        {" "}
        <RiArrowDropLeftLine size={40} />{" "}
      </button>
      <button
        onMouseEnter={() => setIsNavigationEnabled(true)}
        onMouseLeave={() => setIsNavigationEnabled(false)}
        className={`transform ease-linear duration-300 ${
          isNavigationEnabled ? "opacity-1 right-2" : "opacity-0 right-6"
        } absolute z-10 text-textBackground-dark transform  top-[150px]  `}
        ref={nextRef}
      >
        {" "}
        <RiArrowDropRightLine size={40} />{" "}
      </button>
    </div>
  );
};

export default Category;
