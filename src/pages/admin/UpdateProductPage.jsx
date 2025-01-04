import React, { useContext, useEffect, useState } from "react";
import AddProductDetails from "../../components/admin/addProductDetails/AddProductDetails";
import AddProductDesc from "../../components/admin/addProductDesc/AddProductDesc";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import LayoutHome from "../../layout/LayoutHome";
import myContext from "../../context/myContext";
import { useParams, useNavigate } from "react-router-dom";
import getSingleProductService from "../../services/getSingleProductService";
import clearLocalStorageColorValue from "../../utils/clearLocalStorageColorValue";
import updateProductService from "../../services/updateProductService";

const UpdateProductPage = () => {
  const { product, setProduct } = useContext(myContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const getSingleProductFunction = getSingleProductService();
  const updateProductFunction = updateProductService();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    getSingleProductFunction(setProduct, id);
  }, [id]);

  const onBackButtonEvent = (e) => {
    e.preventDefault();
    setIsDialogOpen(true);
  };

  useEffect(() => {
    // Thêm sự kiện popstate
    window.history.pushState(null, null, window.location.pathname);
    window.addEventListener("popstate", onBackButtonEvent);

    // Thêm sự kiện beforeunload
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      return false;
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("popstate", onBackButtonEvent);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const handleConfirmLeave = () => {
    setIsDialogOpen(false);
    clearLocalStorageColorValue();
    navigate("/admin-dashboard"); // Điều hướng về trang trước đó
  };

  const handleCancelLeave = () => {
    setIsDialogOpen(false);
    window.history.pushState(null, null, window.location.pathname);
  };

  return (
    <LayoutHome>
      <AddProductDetails />
      <AddProductDesc />
      <Button
        className="w-full bg-primary hover:shadow-primary"
        onClick={() => updateProductFunction(product, id)}
      >
        Cập nhật sản phẩm
      </Button>
      <Dialog open={isDialogOpen} handler={() => setIsDialogOpen(false)}>
        <DialogHeader>Cảnh báo</DialogHeader>
        <DialogBody>
          Bạn có chắc chắn muốn rời khỏi trang này không mà không cập nhật dữ
          liệu cho sản phẩm không?
        </DialogBody>
        <DialogFooter>
          <Button variant="text" color="red" onClick={handleCancelLeave}>
            Hủy
          </Button>
          <Button variant="gradient" color="green" onClick={handleConfirmLeave}>
            Rời khỏi
          </Button>
        </DialogFooter>
      </Dialog>
    </LayoutHome>
  );
};

export default UpdateProductPage;
