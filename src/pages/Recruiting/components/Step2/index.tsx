import { useFormContext } from "react-hook-form";
import FormHeader from "../FormHeader";
import InputField from "./components/InputField";

const Step2 = () => {
  const { register } = useFormContext();

  return (
    <>
      <FormHeader
        title="기본 정보"
        description="연락 가능한 정보를 입력해주세요."
      />

      <div className="mt-7 flex flex-col gap-5">
        <InputField
          id="name"
          label="성함을 입력해주세요."
          placeholder="김프로"
          type="text"
          register={register("name")}
        />
        <InputField
          id="email"
          label="이메일 주소를 입력해주세요."
          placeholder="prography@gmail.com"
          type="email"
          register={register("email")}
        />
        <InputField
          id="phone"
          label="휴대폰 번호를 입력해주세요."
          placeholder="010-1234-5678"
          type="tel"
          register={register("phone")}
        />
      </div>
    </>
  );
};

export default Step2;
