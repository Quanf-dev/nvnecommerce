import axios from "axios";
import CryptoJS from "crypto-js"; // Sử dụng crypto-js để tạo chữ ký

// Hàm xóa hình ảnh từ Cloudinary
const deleteImageFromCloudinary = async (publicId) => {
  const timestamp = Math.round(new Date().getTime() / 1000);
  const apiKey = import.meta.env.VITE_CLOUDINARY_API_KEY;
  const apiSecret = import.meta.env.VITE_CLOUDINARY_API_SECRET;
  const cloudName = import.meta.env.VITE_CLOUDINARY_NAME;

  // Tạo chữ ký bảo mật (signature)
  const signatureString = `public_id=${publicId}&timestamp=${timestamp}${apiSecret}`;
  const signature = CryptoJS.SHA1(signatureString).toString(CryptoJS.enc.Hex);

  const deleteUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`;

  const formData = new URLSearchParams();
  formData.append("public_id", publicId);
  formData.append("api_key", apiKey);
  formData.append("timestamp", timestamp);
  formData.append("signature", signature);

  try {
    const response = await axios.post(deleteUrl, formData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    if (response.data.result === "ok") {
      console.log("Xóa thành công:", response.data);
    } else {
      console.error("Lỗi khi xóa:", response.data);
    }
  } catch (error) {
    console.error("Lỗi khi xóa:", error);
  }
};

export default deleteImageFromCloudinary;
