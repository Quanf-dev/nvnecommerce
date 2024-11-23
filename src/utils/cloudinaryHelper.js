import Cloudinary from "../cloudinary/CloudinaryConfig";
import { Resize } from "@cloudinary/url-gen/actions/resize";

export const getCloudinaryImage = (publicId, width = 300) => {
  return Cloudinary.image(publicId).resize(Resize.scale().width(width));
};
