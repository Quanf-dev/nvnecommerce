import axios from "axios";

// Hàm tải lên hình ảnh hoặc video lên Cloudinary
const uploadImageToCloudinary = async (file, mediaType) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_NAME); // Thay thế bằng Upload preset của bạn

  // Chọn URL endpoint dựa trên loại media
  const uploadUrl = `https://api.cloudinary.com/v1_1/${
    import.meta.env.VITE_CLOUDINARY_NAME
  }/${mediaType}/upload`;

  try {
    const response = await axios.post(uploadUrl, formData);
    const { secure_url, public_id } = response.data; // Lấy secure_url và public_id từ response
    console.log("public_id:", public_id); // Debug: kiểm tra public_id
    return { secure_url, public_id };
  } catch (error) {
    console.error("Lỗi khi tải lên:", error);
    throw error;
  }
};

export default uploadImageToCloudinary;
