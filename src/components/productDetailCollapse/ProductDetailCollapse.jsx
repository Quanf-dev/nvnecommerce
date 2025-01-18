import { Typography } from "@material-tailwind/react";
import React, { useContext } from "react";
import { getCloudinaryImage } from "../../utils/cloudinaryHelper";
import { AdvancedImage } from "@cloudinary/react";
import myContext from "../../context/myContext";

const image = getCloudinaryImage("Ghe-Van-Phong-chu-a-450x450_rebdys", 750);

const ProductDetailCollapse = () => {
  const { product, setProduct } = useContext(myContext);

  const {
    name,
    description: { title },
    images,
  } = product;
  return (
    <div className="flex flex-col gap-4 mt-4 max-w-[1000px]">
      <h1 classname="pt-10 font-bold ">Giới thiệu {name}</h1>
      <Typography classname="mb-5 text-textDesc">{title}</Typography>
      <AdvancedImage
        cldImg={getCloudinaryImage(images.images_desc[0])}
        className="w-[800px] aspect-[1/1] object-cover"
      />
      <AdvancedImage
        cldImg={getCloudinaryImage(images.images_desc[1])}
        className="w-[800px] aspect-[1/1] object-cover"
      />
      <AdvancedImage
        cldImg={getCloudinaryImage(images.images_desc[2])}
        className="w-[800px] aspect-[1/1] object-cover"
      />
      <AdvancedImage
        cldImg={getCloudinaryImage(images.images_desc[3])}
        className="w-[800px] aspect-[1/1] object-cover"
      />
      <Typography variant="h5" classname="pt-10">
        Các ưu điểm của Đèn chùm pha lê bằng đồng sang trọng
      </Typography>{" "}
      <li className="text-textDesc">
        Thiết kế với sự tinh tế và khéo léo, ấn tượng
      </li>{" "}
      <li className="text-textDesc">
        Thiết kế với sự tinh tế và khéo léo, ấn tượng
      </li>{" "}
      <li className="text-textDesc">
        Thiết kế với sự tinh tế và khéo léo, ấn tượng
      </li>{" "}
      <li className="text-textDesc">
        Thiết kế với sự tinh tế và khéo léo, ấn tượng
      </li>{" "}
      <li className="text-textDesc">
        Thiết kế với sự tinh tế và khéo léo, ấn tượng
      </li>{" "}
    </div>
  );
};

export default ProductDetailCollapse;
