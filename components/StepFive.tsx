"use client";
import { useFormStore } from "@/store/useFormStore";
import { Lock, Scale, Eye, ArrowLeft, ArrowRight } from "lucide-react";

const PREFERENCES = [
  {
    id: 'privacy',
    title: 'Privacy is the Priority',
    desc: 'I want to block outside views, especially at night. Privacy comes first.',
    icon: Lock,
  },
  {
    id: 'balance',
    title: 'A Balance of View + Privacy',
    desc: 'I want some privacy without completely blocking the outside view.',
    icon: Scale,
  },
  {
    id: 'view',
    title: 'View is the Priority',
    desc: 'I want to keep my view and natural light. I can manage privacy other ways.',
    icon: Eye,
  },
];

export default function StepFive() {
  const { privacyPreference, setPrivacyPreference, nextStep, prevStep } = useFormStore();

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">Privacy vs. View</h1>
        <p className="text-slate-500 text-lg">
          How important is nighttime privacy compared to keeping a daytime view?
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {PREFERENCES.map((pref) => {
          const Icon = pref.icon;
          const isSelected = privacyPreference === pref.id;

          return (
            <button
              key={pref.id}
              onClick={() => setPrivacyPreference(pref.id)}
              className={`flex items-start p-6 rounded-2xl border-2 transition-all text-left group ${
                isSelected
                  ? "border-blue-600 bg-blue-50/50 ring-1 ring-blue-600 shadow-sm"
                  : "border-slate-100 hover:border-blue-200 hover:bg-slate-50"
              }`}
            >
              <div className={`p-3 rounded-xl mr-5 transition-colors ${
                isSelected ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500 group-hover:bg-blue-100"
              }`}>
                <Icon size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 text-xl">{pref.title}</h3>
                <p className="text-slate-500 mt-1 leading-relaxed">{pref.desc}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-slate-100">
        <button
          onClick={prevStep}
          className="flex items-center gap-2 text-slate-500 font-bold hover:text-slate-800 transition-colors"
        >
          <ArrowLeft size={20} /> Back
        </button>

        <button
          onClick={nextStep}
          disabled={!privacyPreference}
          className={`px-10 py-3 rounded-xl flex items-center gap-2 font-bold transition-all ${
            privacyPreference
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