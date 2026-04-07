"use client";
import { useFormStore } from "@/store/useFormStore";
import {
  Flame,
  Sparkles,
  Palette,
  Cloud,
  Zap,
  Coffee,
} from "lucide-react";

const VIBES = [
  {
    id: "cozy",
    title: "Cozy & Warm",
    desc: "Inviting, comfortable, like a warm hug for your room",
    icon: Flame,
  },
  {
    id: "modern",
    title: "Clean & Modern",
    desc: "Crisp, uncluttered, with a contemporary edge",
    icon: Sparkles,
  },
  {
    id: "textured",
    title: "Warm & Textured",
    desc: "Rich textures and earthy tones that add depth",
    icon: Palette,
  },
  {
    id: "airy",
    title: "Light & Airy",
    desc: "Breezy, open, with a sense of effortless flow",
    icon: Cloud,
  },
  {
    id: "bold",
    title: "Bold & Dramatic",
    desc: "Statement-making, eye-catching, with strong presence",
    icon: Zap,
  },
  {
    id: "relaxed",
    title: "Relaxed & Casual",
    desc: "Easy-going, comfortable, without pretense",
    icon: Coffee,
  },
];

export default function StepEight() {
  const { roomVibe, setRoomVibe, nextStep, prevStep } = useFormStore();

  return (
    <div className="w-full flex flex-col md:gap-18   gap-10  animate-in fade-in duration-700">
      <header className="space-y-4">
        <h1 className="text-[30px] sm:text-[38px] md:text-[42px] xl:text-[48px] heading-font text-[#1A1A1A] leading-[1.1] md:leading-[1.1] xl:leading-[59px]">
          What vibe are you going for?
        </h1>
        <p className="text-[#8E8E8E] text-[16px] sm:text-[18px] md:text-[18px] xl:text-[20px] leading-[1.5] md:leading-[20px] xl:leading-[20px] text-font">
          The feeling you want your room to evoke helps us perfect your recommendation.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {VIBES.map((vibe) => {
          const Icon = vibe.icon;
          const isSelected = roomVibe === vibe.id;

          return (
            <button
              key={vibe.id}
              onClick={() => setRoomVibe(vibe.id)}
              className={`flex flex-col items-start p-8  transition-all text-left border min-h-[235px] ${
                isSelected
                  ? "bg-[#0F172A] border-[#0F172A] text-white shadow-xl z-10 scale-[1.02]"
                  : "bg-[#FBF9F6] border-transparent text-[#1A1A1A] hover:bg-white hover:border-[#D1C7B7]"
              }`}
            >
              <div
                className={`rounded-full mb-6 h-[50px] w-[50px] flex items-center justify-center ${
                  isSelected ? "bg-[#BC9661] text-white" : "bg-[#0F172A] text-white"
                }`}
              >
                <Icon size={18} />
              </div>

              <h3 className={`text-[24px] sm:text-[28px] md:text-[28px] xl:text-[32px] heading-font mb-2 leading-[1.1] ${isSelected ? "text-white" : "text-[#1A1A1A]"}`}>
                {vibe.title}
              </h3>

              <p className={`text-[15px] sm:text-[17px] md:text-[16px] xl:text-[18px] leading-[1.45] md:leading-[20px] xl:leading-[20px] text-font ${isSelected ? "text-slate-300" : "text-[#8E8E8E]"}`}>
                {vibe.desc}
              </p>
            </button>
          );
        })}
      </div>

      <div className="flex flex-col md:flex-row gap-4 pt-4 ">
        <button
          onClick={prevStep}
          className="flex-1 py-4 border border-[#1A1A1A] rounded-full text-[#1A1A1A] text-[14px] font-[700] hover:bg-white/50 transition-all text-center"
        >
          Back
        </button>

        <button
          onClick={nextStep}
          disabled={!roomVibe}
          className={`flex-1 py-4 rounded-full text-white text-[13px] md:text-[13px] xl:text-[14px] font-[700] text-font transition-all shadow-sm ${
            roomVibe ? "bg-[#BC9661] hover:brightness-105 active:scale-[0.98]" : "bg-[#D1C7B7] cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>

      {/* <p className="text-center text-[16px] text-[#727272] text-font tracking-wide">
        Your info is secure | No spam | We never share your details
      </p> */}
    </div>
  );
}
