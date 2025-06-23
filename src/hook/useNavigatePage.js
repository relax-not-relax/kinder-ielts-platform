import { useNavigate } from "react-router-dom";

const useNavigatePage = () => {
  const navigate = useNavigate();

  const goToPage = (path, options) => {
    const absolutePath = path.startsWith("/") ? path : `/${path}`;
    navigate(absolutePath, options);
  };

  const goBack = () => {
    navigate(-1);
  };

  return { goToPage, goBack };
};

export default useNavigatePage;
