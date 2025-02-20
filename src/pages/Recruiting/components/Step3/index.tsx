import { useState } from "react";
import FormHeader from "../FormHeader";
import RequiredLabel from "../RequiredLabel";
import LabeledRadioButton from "../LabeledRadioButton";

const Step3 = () => {
  const [selectedField, setSelectedField] = useState("");

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedField(e.target.value);
  };

  const fields = [
    { value: "frontend", label: "프론트엔드" },
    { value: "backend", label: "백엔드" },
    { value: "design", label: "디자인" },
    { value: "ios", label: "iOS" },
    { value: "android", label: "안드로이드" },
    { value: "productOwner", label: "Product Owner" },
  ];

  return (
    <>
      <FormHeader
        title="지원 정보"
        description="지원하고자 하는 분야를 선택해주세요."
      />
      <div className="mt-5 flex flex-col gap-3">
        <RequiredLabel>지원 분야를 선택해주세요.</RequiredLabel>
        <div className="flex flex-col gap-3">
          {fields.map((field) => (
            <LabeledRadioButton
              key={field.value}
              id={`field-${field.value}`}
              name="field"
              value={field.value}
              label={field.label}
              checked={selectedField === field.value}
              onChange={handleFieldChange}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Step3;
