"use client";
import { useFormStore } from "@/store/useFormStore";
import { 
  Flame, 
  Sparkles, 
  Palette, 
  Cloud, 
  Zap, 
  Coffee,
  ArrowLeft, 
  ArrowRight 
} from "lucide-react";

const VIBES = [
  { 
    id: 'cozy', 
    title: 'Cozy & Warm', 
    desc: 'Inviting, comfortable, like a warm hug for your room', 
    icon: Flame 
  },
  { 
    id: 'modern', 
    title: 'Clean & Modern', 
    desc: 'Crisp, uncluttered, with a contemporary edge', 
    icon: Sparkles 
  },
  { 
    id: 'textured', 
    title: 'Warm & Textured', 
    desc: 'Rich textures and earthy tones that add depth', 
    icon: Palette 
  },
  { 
    id: 'airy', 
    title: 'Light & Airy', 
    desc: 'Breezy, open, with a sense of effortless flow', 
    icon: Cloud 
  },
  { 
    id: 'bold', 
    title: 'Bold & Dramatic', 
    desc: 'Statement-making, eye-catching, with strong presence', 
    icon: Zap 
  },
  { 
    id: 'relaxed', 
    title: 'Relaxed & Casual', 
    desc: 'Easy-going, comfortable, without pretense', 
    icon: Coffee 
  },
];

export default function StepEight() {
  const { roomVibe, setRoomVibe, nextStep, prevStep } = useFormStore();

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">What vibe are you going for?</h1>
        <p className="text-slate-500 text-lg">
          The feeling you want your room to evoke helps us perfect your recommendation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {VIBES.map((vibe) => {
          const Icon = vibe.icon;
          const isSelected = roomVibe === vibe.id;
          
          return (
            <button
              key={vibe.id}
              onClick={() => setRoomVibe(vibe.id)}
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
              <h3 className="font-bold text-slate-900 text-lg">{vibe.title}</h3>
              <p className="text-slate-500 text-sm mt-1 leading-relaxed">{vibe.desc}</p>
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
          disabled={!roomVibe}
          className={`px-10 py-3 rounded-xl flex items-center gap-2 font-bold transition-all ${
            roomVibe 
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