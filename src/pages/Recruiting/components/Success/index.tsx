import { CheckIcon } from "@assets/svgs";
import { generation } from "@constants/generation";
import routes from "@constants/routes";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(routes.main);
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="bg-primary flex h-15 w-15 items-center justify-center rounded-full">
        <CheckIcon className="h-8 w-8" />
      </div>
      <h2 className="title2">지원이 완료되었습니다!</h2>
      <p className="body1 text-center">
        프로그라피 {generation.tenth}기에 지원해주셔서 감사합니다. <br />
        서류 심사 결과는 입력하신 이메일로 안내드릴 예정입니다.
      </p>
      <button
        type="button"
        className="bg-primary rounded-md p-3"
        onClick={handleClick}
      >
        홈으로 돌아가기
      </button>
    </div>
  );
};

export default Success;
