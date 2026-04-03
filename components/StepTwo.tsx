"use client";
import { useFormStore } from "@/store/useFormStore";
import { LayoutGrid, Square, Columns, Layers, HelpCircle, ArrowRight, ArrowLeft } from "lucide-react";

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
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">What are you looking to cover?</h1>
        <p className="text-slate-500 text-lg">This helps us recommend products that fit your window or door type perfectly.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {OPTIONS.map((opt) => {
          const Icon = opt.icon;
          const isSelected = coverType === opt.id;
          
          return (
            <button
              key={opt.id}
              onClick={() => setCoverType(opt.id)}
              className={`flex flex-col items-start p-6 rounded-2xl border-2 transition-all text-left group ${
                isSelected 
                  ? "border-blue-600 bg-blue-50/50 ring-1 ring-blue-600" 
                  : "border-slate-100 hover:border-blue-200 hover:bg-slate-50"
              }`}
            >
              <div className={`p-2 rounded-lg mb-4 ${isSelected ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500 group-hover:bg-blue-100"}`}>
                <Icon size={24} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">{opt.title}</h3>
              <p className="text-slate-500 text-sm mt-1">{opt.desc}</p>
            </button>
          );
        })}
      </div>

      {/* Footer Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-slate-100">
        <button 
          onClick={prevStep}
          className="flex items-center gap-2 text-slate-500 font-bold hover:text-slate-800 transition-colors"
        >
          <ArrowLeft size={20} /> Back
        </button>
        
        <button 
          onClick={nextStep}
          disabled={!coverType}
          className={`px-10 py-3 rounded-xl flex items-center gap-2 font-bold transition-all ${
            coverType 
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