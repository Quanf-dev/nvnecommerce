const clearLocalStorageColorValue = () => {
  [
    "color_black",
    "color_gray",
    "color_pink",
    "color_white",
    "undefined",
  ].forEach((key) => {
    localStorage.removeItem(key);
  });
};

export default clearLocalStorageColorValue;
