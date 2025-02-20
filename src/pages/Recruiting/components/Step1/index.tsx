import { useState } from "react";
import FormHeader from "../FormHeader";
import LabeledRadioButton from "../LabeledRadioButton";
import RequiredLabel from "../RequiredLabel";

const Step1 = () => {
  const [privacyConsent, setPrivacyConsent] = useState<string>("");

  const handlePrivacyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrivacyConsent(e.target.value);
  };

  const privacyInfo = [
    {
      title: "수집 목적",
      description: "Prography 10기 리쿠르팅 과정 및 결과 안내",
    },
    {
      title: "수집 항목",
      description: "이름, 이메일, 핸드폰번호, 학교 정보 및 직장 정보",
    },
    {
      title: "보유 및 이용 기간",
      description: "리쿠르팅 과정 종료일(3월 7일) 이후 파기",
    },
  ];

  return (
    <>
      <FormHeader
        title="개인정보 수집동의"
        description="프로그라피 10기 지원을 위한 개인정보 수집에 대한 동의가 필요합니다."
      />
      <ul className="caption2 mt-2 mb-7 list-disc pl-5">
        {privacyInfo.map((item, index) => (
          <li key={index}>
            {item.title}: {item.description}
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-4">
        <RequiredLabel>개인정보 수집 동의 여부를 체크해주세요.</RequiredLabel>
        <LabeledRadioButton
          id="privacyConsent-yes"
          name="privacyConsent"
          value="yes"
          label="개인정보 수집 여부에 동의합니다."
          checked={privacyConsent === "yes"}
          onChange={handlePrivacyChange}
        />

        <LabeledRadioButton
          id="privacyConsent-no"
          name="privacyConsent"
          value="no"
          label="개인정보 수집에 동의하지 않습니다."
          checked={privacyConsent === "no"}
          onChange={handlePrivacyChange}
        />
      </div>
    </>
  );
};

export default Step1;
