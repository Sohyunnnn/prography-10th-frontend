import { useState } from "react";
import FormHeader from "../FormHeader";
import InputField from "./components/InputField";

const Step2 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <FormHeader
        title="기본 정보"
        description="연락 가능한 정보를 입력해주세요."
      />

      <div className="mt-7 flex flex-col gap-5">
        <InputField
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          label="성함을 입력해주세요."
          placeholder="김프로"
          type="text"
        />
        <InputField
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          label="이메일 주소를 입력해주세요."
          placeholder="prography@gmail.com"
          type="email"
        />
        <InputField
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          label="휴대폰 번호를 입력해주세요."
          placeholder="010-1234-5678"
          type="tel"
        />
      </div>
    </>
  );
};

export default Step2;
