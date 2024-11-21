import { Input } from "@material-tailwind/react";
import { useContext, useState } from "react";
import myContext from "../../context/myContext";

const SearchBar = () => {
  const { getAllProduct } = useContext(myContext);
  const [search, setSearch] = useState("");
  const filterSearchData = getAllProduct
    .filter((obj) => obj.title.toLowerCase().includes(search))
    .slice(0, 8);

  return (
    <>
      {/* search input  */}
      <div className="relative flex gap-2 text-black l ">
        <Input
          type="search"
          color="gray"
          label="Tìm kiếm sản phẩm"
          onChange={(e) => setSearch(e.target.value)}
          containerProps={{}}
        />
      </div>

      {/* search drop-down  */}
      <div className="flex justify-center">
        {search && (
          <div className="absolute z-50 block px-2 py-2 my-1 bg-gray-200 rounded-lg w-96 md:w-96 lg:w-96">
            {filterSearchData.length > 0 ? (
              <>
                {filterSearchData.map((item, index) => {
                  return (
                    <div key={index} className="px-2 py-2">
                      <div className="flex items-center gap-2">
                        <img
                          className="w-10"
                          src={item.productImageUrl}
                          alt=""
                        />
                        {item.title}
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                <div className="flex justify-center">
                  <img
                    className="w-20 "
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
