import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState, useEffect } from "react";
import AddProductImages from "../addProductImages/UploadMultipleImagesComponent";
import UploadMultipleImagesComponent from "../addProductImages/UploadMultipleImagesComponent";

// hàm thêm màu và chuyển tab hình theo màu

const TabsColor = () => {
  const [ProductColor, setProductColor] = useState([]);
  const handleAddColor = (color) => {
    // Kiểm tra xem color đã tồn tại trong mảng ProductColor chưa
    if (!ProductColor.includes(color))
      setProductColor([...ProductColor, color]);
  };

  const checkColorStorage = (color) => {
    return localStorage.getItem(`color_${color.toLowerCase()}`) != null;
  };

  return (
    <Tabs>
      <TabList className="flex space-x-2">
        <Tab
          className={`w-8 h-8 bg-black rounded-full ${
            ProductColor.includes("Black") || checkColorStorage("Black")
              ? "outline outline-primary outline-offset-2"
              : ""
          }`}
          onClick={() => handleAddColor("Black")}
        ></Tab>
        <Tab
          className={`w-8 h-8 bg-gray-300 rounded-full ${
            ProductColor.includes("Gray") || checkColorStorage("Gray")
              ? "outline outline-primary outline-offset-2"
              : ""
          }`}
          onClick={() => handleAddColor("Gray")}
        ></Tab>
        <Tab
          className={`w-8 h-8 bg-pink-300 rounded-full ${
            ProductColor.includes("Pink") || checkColorStorage("Pink")
              ? "outline outline-primary outline-offset-2"
              : ""
          }`}
          onClick={() => handleAddColor("Pink")}
        ></Tab>
        <Tab
          className={`w-8 h-8 bg-white border-2 border-gray-700 rounded-full ${
            ProductColor.includes("White") || checkColorStorage("White")
              ? "outline outline-primary outline-offset-2"
              : ""
          }`}
          onClick={() => handleAddColor("White")}
        ></Tab>
      </TabList>
      <TabPanel className="text-center">
        {/*  Kiểm tra màu đã tồn tại trong mảng hoặc localStorage => show component */}
        {ProductColor.includes("Black") || checkColorStorage("Black") ? (
          <>
            <h3>4 Hình của màu đen</h3>
            <UploadMultipleImagesComponent imageKey={"color_black"} />
          </>
        ) : null}
      </TabPanel>
      <TabPanel className="text-center">
        <h3>4 Hình của màu xám</h3>
        <UploadMultipleImagesComponent imageKey={"color_gray"} />
      </TabPanel>
      <TabPanel className="text-center">
        <h3>4 Hình của màu hồng</h3>
        <UploadMultipleImagesComponent imageKey={"color_pink"} />
      </TabPanel>
      <TabPanel className="text-center">
        <h3>4 Hình của màu trắng</h3>
        <UploadMultipleImagesComponent imageKey={"color_white"} />
      </TabPanel>
    </Tabs>
  );
};

export default TabsColor;
