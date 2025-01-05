import React from "react";
import {
  List,
  Card,
  Alert,
  Avatar,
  ListItem,
  Accordion,
  Typography,
  AccordionBody,
  ListItemPrefix,
  AccordionHeader,
} from "@material-tailwind/react";
import {
  RiTicket2Fill,
  RiUser3Fill,
  RiStackFill,
  RiLayoutMasonryFill,
  RiChat3Fill,
  RiLogoutBoxRLine,
} from "@remixicon/react";
import { ChevronDownIcon } from "lucide-react";
import logo from "@assets/logo/logoFurniture.png";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const LIST_ITEM_STYLES =
    "select-none hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-100 hover:text-gray-900 focus:text-gray-900 active:text-gray-900 data-[selected=true]:text-gray-900";

  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-6 shadow-md fixed z-10 left-0 overflow-hidden ">
      <div className="flex items-center gap-4 p-4 mb-2 ">
        <img src={logo} alt="thương hiệu" className="w-16 h-14" />
        <Typography color="blue-gray" className="text-lg font-bold">
          NVN Admin
        </Typography>
      </div>
      <hr className="my-2 border-gray-200" />
      <List>
        <ListItem
          selected={open === 1}
          data-selected={open === 1}
          onClick={() => handleOpen(1)}
          className={`p-3 ${LIST_ITEM_STYLES}`}
        >
          <ListItemPrefix>
            <Avatar
              size="sm"
              src="https://www.material-tailwind.com/img/avatar2.jpg"
            />
          </ListItemPrefix>
          <Typography className="mr-auto font-normal text-inherit">
            Nguyễn Văn Nhân
          </Typography>
        </ListItem>
        <hr className="my-2 border-gray-200" />
        <Accordion open={open === 2}>
          <ListItem
            selected={open === 2}
            data-selected={open === 2}
            onClick={() => handleOpen(2)}
            className={`px-3 py-[9px] ${LIST_ITEM_STYLES}`}
          >
            <ListItemPrefix>
              <RiLayoutMasonryFill className="w-5 h-5" />
            </ListItemPrefix>
            <Typography className="mr-auto font-normal text-inherit">
              Bảng điều khiển
            </Typography>
            <ChevronDownIcon
              strokeWidth={3}
              className={`ml-auto h-4 w-4 text-gray-500 transition-transform ${
                open === 2 ? "rotate-180" : ""
              }`}
            />
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem className={`px-12 ${LIST_ITEM_STYLES}`}>
                Phân tích
              </ListItem>
              <ListItem className={`px-12 ${LIST_ITEM_STYLES}`}>
                Doanh số
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <ListItem
          className={LIST_ITEM_STYLES}
          onClick={() => navigate("/admin-dashboard/manage-products")}
        >
          <ListItemPrefix>
            <RiStackFill className="w-5 h-5" />
          </ListItemPrefix>
          Sản phẩm
        </ListItem>
        <ListItem
          className={LIST_ITEM_STYLES}
          onClick={() => navigate("/admin-dashboard/manage-orders")}
        >
          <ListItemPrefix>
            <RiTicket2Fill className="w-5 h-5" />
          </ListItemPrefix>
          Đơn hàng
        </ListItem>
        <ListItem
          className={LIST_ITEM_STYLES}
          onClick={() => navigate("/admin-dashboard/manage-users")}
        >
          <ListItemPrefix>
            <RiUser3Fill className="w-5 h-5" />
          </ListItemPrefix>
          Khách hàng
        </ListItem>
      </List>
      <hr className="my-2 border-gray-200" />
      <List>
        <ListItem className={LIST_ITEM_STYLES}>
          <ListItemPrefix>
            <RiChat3Fill className="w-5 h-5" />
          </ListItemPrefix>
          Trợ giúp & Hỗ trợ
        </ListItem>
        <ListItem className={LIST_ITEM_STYLES}>
          <ListItemPrefix>
            <RiLogoutBoxRLine className="w-5 h-5" />
          </ListItemPrefix>
          Đăng xuất
        </ListItem>
      </List>
    </Card>
  );
}

export default Sidebar;
