import { PlusIcon } from "@assets/svgs";

const FloatingButton = () => {
  return (
    <button
      type="button"
      className="relative flex cursor-pointer items-center rounded-4xl bg-white py-4 pr-9 pl-4 text-black"
    >
      <span className="mr-7">지원하기</span>
      <div className="bg-primary absolute top-1/2 left-19 flex -translate-y-1/2 transform items-center justify-center rounded-full p-4 text-white">
        <PlusIcon />
      </div>
    </button>
  );
};

export default FloatingButton;
