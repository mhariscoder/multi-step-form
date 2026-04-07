"use client";
import { useFormStore } from "@/store/useFormStore";
import { LayoutGrid, Square, Columns, Layers, HelpCircle } from "lucide-react";

const OPTIONS = [
  { id: 'window', title: 'Window', desc: 'Standard windows – casement, double-hung, or picture windows', icon: Square },
  { id: 'sliding', title: 'Sliding Glass Door', desc: 'Patio doors or large sliding glass panels', icon: Columns },
  { id: 'swinging', title: 'Swinging Door', desc: 'French doors or other doors that swing open', icon: LayoutGrid },
  { id: 'both', title: 'Both', desc: 'A mix of windows and sliding doors in the same room', icon: Layers },
  { id: 'not_sure', title: 'Not Sure', desc: "I'll let you recommend based on my other preferences", icon: HelpCircle },
];

export default function StepTwo() {
  const { coverType, setCoverType, nextStep, prevStep } = useFormStore();

  return (
    <div className="w-full flex flex-col gap-10 animate-in fade-in duration-700">
      
      {/* Header Section */}
      <header className="space-y-3">
        <h1 className="text-[44px] font-serif text-[#1A1A1A] leading-tight tracking-tight">
          What are you looking to cover?
        </h1>
        <p className="text-[#8E8E8E] text-[16px] font-sans">
          This helps us recommend products that fit your window or door type perfectly.
        </p>
      </header>

      {/* Options Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {OPTIONS.map((opt) => {
          const Icon = opt.icon;
          const isSelected = coverType === opt.id;
          
          return (
            <button
              key={opt.id}
              onClick={() => setCoverType(opt.id)}
              className={`flex flex-col items-start p-8 rounded-sm transition-all text-left min-h-[220px] relative
                ${isSelected 
                  ? "bg-[#0F172A] text-white shadow-xl scale-[1.02] z-10" 
                  : "bg-[#FBF9F6] text-[#1A1A1A] hover:bg-white hover:shadow-md border border-transparent"
                } ${opt.id === 'both' || opt.id === 'not_sure' ? 'md:col-span-1.5' : ''}`}
            >
              <div className={`p-3 rounded-full mb-6 ${isSelected ? "bg-[#BC9661] text-white" : "bg-[#0F172A] text-white"}`}>
                <Icon size={20} />
              </div>
              
              <h3 className={`text-[24px] font-serif mb-2 ${isSelected ? "text-white" : "text-[#1A1A1A]"}`}>
                {opt.title}
              </h3>
              
              <p className={`text-[14px] leading-relaxed font-sans ${isSelected ? "text-slate-300" : "text-[#8E8E8E]"}`}>
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
          className="flex-1 py-4 border border-[#1A1A1A] rounded-full text-[#1A1A1A] text-[14px] font-sans font-medium hover:bg-white/50 transition-all text-center"
        >
          Back
        </button>
        
        <button 
          onClick={nextStep}
          disabled={!coverType}
          className={`flex-1 py-4 rounded-full text-white text-[16px] font-sans font-semibold transition-all shadow-sm ${
            coverType ? "bg-[#BC9661] hover:brightness-105 active:scale-[0.98]" : "bg-[#D1C7B7] cursor-not-allowed"
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