import React, { useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Success from "./components/Success";

const steps = [1, 2, 3];

const Recruiting = () => {
  const [step, setStep] = useState(1);

  return (
    <main className="flex items-center">
      <div className="bg-gray-10 h-170 w-150 rounded-lg p-6">
        <p className="title3 p-4 text-center">Prography 10기 지원서</p>
        <div className="flex items-center justify-center gap-2">
          {steps.map((currentStep) => (
            <React.Fragment key={currentStep}>
              <div
                className={`flex h-7 w-7 items-center justify-center rounded-full ${
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
    </main>
  );
};

export default Recruiting;
