import { useFormContext } from "react-hook-form";
import FormHeader from "../FormHeader";
import InputField from "./components/InputField";

const Step2 = () => {
  const {
    register,
    setError,
    clearErrors,
    formState: { errors },
  } = useFormContext();

  const validateEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      alert("유효한 이메일 주소를 입력해주세요.");
      return false;
    }
    return true;
  };

  return (
    <>
      <FormHeader
        title="기본 정보"
        description="연락 가능한 정보를 입력해주세요."
      />

      <div className="mt-7 flex flex-col gap-8">
        <InputField
          id="name"
          label="성함을 입력해주세요."
          placeholder="김프로"
          type="text"
          register={register("name")}
        />

        <div>
          <InputField
            id="email"
            label="이메일 주소를 입력해주세요."
            placeholder="prography@gmail.com"
            type="email"
            register={register("email", {
              onBlur: (e) => {
                const email = e.target.value;
                if (!validateEmail(email)) {
                  setError("email", {
                    type: "manual",
                    message: "유효한 이메일 주소를 입력해주세요.",
                  });
                } else {
                  clearErrors("email");
                }
              },
            })}
          />

          {errors.email && typeof errors.email.message === "string" && (
            <p className="caption1 absolute mt-1 text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

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
