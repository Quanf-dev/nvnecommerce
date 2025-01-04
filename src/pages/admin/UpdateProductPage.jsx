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

const UpdateProductPage = () => {
  const { product, setProduct } = useContext(myContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const getSingleProductFunction = getSingleProductService();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    getSingleProductFunction(setProduct, id);
  }, [id]);

  const onBackButtonEvent = (e) => {
    e.preventDefault();
    setIsDialogOpen(true);
  };

  useEffect(() => {
    window.history.pushState(null, null, window.location.pathname);
    window.addEventListener("popstate", onBackButtonEvent);
    return () => {
      window.removeEventListener("popstate", onBackButtonEvent);
    };
  }, []);

  const handleConfirmLeave = () => {
    setIsDialogOpen(false);
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
        onClick={() => addProductFunction(product)}
      >
        Cập nhật sản phẩm
      </Button>
      <Dialog open={isDialogOpen} handler={() => setIsDialogOpen(false)}>
        <DialogHeader>Cảnh báo</DialogHeader>
        <DialogBody>Bạn có chắc chắn muốn rời khỏi trang này không?</DialogBody>
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
