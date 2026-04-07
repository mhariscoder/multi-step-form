"use client";
import { useEffect, useState } from "react";
import { useFormStore } from "@/store/useFormStore";
import { FormStepper } from "@/components/FormStepper";
import StepOne from "@/components/StepOne";
import StepTwo from "@/components/StepTwo";
import StepThree from "@/components/StepThree";
import StepFour from "@/components/StepFour";
import StepFive from "@/components/StepFive";
import StepSix from "@/components/StepSix";
import StepSeven from "@/components/StepSeven";
import StepEight from "@/components/StepEight";
import StepNine from "@/components/StepNine";
import StepTen from "@/components/StepTen";
import Header from "@/components/header";
export default function MultiStepForm() {
  const step = useFormStore((state) => state.step);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const renderStep = () => {
    switch (step) {
      case 1: return <StepOne />;
      case 2: return <StepTwo />;
      case 3: return <StepThree />;
      case 4: return <StepFour />;
      case 5: return <StepFive />;
      case 6: return <StepSix />;
      case 7: return <StepSeven />;
      case 8: return <StepEight />;
      case 9: return <StepNine />;
      case 10: return <StepTen />;
      default: return <StepOne />;
    }
  };

  return (
    // Changed bg to #FBF9F6 to match the "Let's Start with Your Room" background
  <>
    <Header/>
    <main className="min-h-screen bg-[#FBF9F6] py-12 ">
      {/* Removed max-width constraint for true full-width layout */}
      <div className="w-full flex flex-col max-w-[1520px]   mx-auto">
        
        {/* Stepper container - uses horizontal track logic */}
        <div className="mb-16 md:mb-24 w-full ">
          <FormStepper currentStep={step} />
        </div>

        {/* Content Area */}
        <div className="transition-all duration-500 w-full  bg-[#F3EEE7]  p-15">
          {renderStep()}
          <p className="text-center mt-5 text-[16px] text-[#727272] text-font ">
        Your info is secure | No spam | We never share your details
      </p>
        </div>
      </div>

      {/* Optional: Add the secure info footer globally if not in sub-components */}
      {/* <footer className="mt-12 text-center text-[11px] text-[#A0A0A0] font-sans tracking-wide uppercase">
        Your info is secure · No spam · We never share your details
      </footer> */}
    </main>
  </>
  );
}