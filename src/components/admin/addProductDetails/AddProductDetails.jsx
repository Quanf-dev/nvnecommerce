import { Input, Rating } from "@material-tailwind/react";
import TabsColor from "../../../components/admin/tabsColor/TabsColor";
import AddInputProductInformation from "../../../components/admin/addInputProductInformation/AddInputProductInformation";
import AddCategoryOption from "./../../../components/admin/addCategoryOption/AddCategoryOption";
import { convertToSlugHelper } from "./../../../utils/convertToSlugHelper";
import myContext from "../../../context/myContext";
import { useContext } from "react";

const AddProductDetails = () => {
  const { product, setProduct } = useContext(myContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };
  return (
    <div className="flex w-full">
      <div className="flex-1">
        {" "}
        <h3 className="mb-2 font-semibold">Sản phầm gồm nhưng màu nào:</h3>
        <TabsColor />
      </div>
      <div>
        <Input
          type="text"
          name="name"
          value={product.name}
          label="Tên sản phẩm"
          className="flex items-center text-xl text-gray-500"
          onChange={handleInputChange}
        />
        <div>
          link :{" "}
          <span>nvnecomerce.com/{convertToSlugHelper(product.name)}</span>
        </div>
        <div className="flex my-4">
          <Input
            type="text"
            name="old_price"
            value={product.old_price}
            label="Giá cũ"
            onChange={handleInputChange}
          />
          <Input
            type="text"
            name="new_price"
            value={product.new_price}
            label="Giá mới"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex justify-center">
          <Rating
            value={product.rating}
            onChange={(value) =>
              setProduct((prevProduct) => ({ ...prevProduct, rating: value }))
            }
          />
        </div>

        <AddCategoryOption />
        <AddInputProductInformation />

        <div className="mt-2 border-b-[1px] border-textBackground-light"></div>

        <div className="flex flex-col gap-2 mt-4">
          {" "}
          <Input
            type="text"
            name="product_code"
            value={product.product_code}
            onChange={handleInputChange}
            label="Mã sản phẩm"
            className="border-b-[1px] border-textBackground-light text-[0.9rem] font-normal leading-6 text-textDesc"
          />{" "}
          <Input
            type="text"
            name="keywords"
            value={product.keywords}
            onChange={handleInputChange}
            label="Từ khóa"
            className="border-b-[1px] border-textBackground-light text-[0.9rem] font-normal leading-6 text-textDesc"
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default AddProductDetails;
