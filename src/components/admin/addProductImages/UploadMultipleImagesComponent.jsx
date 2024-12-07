import React, { useContext, useEffect, useState } from "react";
import { getCloudinaryImage } from "../../../utils/cloudinaryHelper";
import { AdvancedImage } from "@cloudinary/react";
import myContext from "../../../context/myContext";
import deleteImageFromCloudinary from "../../../utils/deleteImageFromCloudinary";
import uploadImageToCloudinary from "../../../utils/uploadImageToCloudinary";

const UploadMultipleImagesComponent = ({ images }) => {
  const { product, setProduct } = useContext(myContext);

  // Khởi tạo imageData từ localStorage hoặc mảng với 4 giá trị null
  const initialImageData =
    JSON.parse(localStorage.getItem(images)) || Array(4).fill(null);

  const [imageData, setImageData] = useState(initialImageData);

  // Lưu trữ hình ảnh vào Product và localStorage khi imageData thay đổi
  useEffect(() => {
    console.log(product);
    setProduct((prevProduct) => ({
      ...prevProduct,
      images: {
        ...prevProduct.images,
        [images]: imageData,
      },
    }));
    {
      images !== "images_desc" &&
        localStorage.setItem(images, JSON.stringify(imageData));
    }
  }, [imageData]);
  // Hàm xử lý tải lên các file đã chọn
  const handleFileChangeAndUpload = async (e, index) => {
    const file = e.target.files[0]; // Lấy file đã chọn
    try {
      const { public_id } = await uploadImageToCloudinary(file, "image");

      setImageData((prevData) => {
        const newData = [...prevData];
        if (newData[index]) {
          deleteImageFromCloudinary(newData[index]).then(() => {
            newData[index] = public_id;
            setImageData(newData);
          });
        } else {
          newData[index] = public_id; // Cập nhật public_id cho chỉ số tương ứng
          setImageData(newData);
        }
        return newData;
      });
    } catch (error) {
      console.error("Lỗi khi tải lên:", error);
    }
  };

  return (
    <div className="w-full px-4 mb-8">
      <form>
        <div className="grid grid-cols-2 gap-4">
          {imageData.map((public_id, index) => (
            <div key={index} className="mb-4">
              <label className="bg-white text-gray-500 font-semibold text-base rounded h-52 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto font-[sans-serif]">
                {public_id ? (
                  <AdvancedImage
                    cldImg={getCloudinaryImage(public_id, 300)}
                    alt={`Đã tải lên ${index + 1}`}
                    className="object-cover w-full h-full rounded"
                  />
                ) : (
                  <p>Upload Image</p>
                )}
                <input
                  type="file"
                  name="fileInput"
                  className="hidden"
                  onChange={(e) => handleFileChangeAndUpload(e, index)}
                  accept="image/*"
                />
              </label>
              <p>{`Hình ${index + 1}`}</p>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default UploadMultipleImagesComponent;
