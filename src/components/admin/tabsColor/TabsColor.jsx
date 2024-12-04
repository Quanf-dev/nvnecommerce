import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState } from "react";
import AddProductImages from "../addProductImages/AddProductImages";
import UploadMultipleImagesComponent from "../addProductImages/AddProductImages";

// hàm thêm màu và chuyển tab hình theo màu

const TabsColor = () => {
  const [ProductColor, setProductColor] = useState([]);
  [];
  const handleAddColor = (color) => {
    // Kiểm tra xem color đã tồn tại trong mảng ProductColor chưa
    if (!ProductColor.includes(color))
      setProductColor([...ProductColor, color]);
  };
  return (
    <Tabs>
      {" "}
      <TabList className="flex space-x-2">
        {" "}
        <Tab
          className={`w-8 h-8 bg-black rounded-full ${
            ProductColor.includes("Black")
              ? "outline outline-primary outline-offset-2"
              : ""
          }`}
          onClick={() => handleAddColor("Black")}
        ></Tab>{" "}
        <Tab
          className={`w-8 h-8 bg-gray-300 rounded-full ${
            ProductColor.includes("Gray")
              ? "outline outline-primary outline-offset-2"
              : ""
          }`}
          onClick={() => handleAddColor("Gray")}
        ></Tab>{" "}
        <Tab
          className={`w-8 h-8 bg-pink-300 rounded-full ${
            ProductColor.includes("Pink")
              ? "outline outline-primary outline-offset-2"
              : ""
          }`}
          onClick={() => handleAddColor("Pink")}
        ></Tab>{" "}
        <Tab
          className={`w-8 h-8 bg-white border-2 border-gray-700 rounded-full ${
            ProductColor.includes("White")
              ? "outline outline-primary outline-offset-2"
              : ""
          }`}
          onClick={() => handleAddColor("White")}
        ></Tab>{" "}
      </TabList>{" "}
      <TabPanel className="text-center">
        {/*  Kcolor đã tồn tại trong mảng => show component */}
        {ProductColor.includes("Black") && (
          <>
            <h3>4 Hình của màu đen</h3>{" "}
            <UploadMultipleImagesComponent color={"color_black"} />
          </>
        )}
      </TabPanel>{" "}
      <TabPanel className="text-center">
        {" "}
        <h3>4 Hình của màu xám</h3>{" "}
        {ProductColor.includes("Gray") && (
          <UploadMultipleImagesComponent color={"color_gray"} />
        )}
      </TabPanel>{" "}
      <TabPanel className="text-center">
        {" "}
        <h3>4 Hình của màu hồng</h3>{" "}
        {ProductColor.includes("Pink") && (
          <UploadMultipleImagesComponent color={"color_pink"} />
        )}
      </TabPanel>{" "}
      <TabPanel className="text-center">
        {" "}
        <h3>4 Hình của màu trắng</h3>{" "}
        {ProductColor.includes("White") && (
          <UploadMultipleImagesComponent color={"color_white"} />
        )}
      </TabPanel>
    </Tabs>
  );
};

export default TabsColor;
