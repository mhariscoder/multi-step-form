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
// import StepTen from "@/components/StepTen";

export default function MultiStepForm() {
  const step = useFormStore((state) => state.step);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  // This function decides which component to render
  const renderStep = () => {
    switch (step) {
      case 1: return <StepOne />;
      case 2: return <StepTwo />;
      // For now, these are placeholders until you build 3-9
      case 3: return <StepThree />;
      case 4: return <StepFour />; 
      case 5: return <StepFive />;  
      case 6: return <StepSix />;  
      case 7: return <StepSeven />;  
      case 8: return <StepEight />;  
      case 9: return <StepNine />; 
        return (
          <div className="text-center py-20 animate-in fade-in zoom-in-95 duration-300">
            <h2 className="text-2xl font-bold text-slate-800">Step {step}</h2>
            <p className="text-slate-500 mb-6">This section is under construction.</p>
            <div className="flex justify-center gap-4">
              <button onClick={() => useFormStore.getState().prevStep()} className="px-6 py-2 border rounded-xl">Back</button>
              <button onClick={() => useFormStore.getState().nextStep()} className="px-6 py-2 bg-blue-600 text-white rounded-xl">Next</button>
            </div>
          </div>
        );
      case 10: return <StepTen />;
      default: return <StepOne />;
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12 transition-all duration-500">
        <FormStepper currentStep={step} />
        
        <div className="mt-12">
          {renderStep()}
        </div>
      </div>
    </main>
  );
}