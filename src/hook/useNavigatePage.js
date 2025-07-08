import { useNavigate } from "react-router-dom";

const useNavigatePage = () => {
  const navigate = useNavigate();

  const goToPage = (path, options) => {
    navigate(path, options);
  };

  const goBack = () => {
    navigate(-1);
  };

  return { goToPage, goBack };
};

export default useNavigatePage;
