import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import {
  addToCart,
  decrementQuantity,
  deleteFromCart,
  incrementQuantity,
} from "../redux/cartSlice";

const useCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const addCart = (item) => {
    dispatch(addToCart(item));
    toast.success("Thêm vào giỏ hàng thành công");
  };

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Xóa khỏi giỏ hàng thành công");
  };
  const incrementCart = (id) => {
    dispatch(incrementQuantity(id));
  };
  const decrementCart = (id) => {
    dispatch(decrementQuantity(id));
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return { cartItems, addCart, deleteCart, incrementCart, decrementCart };
};

export default useCart;
