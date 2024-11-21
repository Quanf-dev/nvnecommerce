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
    toast.success("Add to cart");
  };

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Delete cart");
  };
  const incrementCart = (id) => {
    dispatch(incrementQuantity(id));
    toast.success("Increased item quantity");
  };
  const decrementCart = (id) => {
    dispatch(decrementQuantity(id));
    toast.success("Decreased item quantity");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return { cartItems, addCart, deleteCart, incrementCart, decrementCart };
};

export default useCart;
