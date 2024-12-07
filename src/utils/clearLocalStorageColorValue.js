const clearLocalStorageColorValue = () => {
  [
    "color_black",
    "color_gray",
    "color_pink",
    "color_white",
    "undefined",
    "images_desc",
  ].forEach((key) => {
    localStorage.removeItem(key);
  });
};

export default clearLocalStorageColorValue;
