"use client";
import { useFormStore } from "@/store/useFormStore";
import { Lock, Scale, Eye } from "lucide-react";

const PREFERENCES = [
  {
    id: 'privacy',
    title: 'Privacy Is The Priority',
    desc: 'I want to block outside views, especially at night. Privacy comes first.',
    icon: Lock,
  },
  {
    id: 'balance',
    title: 'A Balance Of View + Privacy',
    desc: 'I want some privacy without completely blocking the outside view.',
    icon: Scale,
  },
  {
    id: 'view',
    title: 'View Is The Priority',
    desc: 'I want to keep my view and natural light. I can manage privacy other ways.',
    icon: Eye,
  },
];

export default function StepFive() {
  const { privacyPreference, setPrivacyPreference, nextStep, prevStep } = useFormStore();

  return (
    <div className="w-full flex flex-col gap-10 animate-in fade-in duration-700">
      
      {/* Header Section */}
      <header className="space-y-3">
        <h1 className="text-[44px] font-serif text-[#1A1A1A] leading-tight tracking-tight">
          Privacy vs. View
        </h1>
        <p className="text-[#8E8E8E] text-[16px] font-sans">
          How important is nighttime privacy compared to keeping a daytime view?
        </p>
      </header>

      {/* Preferences Grid - Mixed Layout as per image_0b7b9a.png */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PREFERENCES.map((pref, index) => {
          const Icon = pref.icon;
          const isSelected = privacyPreference === pref.id;
          
          return (
            <button
              key={pref.id}
              onClick={() => setPrivacyPreference(pref.id)}
              className={`flex flex-col items-start p-8 rounded-sm transition-all text-left border
                ${isSelected 
                  ? "bg-[#0F172A] border-[#0F172A] text-white shadow-xl z-10" 
                  : "bg-[#FBF9F6] border-transparent text-[#1A1A1A] hover:bg-white hover:border-[#D1C7B7]"
                } ${index === 2 ? 'md:col-span-2' : 'md:col-span-1'}`}
            >
              {/* Icon Container */}
              <div className={`p-3 rounded-full mb-6 ${isSelected ? "bg-[#BC9661] text-white" : "bg-[#0F172A] text-white"}`}>
                <Icon size={20} />
              </div>
              
              <h3 className={`text-[24px] font-serif mb-2 ${isSelected ? "text-white" : "text-[#1A1A1A]"}`}>
                {pref.title}
              </h3>
              
              <p className={`text-[14px] leading-relaxed font-sans ${isSelected ? "text-slate-300" : "text-[#8E8E8E]"}`}>
                {pref.desc}
              </p>
            </button>
          );
        })}
      </div>

      {/* Footer Navigation */}
      <div className="flex flex-col md:flex-row gap-4 pt-4 border-t border-[#D1C7B7]/30">
        <button 
          onClick={prevStep}
          className="flex-1 py-4 border border-[#1A1A1A] rounded-full text-[#1A1A1A] text-[14px] font-sans font-medium hover:bg-white/50 transition-all text-center"
        >
          Back
        </button>
        
        <button 
          onClick={nextStep}
          disabled={!privacyPreference}
          className={`flex-1 py-4 rounded-full text-white text-[16px] font-sans font-semibold transition-all shadow-sm ${
            privacyPreference ? "bg-[#BC9661] hover:brightness-105 active:scale-[0.98]" : "bg-[#D1C7B7] cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>

      {/* Security Disclaimer */}
      <p className="text-center text-[11px] text-[#A0A0A0] font-sans tracking-wide">
        Your info is secure · No spam · We never share your details
      </p>
    </div>
  );
}