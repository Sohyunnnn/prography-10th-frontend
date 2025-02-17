import { Logo } from "@assets/index";

const Header = () => {
  return (
    <header className="my-4 flex justify-between bg-black px-5">
      <img src={Logo} className="h-12 w-[138px]" />
      <button type="button" className="bg-primary rounded-4xl px-6 py-3">
        11기 모집 알림 신청
      </button>
    </header>
  );
};

export default Header;
