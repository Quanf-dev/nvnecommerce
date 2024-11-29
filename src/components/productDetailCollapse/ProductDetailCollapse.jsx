import { Typography } from "@material-tailwind/react";
import React from "react";
import { getCloudinaryImage } from "../../utils/cloudinaryHelper";
import { AdvancedImage } from "@cloudinary/react";

const image = getCloudinaryImage("Ghe-Van-Phong-chu-a-450x450_rebdys", 750);

const ProductDetailCollapse = () => {
  return (
    <div className="flex flex-col gap-4 mt-4 max-w-[1000px]">
      <Typography variant="h5" classname="pt-10">
        Giới thiệu Đèn chùm pha lê bằng đồng sang trọng MC058-6D
      </Typography>
      <Typography classname="mb-5 text-textDesc">
        Đèn chùm pha lê bằng đồng MC058-6D là biểu tượng của sự quý phái và đẳng
        cấp, làm nổi bật không gian sống của bạn. Với sự kết hợp hoàn hảo giữa
        chất liệu pha lê lấp lánh và khung đồng tinh tế, sản phẩm không chỉ mang
        lại ánh sáng ấm áp mà còn là điểm nhấn thẩm mỹ, tạo nên vẻ đẹp lộng lẫy
        cho bất kỳ căn phòng nào.
      </Typography>
      <AdvancedImage cldImg={image} className=" aspect-[1/2]" />
      <AdvancedImage cldImg={image} className=" aspect-[1/2]" />
      <AdvancedImage cldImg={image} className="aspect-[1/2]" />
      <AdvancedImage cldImg={image} className="aspect-[1/2]" />
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
      <AdvancedImage cldImg={image} className="w-[400px] aspect-square" />
    </div>
  );
};

export default ProductDetailCollapse;
