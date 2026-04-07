"use client";
import { useFormStore } from "@/store/useFormStore";
import { Baby, Smartphone, Layers } from "lucide-react";

export default function StepNine() {
  const { 
    hasChildrenPets, setHasChildrenPets,
    interestedInMotorization, setInterestedInMotorization,
    interestedInLayering, setInterestedInLayering,
    nextStep, prevStep 
  } = useFormStore();

  const isComplete = hasChildrenPets && interestedInMotorization && interestedInLayering;

  const QuestionRow = ({ 
    icon: Icon, 
    title, 
    options, 
    currentValue, 
    onSelect 
  }: any) => (
    <div className="bg-[#FBF9F6]/50 p-8 rounded-sm border border-transparent hover:border-[#D1C7B7]/30 transition-all space-y-6">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-[#0F172A] text-white rounded-full">
          <Icon size={20} />
        </div>
        <h3 className="text-[28px] font-serif text-[#1A1A1A] leading-tight">{title}</h3>
      </div>
      
      <div className="flex flex-wrap gap-4">
        {options.map((opt: any) => {
          const isSelected = currentValue === opt.value;
          return (
            <button
              key={opt.value}
              onClick={() => onSelect(opt.value)}
              className={`px-8 py-3 rounded-full border text-[15px] font-sans font-medium transition-all duration-300 ${
                isSelected
                  ? "bg-[#BC9661] border-[#BC9661] text-white shadow-md active:scale-95"
                  : "bg-white border-[#D1C7B7] text-[#1A1A1A] hover:border-[#1A1A1A]"
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="w-full flex flex-col gap-10 animate-in fade-in duration-700">
      
      {/* Header Section */}
      <header className="space-y-3">
        <h1 className="text-[44px] font-serif text-[#1A1A1A] leading-tight tracking-tight">
          A few practical questions
        </h1>
        <p className="text-[#8E8E8E] text-[16px] font-sans">
          These help us recommend the safest and most convenient options for your lifestyle.
        </p>
      </header>

      {/* Questions Container */}
      <div className="flex flex-col gap-6">
        <QuestionRow 
          icon={Baby}
          title="Do you have children or pets?"
          currentValue={hasChildrenPets}
          onSelect={setHasChildrenPets}
          options={[
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' }
          ]}
        />

        <QuestionRow 
          icon={Smartphone}
          title="Interested in motorization or smart control?"
          currentValue={interestedInMotorization}
          onSelect={setInterestedInMotorization}
          options={[
            { label: 'Yes', value: 'yes' },
            { label: 'Maybe', value: 'maybe' },
            { label: 'No', value: 'no' }
          ]}
        />

        <QuestionRow 
          icon={Layers}
          title="Interested in layered looks (shade + drapery)?"
          currentValue={interestedInLayering}
          onSelect={setInterestedInLayering}
          options={[
            { label: 'Yes, I love layered looks', value: 'yes' },
            { label: 'Maybe, show me options', value: 'maybe' },
            { label: 'No, keep it simple', value: 'no' }
          ]}
        />
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
          disabled={!isComplete}
          className={`flex-1 py-4 rounded-full text-white text-[16px] font-sans font-semibold transition-all shadow-sm ${
            isComplete ? "bg-[#BC9661] hover:brightness-105 active:scale-[0.98]" : "bg-[#D1C7B7] cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>

      {/* Security Disclaimer */}
      <p className="text-center text-[11px] text-[#A0A0A0] font-sans tracking-wide uppercase">
        Your info is secure · No spam · We never share your details
      </p>
    </div>
  );
}