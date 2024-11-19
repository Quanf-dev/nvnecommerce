import { Carousel, IconButton } from "@material-tailwind/react";
import HeroCard from "../heroCard/HeroCard";
import { useState } from "react";

const HeroSection = () => {
  const [active, setActive] = useState(0);
  const Data = [
    "Các Mẫu Ghế Chơi Game 2024",
    "Thiết Kế - Thi Công Nội Thất Văn Phòng",
    "Nội Thất Văn Phòng Giá Rẻ",
  ];
  return (
    <div className="flex justify-center w-full gap-8 mx-auto ">
      <div className=" max-w-[810px] pb-32  ">
        <Carousel
          prevArrow={({ handlePrev, activeIndex }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={() => {
                handlePrev();
                setActive(activeIndex === 0 ? 0 : activeIndex - 1);
              }}
              className="!absolute top-2/4 left-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
          )}
          nextArrow={({ handleNext, activeIndex }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={() => {
                handleNext();
                setActive(
                  activeIndex === Data.length - 1 ? 2 : activeIndex + 1
                );
              }}
              className="!absolute top-2/4 !right-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </IconButton>
          )}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute z-50 flex gap-2 bottom-4 left-2/4 -translate-x-2/4">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => {
                    setActiveIndex(i), setActive(i);
                  }}
                />
              ))}
            </div>
          )}
          className="aspect-[16/6] w-full"
        >
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="image 1"
            className="object-cover w-full h-full"
          />
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 2"
            className="object-cover w-full h-full"
          />
          <img
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="image 3"
            className="object-cover w-full h-full"
          />
        </Carousel>
        <div className="w-full bg-[#F5F5F5] flex justify-center ">
          <ul className="flex  text-center  max-w-[700px] ">
            {Data.map((item, index) => (
              <li
                key={index}
                className={`${
                  active === index ? "border-t-4 border-primary" : ""
                } `}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="">
        <div className="w-full max-w-[380px] ">
          <HeroCard />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
