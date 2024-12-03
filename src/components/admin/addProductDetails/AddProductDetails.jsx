import { Input, Rating } from "@material-tailwind/react";
import TabsColor from "../../../components/admin/tabsColor/TabsColor";
import AddInputProductInformation from "../../../components/admin/addInputProductInformation/AddInputProductInformation";
import AddCategoryOption from "./../../../components/admin/addCategoryOption/AddCategoryOption";
import { convertToSlugHelper } from "./../../../utils/convertToSlugHelper";

const AddProductDetails = ({ Product, setProduct }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };
  return (
    <div className="flex w-full">
      <div className="flex-1">
        {" "}
        <h3 className="mb-2 font-semibold">Sản phầm gồm nhưng màu nào:</h3>
        <TabsColor Product={Product} setProduct={setProduct} />
      </div>
      <div>
        <Input
          type="text"
          name="name"
          value={Product.name}
          label="Tên sản phẩm"
          className="flex items-center text-xl text-gray-500"
          onChange={handleInputChange}
        />
        <div>
          link :{" "}
          <span>nvnecomerce.com/{convertToSlugHelper(Product.name)}</span>
        </div>
        <div className="flex my-4">
          <Input
            type="text"
            name="old_price"
            value={Product.old_price}
            label="Giá cũ"
            onChange={handleInputChange}
          />
          <Input
            type="text"
            name="new_price"
            value={Product.new_price}
            label="Giá mới"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex justify-center">
          <Rating
            value={Product.rating}
            onChange={(value) =>
              setProduct((prevProduct) => ({ ...prevProduct, rating: value }))
            }
          />
        </div>

        <AddCategoryOption Product={Product} setProduct={setProduct} />
        <AddInputProductInformation Product={Product} setProduct={setProduct} />

        <div className="mt-2 border-b-[1px] border-textBackground-light"></div>

        <div className="flex flex-col gap-2 mt-4">
          {" "}
          <Input
            label="Mã sản phẩm"
            className="border-b-[1px] border-textBackground-light text-[0.9rem] font-normal leading-6 text-textDesc"
          />{" "}
          <Input
            label="Danh mục"
            className="border-b-[1px] border-textBackground-light text-[0.9rem] font-normal leading-6 text-textDesc"
          />{" "}
          <Input
            label="Từ khóa"
            className="border-b-[1px] border-textBackground-light text-[0.9rem] font-normal leading-6 text-textDesc"
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default AddProductDetails;
