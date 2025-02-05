import { useNavigate } from "react-router-dom";

const useBuyNowNavigate = () => {
  const navigate = useNavigate();

  const goToCheckout = (action) => {
    navigate(`/checkout?action=${action}`);
  };

  return { goToCheckout };
};

export default useBuyNowNavigate;
