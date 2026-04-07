"use client";
import { useFormStore } from "@/store/useFormStore";
import { Sun, Monitor, Moon, CloudMoon, Mountain } from "lucide-react";

const PRIORITIES = [
  {
    id: 'soft_filtered',
    title: 'Soft / Filtered Light',
    desc: 'Gently softens sunlight while maintaining a bright, welcoming atmosphere',
    icon: Sun,
  },
  {
    id: 'reduce_glare',
    title: 'Reduce Glare & Heat',
    desc: 'Minimizes screen glare and heat gain – perfect for rooms with TVs or computers',
    icon: Monitor,
  },
  {
    id: 'room_darkening',
    title: 'Room Darkening',
    desc: 'Creates a darker environment ideal for sleeping or watching movies',
    icon: Moon,
  },
  {
    id: 'full_blackout',
    title: 'Full Blackout',
    desc: 'Blocks nearly all light for complete darkness – ideal for day sleepers',
    icon: CloudMoon,
  },
  {
    id: 'keep_view',
    title: 'Keep The View',
    desc: 'Reduces brightness while preserving your daytime view of the outdoors',
    icon: Mountain,
  },
];

export default function StepSix() {
  const { lightPriority, setLightPriority, nextStep, prevStep } = useFormStore();

  return (
    <div className="w-full flex flex-col gap-10 animate-in fade-in duration-700">
      
      {/* Header Section */}
      <header className="space-y-3">
        <h1 className="text-[44px] font-serif text-[#1A1A1A] leading-tight tracking-tight">
          What matters most for light in this room?
        </h1>
        <p className="text-[#8E8E8E] text-[16px] font-sans">
          Light control is one of the most important factors in choosing window treatments.
        </p>
      </header>

      {/* Options Grid - 3 top / 2 wide bottom as per image_0b8283.png */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
        {PRIORITIES.map((item, index) => {
          const Icon = item.icon;
          const isSelected = lightPriority === item.id;
          
          // Layout logic: first 3 items take 2 columns each (1/3 width), last 2 take 3 columns each (1/2 width)
          const gridSpan = index < 3 ? "md:col-span-2" : "md:col-span-3";

          return (
            <button
              key={item.id}
              onClick={() => setLightPriority(item.id)}
              className={`flex flex-col items-start p-8 rounded-sm transition-all text-left border min-h-[220px]
                ${gridSpan}
                ${isSelected 
                  ? "bg-[#0F172A] border-[#0F172A] text-white shadow-xl scale-[1.02] z-10" 
                  : "bg-[#FBF9F6] border-transparent text-[#1A1A1A] hover:bg-white hover:border-[#D1C7B7]"
                }`}
            >
              {/* Icon Container */}
              <div className={`p-3 rounded-full mb-6 ${isSelected ? "bg-[#BC9661] text-white" : "bg-[#0F172A] text-white"}`}>
                <Icon size={20} />
              </div>
              
              <h3 className={`text-[24px] font-serif mb-2 ${isSelected ? "text-white" : "text-[#1A1A1A]"}`}>
                {item.title}
              </h3>
              
              <p className={`text-[14px] leading-relaxed font-sans ${isSelected ? "text-slate-300" : "text-[#8E8E8E]"}`}>
                {item.desc}
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
          disabled={!lightPriority}
          className={`flex-1 py-4 rounded-full text-white text-[16px] font-sans font-semibold transition-all shadow-sm ${
            lightPriority ? "bg-[#BC9661] hover:brightness-105 active:scale-[0.98]" : "bg-[#D1C7B7] cursor-not-allowed"
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