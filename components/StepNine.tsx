"use client";
import { useFormStore } from "@/store/useFormStore";
import { Baby, Smartphone, Layers, ArrowLeft, ArrowRight } from "lucide-react";

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
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
          <Icon size={20} />
        </div>
        <h3 className="text-lg font-bold text-slate-800">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-3">
        {options.map((opt: any) => (
          <button
            key={opt.value}
            onClick={() => onSelect(opt.value)}
            className={`px-6 py-3 rounded-xl border-2 font-semibold transition-all ${
              currentValue === opt.value
                ? "border-blue-600 bg-blue-50 text-blue-600 shadow-sm"
                : "border-slate-100 hover:border-slate-200 text-slate-600 bg-white"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">A few practical questions</h1>
        <p className="text-slate-500 text-lg">
          These help us recommend the safest and most convenient options for your lifestyle.
        </p>
      </div>

      <div className="space-y-12">
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

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-slate-100">
        <button onClick={prevStep} className="flex items-center gap-2 text-slate-500 font-bold hover:text-slate-800 transition-colors">
          <ArrowLeft size={20} /> Back
        </button>
        
        <button 
          onClick={nextStep}
          disabled={!isComplete}
          className={`px-10 py-3 rounded-xl flex items-center gap-2 font-bold transition-all ${
            isComplete 
              ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200 active:scale-95" 
              : "bg-blue-200 text-white cursor-not-allowed"
          }`}
        >
          Next <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}