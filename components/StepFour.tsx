"use client";
import { useFormStore } from "@/store/useFormStore";
import { 
  Home, 
  Maximize, 
  ArrowLeftRight, 
  Crown, 
  Waves, 
  Leaf, 
  Factory, 
  Sparkles,
  ArrowLeft, 
  ArrowRight 
} from "lucide-react";

const STYLES = [
  { 
    id: 'farmhouse', 
    title: 'Farmhouse', 
    desc: 'Rustic, warm, with natural textures and cozy comfort', 
    icon: Home 
  },
  { 
    id: 'modern', 
    title: 'Modern / Minimalist', 
    desc: 'Clean lines, simple forms, and uncluttered spaces', 
    icon: Maximize 
  },
  { 
    id: 'transitional', 
    title: 'Transitional', 
    desc: 'A balanced blend of traditional and contemporary elements', 
    icon: ArrowLeftRight 
  },
  { 
    id: 'traditional', 
    title: 'Traditional', 
    desc: 'Classic, timeless elegance with refined details', 
    icon: Crown 
  },
  { 
    id: 'coastal', 
    title: 'Coastal', 
    desc: 'Light, airy, and inspired by beach and ocean vibes', 
    icon: Waves 
  },
  { 
    id: 'boho', 
    title: 'Boho / Natural', 
    desc: 'Eclectic, earthy, with organic materials and textures', 
    icon: Leaf 
  },
  { 
    id: 'industrial', 
    title: 'Industrial', 
    desc: 'Raw, urban aesthetic with metal and exposed elements', 
    icon: Factory 
  },
  { 
    id: 'ai_decide', 
    title: 'Let AI Decide', 
    desc: 'Based on my photo and preferences, recommend a style', 
    icon: Sparkles 
  },
];

export default function StepFour() {
  const { designStyle, setDesignStyle, nextStep, prevStep } = useFormStore();

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">Which style feels closest to your room?</h1>
        <p className="text-slate-500 text-lg">Your design aesthetic helps us recommend products that complement your space.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {STYLES.map((style) => {
          const Icon = style.icon;
          const isSelected = designStyle === style.id;
          
          return (
            <button
              key={style.id}
              onClick={() => setDesignStyle(style.id)}
              className={`flex flex-col items-start p-6 rounded-2xl border-2 transition-all text-left group ${
                isSelected 
                  ? "border-blue-600 bg-blue-50/50 ring-1 ring-blue-600 shadow-sm" 
                  : "border-slate-100 hover:border-blue-200 hover:bg-slate-50"
              }`}
            >
              <div className={`p-2 rounded-lg mb-4 transition-colors ${
                isSelected ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500 group-hover:bg-blue-100"
              }`}>
                <Icon size={20} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">{style.title}</h3>
              <p className="text-slate-500 text-sm mt-1 leading-relaxed">{style.desc}</p>
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
          disabled={!designStyle}
          className={`px-10 py-3 rounded-xl flex items-center gap-2 font-bold transition-all ${
            designStyle 
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