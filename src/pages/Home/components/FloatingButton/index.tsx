import { PlusIcon } from "@assets/svgs";
import routes from "@constants/routes";
import { useNavigate } from "react-router-dom";

const FloatingButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(routes.recruiting);
  };

  return (
    <button
      type="button"
      className="fixed right-5 bottom-6 flex items-center rounded-4xl bg-white py-4 pr-9 pl-4 text-black"
      onClick={handleClick}
    >
      <span className="mr-7">지원하기</span>
      <div className="bg-primary absolute top-1/2 left-19 flex -translate-y-1/2 transform items-center justify-center rounded-full p-4 text-white">
        <PlusIcon />
      </div>
    </button>
  );
};

export default FloatingButton;
