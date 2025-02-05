import { useNavigate } from "react-router-dom";

const useAuthNavigate = () => {
  const navigate = useNavigate();

  const goToMyAccount = (action) => {
    navigate(`/my-account?action=${action}`);
  };

  return { goToMyAccount };
};

export default useAuthNavigate;
