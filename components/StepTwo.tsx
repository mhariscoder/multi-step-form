"use client";
import { useFormStore } from "@/store/useFormStore";
import { LayoutGrid, Square, Columns, Layers, HelpCircle } from "lucide-react";

const OPTIONS = [
  { id: 'window', title: 'Window', desc: 'Standard windows - casement, double-hung, or picture windows', icon: Square },
  { id: 'sliding', title: 'Sliding Glass Door', desc: 'Patio doors or large sliding glass panels', icon: Columns },
  { id: 'swinging', title: 'Swinging Door', desc: 'French doors or other doors that swing open', icon: LayoutGrid },
  { id: 'both', title: 'Both', desc: 'A mix of windows and sliding doors in the same room', icon: Layers },
  { id: 'not_sure', title: 'Not Sure', desc: "I'll let you recommend based on my other preferences", icon: HelpCircle },
];

export default function StepTwo() {
  const { coverType, setCoverType, nextStep, prevStep } = useFormStore();

  return (
    <div className="w-full flex flex-col md:gap-18   gap-10     animate-in fade-in duration-700">
      
      {/* Header Section */}
      <header className="space-y-4">
        <h1 className="text-[30px] sm:text-[38px] md:text-[42px] xl:text-[48px] heading-font leading-[1.1] md:leading-[1.1] xl:leading-[59px] text-[#18191A] ">
          What are you looking to cover?
        </h1>
        <p className="text-[#727272] text-[16px] sm:text-[18px] md:text-[18px] xl:text-[20px] leading-[1.5] md:leading-[20px] xl:leading-[20px] text-font">
          This helps us recommend products that fit your window or door type perfectly.
        </p>
      </header>

      {/* Options Grid */}
     <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 auto-rows-fr gap-5">
  {OPTIONS.map((opt, index) => {
    const Icon = opt.icon;
    const isSelected = coverType === opt.id;
    const isBottomRow = index >= 3;

    return (
      <button
        key={opt.id}
        onClick={() => setCoverType(opt.id)}
        className={` flex flex-col items-start p-8  transition-all text-left min-h-[235px] relative
          ${isSelected
            ? "bg-[#0F172A] text-white shadow-xl scale-[1.02] z-10"
            : "bg-[#FBF9F6] text-[#1A1A1A] hover:bg-white hover:shadow-md border border-transparent"
          }
          ${isBottomRow ? " col-span-2 lg:col-span-3" : " col-span-2 lg:col-span-2"}
        `}
      >
        <div
          className={`rounded-full mb-6 h-[50px] w-[50px] flex items-center justify-center ${
            isSelected ? "bg-[#BC9661] text-white" : "bg-[#0F172A] text-white"
          }`}
        >
          <Icon size={18} />
        </div>

        <h3
          className={`text-[24px] sm:text-[28px] md:text-[28px] xl:text-[32px] heading-font mb-2 ${
            isSelected ? "text-white" : "text-[#1A1A1A]"
          }`}
        >
          {opt.title}
        </h3>

        <p
          className={`text-[15px] sm:text-[17px] md:text-[16px] xl:text-[18px] leading-[1.45] md:leading-[20px] xl:leading-[20px] text-font ${
            isSelected ? "text-slate-300" : "text-[#8E8E8E]"
          }`}
        >
          {opt.desc}
        </p>
      </button>
    );
  })}
</div>

      {/* Footer Navigation */}
      <div className="flex flex-col md:flex-row gap-4 pt-4">
        <button 
          onClick={prevStep}
          className="flex-1 py-4 border border-[#1A1A1A] rounded-full text-[#1A1A1A] text-[14px] font-[700]  hover:bg-white/50 transition-all text-center"
        >
          Back
        </button>
        
        <button 
          onClick={nextStep}
          disabled={!coverType}
          className={`flex-1 py-4 rounded-full text-white text-[13px] md:text-[13px] xl:text-[14px] font-[700] text-font transition-all shadow-sm ${
            coverType ? "bg-[#BC9661] hover:brightness-105 active:scale-[0.98]" : "bg-[#D1C7B7] cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>

      {/* Security Disclaimer */}
      {/* <p className="text-center text-[16px] text-[#727272] text-font tracking-wide">
        Your info is secure | No spam | We never share your details
      </p> */}
    </div>
  );
}
