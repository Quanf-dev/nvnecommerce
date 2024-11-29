/* eslint-disable react/prop-types */
import { Button, Dialog, DialogBody } from "@material-tailwind/react";
import { useState } from "react";
import { Timestamp } from "firebase/firestore";
import addProductOrderService from "../../../services/addProductOrderService";

const BuyNowModalDialog = () => {
  const [open, setOpen] = useState(false);
  const addProductOrderFunction = addProductOrderService();
  const [addressInfo, setAddressInfo] = useState({
    name: "",
    address: "",
    pincode: "",
    mobileNumber: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  const handleOpen = async () => {
    await addProductOrderFunction(addressInfo, setAddressInfo);
    setOpen(!open);
  };
  return (
    <>
      <Button
        type="button"
        onClick={() => setOpen(true)}
        className="w-full px-4 py-3 text-center text-gray-100 bg-pink-600 border border-transparent dark:border-gray-700 hover:border-pink-500 hover:text-pink-700 hover:bg-pink-100 rounded-xl"
      >
        Buy Now
      </Button>
      <Dialog open={open} handler={handleOpen} className=" bg-pink-50">
        <DialogBody className="">
          <div className="mb-3">
            <input
              type="text"
              name="name"
              value={addressInfo.name}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  name: e.target.value,
                });
              }}
              placeholder="Enter your name"
              className="w-full px-2 py-2 text-pink-600 placeholder-pink-300 border border-pink-200 rounded-md outline-none bg-pink-50"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="address"
              value={addressInfo.address}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  address: e.target.value,
                });
              }}
              placeholder="Enter your address"
              className="w-full px-2 py-2 text-pink-600 placeholder-pink-300 border border-pink-200 rounded-md outline-none bg-pink-50"
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              name="pincode"
              value={addressInfo.pincode}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  pincode: e.target.value,
                });
              }}
              placeholder="Enter your pincode"
              className="w-full px-2 py-2 text-pink-600 placeholder-pink-300 border border-pink-200 rounded-md outline-none bg-pink-50"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="mobileNumber"
              value={addressInfo.mobileNumber}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  mobileNumber: e.target.value,
                });
              }}
              placeholder="Enter your mobileNumber"
              className="w-full px-2 py-2 text-pink-600 placeholder-pink-300 border border-pink-200 rounded-md outline-none bg-pink-50"
            />
          </div>
          <div className="">
            <Button
              type="button"
              onClick={() => {
                handleOpen();
              }}
              className="w-full px-4 py-3 text-center text-gray-100 bg-pink-600 border border-transparent rounded-lg dark:border-gray-700"
            >
              Order Now
            </Button>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
};

export default BuyNowModalDialog;
