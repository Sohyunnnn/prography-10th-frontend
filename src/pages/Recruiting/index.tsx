import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Success from "./components/Success";
import StepButton from "./components/StepButton";
import { generation } from "@constants/generation";

const steps = [1, 2, 3];

const Recruiting = () => {
  const [step, setStep] = useState(1);
  const methods = useForm();
  const privacyConsent = methods.watch("privacyConsent");
  const { watch } = methods;
  const isStep2Valid = watch("name") && watch("email") && watch("phone");
  const isStep3Valid = !!watch("field");

  const handleNext = () => {
    if (step === 1 && privacyConsent !== "yes") {
      alert("개인정보 수집 및 이용 동의에 체크해주세요.");
      return;
    }

    if (step === 2 && !isStep2Valid) {
      alert("이름, 이메일, 휴대폰 번호를 모두 입력해주세요.");
      return;
    }

    setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const onSubmit = (data: any) => {
    if (isStep3Valid) {
      // Todo : 폼 제출 api 연결

      setStep(4);
    } else {
      alert("지원 분야를 선택해주세요.");
      return;
    }
  };

  return (
    <main className="flex items-center">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="bg-gray-10 flex h-173 w-150 flex-col justify-between rounded-lg px-10 pt-6 pb-10"
        >
          <p className="title2-1 p-3 text-center">
            Prography {generation.tenth}기 지원서
          </p>
          <div className="h-full">
            <div className="flex items-center justify-center gap-2">
              {steps.map((currentStep) => (
                <React.Fragment key={currentStep}>
                  <div
                    className={`flex h-6 w-6 items-center justify-center rounded-full ${
                      step >= currentStep ? "bg-primary" : "bg-gray-500"
                    }`}
                  >
                    {currentStep}
                  </div>
                  {currentStep < steps.length && (
                    <div
                      className={`h-1 w-50 ${
                        step >= currentStep + 1 ? "bg-primary" : "bg-gray-500"
                      }`}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>

            {step === 1 && <Step1 />}
            {step === 2 && <Step2 />}
            {step === 3 && <Step3 />}
            {step === 4 && <Success />}
          </div>

          {step !== 4 && (
            <div className="mt-0 flex justify-between">
              <StepButton
                onClick={handlePrev}
                disabled={step === 1}
                text="이전"
                className={
                  step === 1
                    ? "bg-gray-300 text-gray-500"
                    : "bg-gray-500 text-white"
                }
              />
              <StepButton
                onClick={
                  step === steps.length
                    ? methods.handleSubmit(onSubmit)
                    : handleNext
                }
                text={step === steps.length ? "완료" : "다음"}
                className="bg-primary"
              />
            </div>
          )}
        </form>
      </FormProvider>
    </main>
  );
};

export default Recruiting;
