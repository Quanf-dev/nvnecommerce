import { Input } from "@material-tailwind/react";
import { useContext, useState } from "react";
import myContext from "../../context/myContext";
import { AdvancedImage } from "@cloudinary/react";
import { getCloudinaryImage } from "../../utils/cloudinaryHelper";

const SearchBar = ({ offsetActive }) => {
  const { getAllProduct } = useContext(myContext);
  const [search, setSearch] = useState("");

  const highlightSearchTerm = (name) => {
    if (!search) return name;
    const parts = name.split(new RegExp(`(${search})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === search.toLowerCase() ? (
        <strong key={index}>{part}</strong>
      ) : (
        part
      )
    );
  };

  const filterSearchData = getAllProduct
    .filter((obj) => obj.name.toLowerCase().includes(search.toLowerCase()))
    .slice(0, 8);

  return (
    <>
      {/* search input  */}
      <div className="relative flex gap-2 text-black">
        <Input
          type="search"
          color="gray"
          label={offsetActive ? "" : "Tìm kiếm sản phẩm"}
          placeholder={offsetActive ? "Tìm kiếm sản phẩm" : ""}
          labelProps={{
            className: offsetActive
              ? "before:content-none after:content-none"
              : "",
          }}
          onChange={(e) => setSearch(e.target.value)}
          className={`max-h-9 ${
            offsetActive ? "border-none bg-white rounded-xl focus:border-0" : ""
          }`}
        />
      </div>

      {/* search drop-down  */}
      <div className="flex justify-center">
        {search && (
          <div className="absolute z-50 block px-2 py-2 my-1 bg-[#FFFFFFF2] rounded-lg w-96 md:w-96 lg:w-96 ">
            {filterSearchData.length > 0 ? (
              <>
                {filterSearchData.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between gap-4 px-2 py-3 text-sm border-b cursor-pointer border-b-gray-100 hover:bg-gray-100"
                    >
                      <div className="flex items-center">
                        <AdvancedImage
                          className="w-10 mr-2"
                          cldImg={getCloudinaryImage(
                            item.images?.images_desc[0]
                          )}
                          alt=""
                        />
                        <div>{highlightSearchTerm(item.name)}</div>
                      </div>
                      <div className="text-primary">{item.new_price}</div>
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                <div className="flex justify-center">
                  <img
                    className="w-20"
                    src="https://cdn-icons-png.flaticon.com/128/10437/10437090.png"
                    alt="img"
                  />
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBar;
