import SearchBar from "../searchBar/SearchBar";
import {
  Badge,
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import {
  RiNotification4Line,
  RiShoppingBagLine,
  RiUserLine,
} from "@remixicon/react";
import { Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import NavItem from "./NavItem";
import MenuSignin from "../menuSignin/MenuSignin";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <nav className="flex flex-col items-center w-full">
      {/* main  */}
      <div className="flex items-center justify-between w-full max-w-[1260px] gap-5 py-3">
        {/* left  */}
        <div className="flex flex-col">
          <Typography className="flex items-center text-[1.675rem] font-semibold text-black uppercase ">
            NOITHAT
            <span className="px-2 py-1 mr-1 font-bold text-white rounded-md bg-primary">
              NVN
            </span>
            .COM
          </Typography>
        </div>

        <SearchBar />

        {/* right   */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-6">
            <Menu allowHover>
              <MenuHandler>
                <div className="flex items-center gap-2 cursor-pointer">
                  <RiUserLine size={23} />
                  <p className="text-sm font-medium text-gray-800 hover:text-gray-800">
                    Đăng nhập
                  </p>
                </div>
              </MenuHandler>
              <MenuList>
                <MenuSignin />
              </MenuList>
            </Menu>
            <div className="flex items-center gap-3">
              <Badge
                content={cartItems.length}
                className="flex items-center justify-center bg-primary min-w-4 min-h-4"
              >
                <RiShoppingBagLine
                  size={23}
                  className="cursor-pointer hover:text-gray-800"
                />
              </Badge>
              <p className="relative text-sm text-gray-700">
                0{" "}
                <span className="underline text-xs relative bottom-[3px] right-[1px]">
                  đ
                </span>
              </p>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-10 pl-6 border-l-2 border-solid">
            <Badge
              content={1}
              className="flex items-center justify-center bg-red-600 min-w-4 min-h-4"
            >
              <RiNotification4Line size={21} />
            </Badge>
          </div>
        </div>
      </div>

      {/* item Navbar  */}
      <NavItem />
    </nav>
  );
};

export default Navbar;
