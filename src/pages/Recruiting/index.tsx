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
  const methods = useForm({
    defaultValues: {
      privacyConsent: "",
      field: "",
    },
  });

  const handleNext = () => {
    if (step < steps.length) setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const onSubmit = (data: any) => {
    console.log("폼 제출 완료", data);
    setStep(4);
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
