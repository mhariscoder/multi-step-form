"use client";
import { useFormStore } from "@/store/useFormStore";
import { 
  Wind, 
  Minus, 
  Columns, 
  Trees, 
  Layers, 
  LayoutGrid, 
  HelpCircle,
  ArrowLeft, 
  ArrowRight 
} from "lucide-react";

const LOOKS = [
  { 
    id: 'soft_fabric', 
    title: 'Soft Fabric Shades', 
    desc: 'Elegant, cascading folds that add warmth and sophistication', 
    icon: Wind 
  },
  { 
    id: 'clean_flat', 
    title: 'Clean, Flat Roller Look', 
    desc: 'Sleek, modern appearance that rolls up neatly out of sight', 
    icon: Minus 
  },
  { 
    id: 'slats', 
    title: 'Slats (Blinds or Shutters)', 
    desc: 'Classic horizontal or vertical slats for precise light control', 
    icon: Columns 
  },
  { 
    id: 'natural', 
    title: 'Natural Textured / Woven Woods', 
    desc: 'Organic materials like bamboo, jute, and grasses', 
    icon: Trees 
  },
  { 
    id: 'sheer', 
    title: 'Sheer or Layered Look', 
    desc: 'Light, ethereal fabrics that softly filter light', 
    icon: Layers 
  },
  { 
    id: 'large_panel', 
    title: 'Large Panel / Vertical Look', 
    desc: 'Bold panels that glide smoothly - great for wide spaces', 
    icon: LayoutGrid 
  },
  { 
    id: 'not_sure', 
    title: "I'm Not Sure", 
    desc: 'Recommend for me based on my other preferences', 
    icon: HelpCircle 
  },
];

export default function StepSeven() {
  const { lookPreference, setLookPreference, nextStep, prevStep } = useFormStore();

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">Which look do you prefer in this room?</h1>
        <p className="text-slate-500 text-lg">
          The aesthetic of your window treatments sets the tone for the entire space.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {LOOKS.map((look) => {
          const Icon = look.icon;
          const isSelected = lookPreference === look.id;
          
          return (
            <button
              key={look.id}
              onClick={() => setLookPreference(look.id)}
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
              <h3 className="font-bold text-slate-900 text-lg">{look.title}</h3>
              <p className="text-slate-500 text-sm mt-1 leading-relaxed">{look.desc}</p>
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
          disabled={!lookPreference}
          className={`px-10 py-3 rounded-xl flex items-center gap-2 font-bold transition-all ${
            lookPreference 
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