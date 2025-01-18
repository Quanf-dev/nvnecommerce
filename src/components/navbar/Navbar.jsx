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
  RiMenuLine,
  RiNotification4Line,
  RiShoppingBagLine,
  RiUserLine,
} from "@remixicon/react";
import { Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import NavItem from "./NavItem";
import MenuSignin from "../menuSignin/MenuSignin";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import myContext from "../../context/myContext";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const { setOpenMobileMenu } = useContext(myContext);

  return (
    <nav className="flex flex-col items-center w-full ">
      {/* main  */}
      <div className="flex items-center justify-between w-full max-w-[1260px] gap-5 py-6 px-3">
        <RiMenuLine
          size={23}
          onClick={() => setOpenMobileMenu(true)}
          className="cursor-pointer lg:hidden"
        />

        <div className="flex flex-col" onClick={() => navigate("/")}>
          <Typography className="flex items-center text-xl lg:text-[1.675rem]  font-semibold text-black uppercase cursor-pointer ">
            NOITHAT
            <span className="px-2 py-1 mx-1 font-bold text-white rounded-md bg-primary">
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
                <div className="items-center hidden gap-2 cursor-pointer lg:flex">
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
                  onClick={() => navigate("/cart")}
                />
              </Badge>
              <p className="hidden text-sm text-gray-700 lg:block">
                0{" "}
                <span className="underline text-xs relative bottom-[3px] right-[1px]">
                  đ
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* item Navbar  */}
      <NavItem />
    </nav>
  );
};

export default Navbar;
