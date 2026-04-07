"use client";
import { useFormStore } from "@/store/useFormStore";
import { 
  Flame, 
  Sparkles, 
  Palette, 
  Cloud, 
  Zap, 
  Coffee 
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
    <div className="w-full flex flex-col gap-10 animate-in fade-in duration-700">
      
      {/* Header Section */}
      <header className="space-y-3">
        <h1 className="text-[44px] font-serif text-[#1A1A1A] leading-tight tracking-tight">
          What vibe are you going for?
        </h1>
        <p className="text-[#8E8E8E] text-[16px] font-sans">
          The feeling you want your room to evoke helps us perfect your recommendation.
        </p>
      </header>

      {/* Options Grid - 3-column layout as per image_1564e7.png */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {VIBES.map((vibe) => {
          const Icon = vibe.icon;
          const isSelected = roomVibe === vibe.id;
          
          return (
            <button
              key={vibe.id}
              onClick={() => setRoomVibe(vibe.id)}
              className={`flex flex-col items-start p-8 rounded-sm transition-all text-left border min-h-[220px]
                ${isSelected 
                  ? "bg-[#0F172A] border-[#0F172A] text-white shadow-xl z-10 scale-[1.02]" 
                  : "bg-[#FBF9F6] border-transparent text-[#1A1A1A] hover:bg-white hover:border-[#D1C7B7]"
                }`}
            >
              {/* Icon Container */}
              <div className={`p-3 rounded-full mb-6 ${isSelected ? "bg-[#BC9661] text-white" : "bg-[#0F172A] text-white"}`}>
                <Icon size={20} />
              </div>
              
              <h3 className={`text-[24px] font-serif mb-2 ${isSelected ? "text-white" : "text-[#1A1A1A]"}`}>
                {vibe.title}
              </h3>
              
              <p className={`text-[14px] leading-relaxed font-sans ${isSelected ? "text-slate-300" : "text-[#8E8E8E]"}`}>
                {vibe.desc}
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
          disabled={!roomVibe}
          className={`flex-1 py-4 rounded-full text-white text-[16px] font-sans font-semibold transition-all shadow-sm ${
            roomVibe ? "bg-[#BC9661] hover:brightness-105 active:scale-[0.98]" : "bg-[#D1C7B7] cursor-not-allowed"
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