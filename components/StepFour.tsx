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
  Sparkles 
} from "lucide-react";

const STYLES = [
  { id: 'farmhouse', title: 'Farmhouse', desc: 'Rustic, warm, with natural textures and cozy comfort', icon: Home },
  { id: 'modern', title: 'Modern / Minimalist', desc: 'Clean lines, simple forms, and uncluttered spaces', icon: Maximize },
  { id: 'transitional', title: 'Transitional', desc: 'A balanced blend of traditional and contemporary elements', icon: ArrowLeftRight },
  { id: 'traditional', title: 'Traditional', desc: 'Classic, timeless elegance with refined details', icon: Crown },
  { id: 'coastal', title: 'Coastal', desc: 'Light, airy, and inspired by beach and ocean vibes', icon: Waves },
  { id: 'boho', title: 'Boho / Natural', desc: 'Eclectic, earthy, with organic materials and textures', icon: Leaf },
  { id: 'industrial', title: 'Industrial', desc: 'Raw, urban aesthetic with metal and exposed elements', icon: Factory },
  { id: 'ai_decide', title: 'Let AI Decide', desc: 'Based on my photo and preferences, recommend a style', icon: Sparkles },
];

export default function StepFour() {
  const { designStyle, setDesignStyle, nextStep, prevStep } = useFormStore();

  return (
    <div className="w-full flex flex-col gap-10 animate-in fade-in duration-700">
      
      {/* Header Section */}
      <header className="space-y-3">
        <h1 className="text-[44px] font-serif text-[#1A1A1A] leading-tight tracking-tight">
          Which style feels closest to your room?
        </h1>
        <p className="text-[#8E8E8E] text-[16px] font-sans">
          Your design aesthetic helps us recommend products that complement your space.
        </p>
      </header>

      {/* Options Grid - 3 Columns as per image_0b779c.png */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {STYLES.map((style) => {
          const Icon = style.icon;
          const isSelected = designStyle === style.id;
          
          return (
            <button
              key={style.id}
              onClick={() => setDesignStyle(style.id)}
              className={`flex flex-col items-start p-8 rounded-sm transition-all text-left min-h-[200px] border
                ${isSelected 
                  ? "bg-[#0F172A] border-[#0F172A] text-white shadow-xl scale-[1.02] z-10" 
                  : "bg-[#FBF9F6] border-transparent text-[#1A1A1A] hover:bg-white hover:border-[#D1C7B7]"
                } ${style.id === 'industrial' || style.id === 'ai_decide' ? 'md:col-span-1.5' : ''}`}
            >
              {/* Icon Container */}
              <div className={`p-3 rounded-full mb-6 ${isSelected ? "bg-[#BC9661] text-white" : "bg-[#0F172A] text-white"}`}>
                <Icon size={20} />
              </div>
              
              <h3 className={`text-[24px] font-serif mb-2 ${isSelected ? "text-white" : "text-[#1A1A1A]"}`}>
                {style.title}
              </h3>
              
              <p className={`text-[14px] leading-relaxed font-sans ${isSelected ? "text-slate-300" : "text-[#8E8E8E]"}`}>
                {style.desc}
              </p>
            </button>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col md:flex-row gap-4 pt-4 border-t border-[#D1C7B7]/30">
        <button 
          onClick={prevStep}
          className="flex-1 py-4 border border-[#1A1A1A] rounded-full text-[#1A1A1A] text-[14px] font-sans font-medium hover:bg-white/50 transition-all text-center"
        >
          Back
        </button>
        
        <button 
          onClick={nextStep}
          disabled={!designStyle}
          className={`flex-1 py-4 rounded-full text-white text-[16px] font-sans font-semibold transition-all shadow-sm ${
            designStyle ? "bg-[#BC9661] hover:brightness-105 active:scale-[0.98]" : "bg-[#D1C7B7] cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>

      {/* Footer Disclaimer */}
      <p className="text-center text-[11px] text-[#A0A0A0] font-sans tracking-wide">
        Your info is secure · No spam · We never share your details
      </p>
    </div>
  );
}