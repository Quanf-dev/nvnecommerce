import React, { useState } from "react";
import { Collapse, Typography } from "@material-tailwind/react";
import { RiArrowDownSLine, RiArrowRightSLine } from "@remixicon/react";
import ProductDetailCollapse from "../../components/productDetailCollapse/ProductDetailCollapse";

const ProductDesc = () => {
  const [open, setOpen] = useState("");

  return (
    <div className="w-full px-3 mt-10">
      <div className="py-6 border-t-2 border-[#0000001B]">
        <CollapseDescribe open={open} setOpen={setOpen} />
      </div>
      <div className="py-6 border-y-2 border-textBackground-light">
        <CollapseQRCODE open={open} setOpen={setOpen} />
      </div>
      <div className="py-6 border-b-2 border-textBackground-light">
        <CollapseDelivery open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

const CollapseDescribe = ({ open, setOpen }) => {
  const toggleOpen = () =>
    setOpen(open === "CollapseDescribe" ? "" : "CollapseDescribe");

  return (
    <>
      <p
        className={`${
          open === "CollapseDescribe" ? "text-primary" : ""
        } transform duration-200 ease-linear hover:text-primary flex justify-between font-bold uppercase cursor-pointer `}
        onClick={toggleOpen}
      >
        Mô tả
        <span>
          <RiArrowDownSLine
            className={`${open === "CollapseDescribe" ? "rotate-180" : ""} `}
          />
        </span>
      </p>
      <Collapse open={open === "CollapseDescribe" ? true : false}>
        <ProductDetailCollapse />
      </Collapse>
    </>
  );
};
const CollapseQRCODE = ({ open, setOpen }) => {
  const toggleOpen = () =>
    setOpen(open === "CollapseQRCODE" ? "" : "CollapseQRCODE");

  return (
    <>
      <p
        className={`${
          open === "CollapseQRCODE" ? "text-primary" : ""
        } transform duration-200 ease-linear hover:text-primary flex justify-between font-bold uppercase cursor-pointer `}
        onClick={toggleOpen}
      >
        QR Code
        <span>
          <RiArrowDownSLine
            className={`${open === "CollapseQRCODE" ? "rotate-180" : ""} `}
          />
        </span>
      </p>
      <Collapse open={open === "CollapseQRCODE" ? true : false}>
        <Typography>
          Use our Tailwind CSS collapse for your website. You can use if for
          accordion, collapsible items and much more.
        </Typography>
      </Collapse>
    </>
  );
};
const CollapseDelivery = ({ open, setOpen }) => {
  const toggleOpen = () =>
    setOpen(open === "CollapseDelivery" ? "" : "CollapseDelivery");

  return (
    <>
      <p
        className={`${
          open === "CollapseDelivery" ? "text-primary" : ""
        } transform duration-200 ease-linear hover:text-primary flex justify-between font-bold uppercase cursor-pointer `}
        onClick={toggleOpen}
      >
        Giao hàng
        <span>
          <RiArrowDownSLine
            className={`${open === "CollapseDelivery" ? "rotate-180" : ""} `}
          />
        </span>
      </p>
      <Collapse
        open={open === "CollapseDelivery" ? true : false}
        className="flex gap-4 "
      >
        <div className="flex-1">
          <Typography variant="h4">GIAO HÀNG MIỄN PHÍ</Typography>
          <Typography className="mt-4 text-textDesc text-[0.95rem]">
            FlexHouse hỗ trợ giao hàng miễn phí cho các đơn hàng ở khu vực
            Tp.HCM với giá trị đơn hàng trên 1 triệu VND. Đối với khu vực Quận
            2, Quận 9 và Thủ Đức giao miễn phí hoàn toàn. Các đơn hàng ngoại
            tỉnh, hỗ trợ giao hàng ra bến xe gần nhất. Chi tiết liên hệ hotline
            hỗ trợ: 0937 91 22 55 Đối với đơn hàng đặt trước 3 giờ chiều sẽ được
            giao hàng vận chuyển đi trong ngày.
            <br />
            <br /> Đối với đơn hàng đặt sau 3h chiều, sẽ được vận chuyển đến
            khách hàng ngay ngày hôm sau.
          </Typography>
        </div>
        <div className="flex-1">
          <Typography variant="h4">GIAO HÀNG MIỄN PHÍ</Typography>
          <ul className="mt-4 text-textDesc text-[0.95rem] flex flex-col gap-2">
            <Typography className="flex">
              <span>
                <RiArrowRightSLine />
              </span>{" "}
              Người mua xác nhận đơn hàng và thông tin thời gian và địa điểm
              giao hàng với Flex House
            </Typography>
            <Typography className="flex">
              <span>
                <RiArrowRightSLine />
              </span>{" "}
              Nhận viên dịch vụ khách hàng xác nhận thông tin và thời gian địa
              điểm giao hàng
            </Typography>
            <Typography className="flex">
              <span>
                <RiArrowRightSLine />
              </span>{" "}
              Nhân viên giao hàng bàn giao hàng hoá theo số lượng, chủng loại
              theo đơn hànghàng. Khách hàng ký xác nhận đã nhận đúng đơn hàng
            </Typography>
          </ul>
        </div>{" "}
      </Collapse>
    </>
  );
};

export default ProductDesc;
