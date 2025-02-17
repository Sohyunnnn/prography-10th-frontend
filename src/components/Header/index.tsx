import { Logo } from "@assets/index";
import routes from "@constants/routes";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(routes.main);
  };
  return (
    <header className="my-4 flex justify-between bg-black px-5">
      <img
        src={Logo}
        className="h-12 w-[138px] cursor-pointer"
        onClick={handleClick}
      />
      <button
        type="button"
        className="bg-primary cursor-pointer rounded-4xl px-6 py-3"
        onClick={() => window.open(import.meta.env.VITE_RECRUTUING_FORM)}
      >
        11기 모집 알림 신청
      </button>
    </header>
  );
};

export default Header;
