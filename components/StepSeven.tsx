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
} from "lucide-react";

const LOOKS = [
  {
    id: "soft_fabric",
    title: "Soft Fabric Shades",
    desc: "Elegant, cascading folds that add warmth and sophistication",
    icon: Wind,
  },
  {
    id: "clean_flat",
    title: "Clean, Flat Roller Look",
    desc: "Sleek, modern appearance that rolls up neatly out of sight",
    icon: Minus,
  },
  {
    id: "slats",
    title: "Slats (Blinds Or Shutters)",
    desc: "Classic horizontal or vertical slats for precise light control",
    icon: Columns,
  },
  {
    id: "sheer",
    title: "Sheer Or Layered Look",
    desc: "Light, ethereal fabrics that softly filter light",
    icon: Layers,
  },
  {
    id: "large_panel",
    title: "Large Panel / Vertical Look",
    desc: "Bold panels that glide smoothly - great for wide spaces",
    icon: LayoutGrid,
  },
  {
    id: "not_sure",
    title: "I'm Not Sure",
    desc: "Recommend for me based on my other preferences",
    icon: HelpCircle,
  },
  {
    id: "natural",
    title: "Natural Textured / Woven Woods",
    desc: "Organic materials like bamboo, jute, and grasses",
    icon: Trees,
  },
];

export default function StepSeven() {
  const { lookPreference, setLookPreference, nextStep, prevStep } = useFormStore();

  return (
    <div className="w-full flex flex-col md:gap-18 animate-in fade-in duration-700">
      <header className="space-y-4">
        <h1 className="text-[48px] heading-font text-[#1A1A1A] leading-[59px]">
          Which look do you prefer in this room?
        </h1>
        <p className="text-[#8E8E8E] text-[20px] leading-[20px] text-font">
          The aesthetic of your window treatments sets the tone for the entire space.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {LOOKS.map((look, index) => {
          const Icon = look.icon;
          const isSelected = lookPreference === look.id;
          const isLastItem = index === LOOKS.length - 1;

          return (
            <button
              key={look.id}
              onClick={() => setLookPreference(look.id)}
              className={`flex flex-col items-start p-8  transition-all text-left border min-h-[235px] ${
                isLastItem ? "md:col-span-3 min-h-[170px]" : "md:col-span-1"
              } ${
                isSelected
                  ? "bg-[#0F172A] border-[#0F172A] text-white shadow-xl z-10 scale-[1.01]"
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

              <div className={isLastItem ? "flex flex-col" : ""}>
                <h3 className={`text-[32px] heading-font mb-2 leading-[1.1] ${isSelected ? "text-white" : "text-[#1A1A1A]"}`}>
                  {look.title}
                </h3>

                <p className={`text-[18px] leading-[20px] text-font ${isSelected ? "text-slate-300" : "text-[#8E8E8E]"}`}>
                  {look.desc}
                </p>
              </div>
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
          disabled={!lookPreference}
          className={`flex-1 py-4 rounded-full text-white text-[14px] font-[700] text-font transition-all shadow-sm ${
            lookPreference ? "bg-[#BC9661] hover:brightness-105 active:scale-[0.98]" : "bg-[#D1C7B7] cursor-not-allowed"
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
