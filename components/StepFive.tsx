"use client";
import { useFormStore } from "@/store/useFormStore";
import { Lock, Scale, Eye } from "lucide-react";

const PREFERENCES = [
  {
    id: "privacy",
    title: "Privacy Is The Priority",
    desc: "I want to block outside views, especially at night. Privacy comes first.",
    icon: Lock,
  },
  {
    id: "balance",
    title: "A Balance Of View + Privacy",
    desc: "I want some privacy without completely blocking the outside view.",
    icon: Scale,
  },
  {
    id: "view",
    title: "View Is The Priority",
    desc: "I want to keep my view and natural light. I can manage privacy other ways.",
    icon: Eye,
  },
];

export default function StepFive() {
  const { privacyPreference, setPrivacyPreference, nextStep, prevStep } = useFormStore();

  return (
    <div className="w-full flex flex-col md:gap-18 animate-in fade-in duration-700">
      <header className="space-y-4">
        <h1 className="text-[30px] sm:text-[38px] md:text-[48px] heading-font text-[#1A1A1A] leading-[1.1] md:leading-[59px]">Privacy vs. View</h1>
        <p className="text-[#8E8E8E] text-[16px] sm:text-[18px] md:text-[20px] leading-[1.5] md:leading-[20px] text-font">
          How important is nighttime privacy compared to keeping a daytime view?
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {PREFERENCES.map((pref, index) => {
          const Icon = pref.icon;
          const isSelected = privacyPreference === pref.id;

          return (
            <button
              key={pref.id}
              onClick={() => setPrivacyPreference(pref.id)}
              className={`flex flex-col items-start p-8 justify-center  transition-all text-left border border min-h-[150px] ${
                isSelected
                  ? "bg-[#0F172A] border-[#0F172A] text-white shadow-xl z-10"
                  : "bg-[#FBF9F6] border-transparent text-[#1A1A1A] hover:bg-white hover:border-[#D1C7B7]"
              } ${index === 2 ? "md:col-span-2" : "md:col-span-1"}`}
            >
              <div className="flex items-center mb-6   gap-5 ">

              <div
                className={`rounded-full  h-[50px] w-[50px] flex items-center justify-center ${
                  isSelected ? "bg-[#BC9661] text-white" : "bg-[#0F172A] text-white"
                }`}
              >
                <Icon size={20} />
              </div>

              <h3 className={`text-[22px] sm:text-[26px] md:text-[32px] heading-font leading-[1.15] md:leading-[59px] ${isSelected ? "text-white" : "text-[#1A1A1A]"}`}>
                {pref.title}
              </h3>
                 
                </div>
              <p className={`text-[15px] sm:text-[17px] md:text-[18px] leading-[1.45] md:leading-[20px] text-font ${isSelected ? "text-slate-300" : "text-[#8E8E8E]"}`}>
                {pref.desc}
              </p>
            </button>
          );
        })}
      </div>

      <div className="flex flex-col md:flex-row gap-4 pt-4 ">
        <button
          onClick={prevStep}
          className="flex-1 py-4 border border-[#1A1A1A] rounded-full text-[#1A1A1A] text-[14px] font-[700] hover:bg-white/50 transition-all text-center"
        >
          Back
        </button>

        <button
          onClick={nextStep}
          disabled={!privacyPreference}
          className={`flex-1 py-4 rounded-full text-white text-[13px] md:text-[14px] font-[700] text-font transition-all shadow-sm ${
            privacyPreference ? "bg-[#BC9661] hover:brightness-105 active:scale-[0.98]" : "bg-[#D1C7B7] cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>

      {/* <p className="text-center text-[16px] text-[#727272] text-font tracking-wide">
        Your info is secure | No spam | We never share your details
      </p> */}
    </div>
  );
}
