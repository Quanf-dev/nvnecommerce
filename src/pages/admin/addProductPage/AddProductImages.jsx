import { RiExpandDiagonalLine, RiFullscreenLine } from "@remixicon/react";
import React, { useState } from "react";

const AddProductImages = () => {
  const handleFileChange = (index, e) => {
    const file = e.target.files[0]; // Get the selected file

    console.log(e.target.files[0]);
    if (file) {
      const newThumbnails = [...thumbnails]; // Create a copy of the thumbnails
      // Update the src of the thumbnail at the specified index
      newThumbnails[index] = {
        src: URL.createObjectURL(file),
        alt: newThumbnails[index].alt,
      };
      setThumbnails(newThumbnails); // Set the new thumbnails array to state
    }
  };

  const [thumbnails, setThumbnails] = useState([
    { src: "", alt: "Hình 1 " },
    { src: "", alt: "Hình 2" },
    { src: "", alt: "Hình 3" },
    { src: "", alt: "Hình 4" },
  ]);

  return (
    <div className="w-full px-4 mb-8 ">
      <div className="grid grid-cols-2 thumbnails">
        {/* Render the 4 thumbnails */}
        {thumbnails.map((thumbnail, index) => (
          <div key={index} className="mb-4 thumbnail">
            <label
              htmlFor={`uploadFile${index}`}
              className="bg-white text-gray-500 font-semibold text-base rounded *: h-52 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto font-[sans-serif]"
            >
              {/* Display the image preview if available */}
              {thumbnail.src ? (
                <img
                  src={thumbnail.src}
                  alt={thumbnail.alt}
                  className="object-cover w-full h-full rounded"
                />
              ) : (
                <p>Upload Image</p>
              )}
              <input
                type="file"
                id={`uploadFile${index}`}
                className="hidden"
                onChange={(e) => handleFileChange(index, e)}
                accept="image/*"
              />
            </label>
            <p>{thumbnail.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddProductImages;
