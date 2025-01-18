import { Carousel, Dialog } from "@material-tailwind/react";
import React, { useContext, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import myContext from "../../../context/myContext";
import { AdvancedImage } from "@cloudinary/react";
import { getCloudinaryImage } from "../../../utils/cloudinaryHelper";

const ImageSlideDialog = ({ open, setOpen }) => {
  const handleOpen = () => setOpen(!open);
  return (
    <Dialog open={open} handler={handleOpen}>
      <ImageSlider />
    </Dialog>
  );
};

const ImageSlider = () => {
  const { thumbnails, setThumbnails } = useContext(myContext);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="w-full h-full">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        navigation={{
          enabled: window.innerWidth >= 1024, // Hide navigation on screens smaller than 1024px
        }}
      >
        {thumbnails.map((thumb, index) => (
          <SwiperSlide>
            <AdvancedImage
              key={index}
              cldImg={getCloudinaryImage(thumb.src)}
              alt={thumb.alt}
              className="w-full h-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        slidesPerView={4}
        spaceBetween={10}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {thumbnails.map((thumb, index) => (
          <SwiperSlide>
            <AdvancedImage
              key={index}
              cldImg={getCloudinaryImage(thumb.src)}
              alt={thumb.alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlideDialog;
