import { RiExpandDiagonalLine, RiFullscreenLine } from "@remixicon/react";
import React, { useContext, useEffect, useState } from "react";
import ImageSlideDialog from "../../components/Dialog/imageSlideDialog/ImageSlideDialog";
import { AdvancedImage } from "@cloudinary/react";
import { getCloudinaryImage } from "../../utils/cloudinaryHelper";
import myContext from "../../context/myContext";

const ProductImages = () => {
  const { thumbnails } = useContext(myContext);
  const [mainImage, setMainImage] = useState();
  // Gán giá trị src đầu tiên làm ảnh chính
  useEffect(() => {
    if (thumbnails.length > 0 && thumbnails[0].src) {
      setMainImage(thumbnails[0].src);
    }
  }, [thumbnails]);

  // Thay đổi ảnh chính khi người dùng chọn ảnh khác
  const changeImage = (newSrc) => {
    setMainImage(newSrc);
  };
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full px-4 mb-8 md:w-1/2">
      <div className="relative">
        <AdvancedImage
          cldImg={getCloudinaryImage(mainImage)}
          alt="Product"
          className="w-full h-auto mb-4 rounded-lg shadow-md"
          id="mainImage"
        />{" "}
        <RiExpandDiagonalLine
          size={40}
          className="absolute px-1 py-1 text-gray-700 bg-white border-2 rounded-full cursor-pointer bottom-2 left-2 "
          onClick={() => setOpen(true)}
        />
        <ImageSlideDialog setOpen={setOpen} open={open} />
      </div>

      <div className="flex justify-center gap-4 py-4 overflow-x-auto">
        {thumbnails.map((thumb, index) => (
          <AdvancedImage
            key={index}
            cldImg={getCloudinaryImage(thumb.src)}
            alt={thumb.alt}
            className="object-cover transition duration-300 rounded-md cursor-pointer size-16 sm:size-20 opacity-60 hover:opacity-100"
            onClick={() => changeImage(thumb.src)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
